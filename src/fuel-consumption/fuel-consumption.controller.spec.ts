import { Test, TestingModule } from '@nestjs/testing';
import { FuelConsumptionController } from './fuel-consumption.controller';
import { FuelConsumptionService } from './fuel-consumption.service';

describe('FuelConsumptionController', () => {
  let controller: FuelConsumptionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FuelConsumptionController],
      providers: [FuelConsumptionService],
    }).compile();

    controller = module.get<FuelConsumptionController>(FuelConsumptionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
