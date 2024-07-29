import { Injectable } from '@nestjs/common';
import { Client, LatLng } from '@googlemaps/google-maps-services-js';
import * as dotenv from 'dotenv';

dotenv.config();

@Injectable()
export class DirectionsService {
  private client: Client;

  constructor() {
    this.client = new Client({});
  }

  async getDirections(origin: LatLng, destination: LatLng): Promise<any> {
    const apiKey = process.env.GOOGLE_MAPS_API_KEY;
    return this.client
      .directions({
        params: {
          origin: origin,
          destination: destination,
          key: apiKey,
        },
        timeout: 10000,
      })
      .then((response) => response.data)
      .catch((error) => {
        throw new Error(
          'Failed to retrieve directions: ' + error.response.data.error_message,
        );
      });
  }
}
