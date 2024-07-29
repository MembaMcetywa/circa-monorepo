import { Module } from '@nestjs/common';
import { DirectionsService } from './directions.service';
import { DistanceMatrixService } from './distance-matrix.service';
import { DirectionsController } from './directions.controller';

@Module({
  controllers: [DirectionsController],
  providers: [DirectionsService, DistanceMatrixService],
})
export class DirectionsModule {}
