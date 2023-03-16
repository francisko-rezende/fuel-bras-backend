import { Module } from '@nestjs/common';
import { FuelConsumptionService } from './fuel-consumption.service';
import { FuelConsumptionController } from './fuel-consumption.controller';
import { databaseProviders } from 'src/core/database/database.providers';
import { fuelConsumptionProviders } from './fuel-consumption.providers';

@Module({
  controllers: [FuelConsumptionController],
  providers: [
    ...databaseProviders,
    ...fuelConsumptionProviders,
    FuelConsumptionService,
  ],
})
export class FuelConsumptionModule {}
