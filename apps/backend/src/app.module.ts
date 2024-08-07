import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PlacesModule } from './places/places.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import * as dotenv from 'dotenv';
import { PlacesController } from './places/places.controller';
import { PlacesService } from './places/places.service';
import { ConfigModule } from '@nestjs/config';
import { DirectionsController } from './directions/directions.controller';
import { DirectionsService } from './directions/directions.service';
import { DistanceMatrixService } from './directions/distance-matrix.service';
import { AuthModule } from './auth/auth.module';

dotenv.config();

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.MONGO_URI),
    AuthModule,
  ],
  controllers: [AppController, PlacesController, DirectionsController],
  providers: [
    AppService,
    PlacesService,
    DirectionsService,
    DistanceMatrixService,
  ],
})
export class AppModule {}
