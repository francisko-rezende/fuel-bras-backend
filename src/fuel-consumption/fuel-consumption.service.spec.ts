import { Test, TestingModule } from '@nestjs/testing';
import { FuelConsumptionService } from './fuel-consumption.service';

describe('FuelConsumptionService', () => {
  let service: FuelConsumptionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FuelConsumptionService],
    }).compile();

    service = module.get<FuelConsumptionService>(FuelConsumptionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
