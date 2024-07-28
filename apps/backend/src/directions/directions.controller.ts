import { Controller, Get, Query } from '@nestjs/common';
import { DirectionsService } from './directions.service';
import { DistanceMatrixService } from './distance-matrix.service';
import { LatLng } from '@googlemaps/google-maps-services-js';

@Controller('api')
export class DirectionsController {
  constructor(
    private readonly directionsService: DirectionsService,
    private readonly distanceMatrixService: DistanceMatrixService,
  ) {}

  @Get('directions')
  async getDirections(
    @Query('originLat') originLat: number,
    @Query('originLng') originLng: number,
    @Query('destinationLat') destinationLat: number,
    @Query('destinationLng') destinationLng: number,
  ) {
    const origin: LatLng = { lat: originLat, lng: originLng };
    const destination: LatLng = { lat: destinationLat, lng: destinationLng };
    return this.directionsService.getDirections(origin, destination);
  }

  @Get('distance-matrix')
  async getDistanceMatrix(
    @Query('originLat') originLat: number,
    @Query('originLng') originLng: number,
    @Query('destinationLat') destinationLat: number,
    @Query('destinationLng') destinationLng: number,
  ) {
    const origins: LatLng[] = [{ lat: originLat, lng: originLng }];
    const destinations: LatLng[] = [
      { lat: destinationLat, lng: destinationLng },
    ];
    return this.distanceMatrixService.getDistanceMatrix(origins, destinations);
  }
}
