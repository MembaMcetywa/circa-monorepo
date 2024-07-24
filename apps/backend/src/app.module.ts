import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PlacesModule } from './places/places.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import * as dotenv from 'dotenv';
import { PlacesController } from './places/places.controller';
import { PlacesService } from './places/places.service';
import { ConfigModule } from '@nestjs/config';

dotenv.config();

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    PlacesModule,
    MongooseModule.forRoot(process.env.MONGO_URI),
  ],
  controllers: [AppController, PlacesController],
  providers: [AppService, PlacesService],
})
export class AppModule {}
