import { Injectable } from '@nestjs/common';
import { Client, LatLng } from '@googlemaps/google-maps-services-js';
import * as dotenv from 'dotenv';

dotenv.config();

@Injectable()
export class DistanceMatrixService {
  private client: Client;

  constructor() {
    this.client = new Client({});
  }

  async getDistanceMatrix(
    origins: LatLng[],
    destinations: LatLng[],
  ): Promise<any> {
    const apiKey = process.env.GOOGLE_MAPS_API_KEY;
    return this.client
      .distancematrix({
        params: {
          origins: origins,
          destinations: destinations,
          key: apiKey,
        },
        timeout: 10000,
      })
      .then((response) => response.data)
      .catch((error) => {
        throw new Error(
          'Failed to retrieve distance matrix: ' +
            error.response.data.error_message,
        );
      });
  }
}
