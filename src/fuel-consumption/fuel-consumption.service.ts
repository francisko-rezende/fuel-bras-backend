import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateFuelConsumptionDto } from './dto/create-fuel-consumption.dto';
import { FuelConsumptionEntity } from './entities/fuel-consumption.entity';

@Injectable()
export class FuelConsumptionService {
  constructor(
    @Inject('FUEL_CONSUMPTION_REPOSITORY')
    private fuelConsumptionRepository: Repository<FuelConsumptionEntity>,
  ) {}

  create(createFuelConsumptionDto: CreateFuelConsumptionDto) {
    return new Promise(async (resolve, reject) => {
      try {
        const newEntry = this.fuelConsumptionRepository.create(
          createFuelConsumptionDto,
        );

        const result = await this.fuelConsumptionRepository.save(newEntry);

        resolve(result);
      } catch (error) {
        reject(error);
      }
    });
  }

  findAll() {
    return new Promise(async (resolve, reject) => {
      try {
        const entries = await this.fuelConsumptionRepository.find();
        entries.sort((a, b) => b.id - a.id);
        resolve(entries);
      } catch (error) {
        reject(error);
      }
    });
  }

  remove(id: number) {
    return new Promise(async (resolve, reject) => {
      try {
        await this.fuelConsumptionRepository.delete(id);
        resolve({ message: 'Entry deleted successfully.' });
      } catch (error) {
        reject(error);
      }
    });
  }
}
