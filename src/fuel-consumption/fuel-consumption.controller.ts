import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  HttpStatus,
  HttpException,
} from '@nestjs/common';
import { FuelConsumptionService } from './fuel-consumption.service';
import { CreateFuelConsumptionDto } from './dto/create-fuel-consumption.dto';

@Controller('fuel-consumption')
export class FuelConsumptionController {
  constructor(
    private readonly fuelConsumptionService: FuelConsumptionService,
  ) {}

  @Post()
  async create(@Body() createFuelConsumptionDto: CreateFuelConsumptionDto) {
    try {
      return await this.fuelConsumptionService.create(createFuelConsumptionDto);
    } catch (error) {
      throw new HttpException({ error }, HttpStatus.BAD_REQUEST);
    }
  }

  @Get()
  async findAll() {
    try {
      return await this.fuelConsumptionService.findAll();
    } catch (error) {
      throw new HttpException({ error }, HttpStatus.BAD_REQUEST);
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    try {
      return this.fuelConsumptionService.remove(+id);
    } catch (error) {
      throw new HttpException({ error }, HttpStatus.BAD_REQUEST);
    }
  }
}
