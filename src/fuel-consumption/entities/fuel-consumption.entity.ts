import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'consumption' })
export class FuelConsumptionEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  licensePlate: string;

  @Column()
  formattedAverageFuelConsumptionByTonByKm: string;

  @Column()
  model: string;

  @Column('double precision')
  maxFuelCapacity: number;

  @Column('double precision')
  maxLoad: number;

  @Column('double precision')
  averageFuelConsumption: number;

  @Column('double precision')
  traveledDistance: number;
}
