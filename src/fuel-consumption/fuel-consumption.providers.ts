import { DataSource } from 'typeorm';
import { FuelConsumptionEntity } from './entities/fuel-consumption.entity';

export const fuelConsumptionProviders = [
  {
    provide: 'FUEL_CONSUMPTION_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(FuelConsumptionEntity),
    inject: ['DATA_SOURCE'],
  },
];
