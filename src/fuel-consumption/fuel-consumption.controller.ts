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
import {
  ApiBadRequestResponse,
  ApiBody,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { docs } from './fuel-consumption-documentation';

@ApiTags('fuel consumption')
@Controller('fuel-consumption')
export class FuelConsumptionController {
  constructor(
    private readonly fuelConsumptionService: FuelConsumptionService,
  ) {}

  @Post()
  @ApiBadRequestResponse(docs.post.badRequestResponse)
  @ApiBody(docs.post.body)
  @ApiCreatedResponse(docs.post.createdResponse)
  @ApiOperation(docs.post.operation)
  async create(@Body() createFuelConsumptionDto: CreateFuelConsumptionDto) {
    try {
      return await this.fuelConsumptionService.create(createFuelConsumptionDto);
    } catch (error) {
      throw new HttpException({ error }, HttpStatus.BAD_REQUEST);
    }
  }

  @Get()
  @ApiBadRequestResponse(docs.get.badRequestResponse)
  @ApiOkResponse(docs.get.okResponse)
  @ApiOperation(docs.get.operation)
  async findAll() {
    try {
      return await this.fuelConsumptionService.findAll();
    } catch (error) {
      throw new HttpException({ error }, HttpStatus.BAD_REQUEST);
    }
  }

  @Delete(':id')
  @ApiBadRequestResponse(docs.delete.badRequestResponse)
  @ApiOkResponse(docs.delete.okResponse)
  @ApiOperation(docs.delete.operation)
  async remove(@Param('id') id: string) {
    try {
      return this.fuelConsumptionService.remove(+id);
    } catch (error) {
      throw new HttpException({ error }, HttpStatus.BAD_REQUEST);
    }
  }
}
