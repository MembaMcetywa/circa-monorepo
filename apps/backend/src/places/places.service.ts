import { Injectable } from '@nestjs/common';
import { Client, LatLng } from '@googlemaps/google-maps-services-js';
import * as dotenv from 'dotenv';

dotenv.config();
@Injectable()
export class PlacesService {
  private client: Client;

  constructor() {
    this.client = new Client({});
  }

  async findPlaces(location: LatLng, radius: number): Promise<any> {
    const apiKey = process.env.GOOGLE_MAPS_API_KEY;
    return this.client
      .placesNearby({
        params: {
          location: location,
          radius, //in meters
          key: apiKey,
        },
        timeout: 10000,
      })
      .then((response) => response.data)
      .catch((error) => {
        throw new Error(
          'Failed to retrieve places: ' + error.response.data.error_message,
        );
      });
  }
}
