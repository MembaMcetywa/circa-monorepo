import { Injectable, Logger } from '@nestjs/common';
import { Client, LatLng } from '@googlemaps/google-maps-services-js';
import * as dotenv from 'dotenv';
import { response } from 'express';

dotenv.config();
@Injectable()
export class PlacesService {
  private client: Client;
  private readonly logger = new Logger(PlacesService.name);

  constructor() {
    this.client = new Client({});
  }

  async findPlacesNearby(location: LatLng, radius: number): Promise<any> {
    const apiKey = process.env.GOOGLE_MAPS_API_KEY;
        this.logger.debug(
          `Fetching places nearby location: ${JSON.stringify(location)}, and radius: ${radius}`,
        );
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
  async getPlaceSuggestions(
    input: string,
    location: LatLng,
    radius: number = 1000,
  ): Promise<any> {
    const apiKey = process.env.GOOGLE_MAPS_API_KEY;
    this.logger.debug(
      `Fetching place suggestions with input: ${input}, location: ${JSON.stringify(location)}, and radius: ${radius}`,
    );
    return this.client
      .placeAutocomplete({
        params: {
          key: apiKey,
          input: input,
          location: location,
          radius: radius,
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
