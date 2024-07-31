import { Controller, Get, Query } from '@nestjs/common';
import { PlacesService } from './places.service';
import { LatLng } from '@googlemaps/google-maps-services-js';

@Controller('api')
export class PlacesController {
  constructor(private placesService: PlacesService) {}

  @Get('/places')
  async getPlaces(
    @Query('location') location: string,
    @Query('radius') radius: number,
  ) {
    return this.placesService.findPlacesNearby(location, radius);
  }

  @Get('suggestions')
  async getPlaceSuggestions(
    @Query('input') input: string,
    @Query('lat') lat: number,
    @Query('lng') lng: number,
    @Query('radius') radius: number,
  ) {
    const location: LatLng = { lat, lng };
    return this.placesService.getPlaceSuggestions(input, location, radius);
  }
}
