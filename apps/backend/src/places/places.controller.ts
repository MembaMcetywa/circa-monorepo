import { Controller, Get, Query } from '@nestjs/common';
import { PlacesService } from './places.service';

@Controller('api')
export class PlacesController {
  constructor(private placesService: PlacesService) {}

  @Get('/places')
  getPlaces(
    @Query('location') location: string,
    @Query('radius') radius: number,
  ) {
    return this.placesService.findPlacesNearby(location, radius);
  }
}
