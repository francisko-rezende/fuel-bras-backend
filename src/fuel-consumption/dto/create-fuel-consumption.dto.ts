import { IsNumber, IsPositive, IsString, Matches } from 'class-validator';

export class CreateFuelConsumptionDto {
  @IsString()
  @Matches(/^[A-Z]{3}[0-9][0-9A-Z][0-9]{2}$/, {
    message: 'License plate is invalid. It must follow this format: AAA0A00.',
  })
  licensePlate: string;

  @IsString()
  model: string;

  @IsNumber()
  @IsPositive()
  maxFuelCapacity: number;

  @IsNumber()
  @IsPositive()
  maxLoad: number;

  @IsNumber()
  @IsPositive()
  averageFuelConsumption: number;

  @IsNumber()
  @IsPositive()
  traveledDistance: number;
}
