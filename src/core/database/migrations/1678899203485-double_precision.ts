import { MigrationInterface, QueryRunner } from "typeorm";

export class doublePrecision1678899203485 implements MigrationInterface {
    name = 'doublePrecision1678899203485'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "consumption" DROP COLUMN "maxFuelCapacity"`);
        await queryRunner.query(`ALTER TABLE "consumption" ADD "maxFuelCapacity" double precision NOT NULL`);
        await queryRunner.query(`ALTER TABLE "consumption" DROP COLUMN "maxLoad"`);
        await queryRunner.query(`ALTER TABLE "consumption" ADD "maxLoad" double precision NOT NULL`);
        await queryRunner.query(`ALTER TABLE "consumption" DROP COLUMN "averageFuelConsumption"`);
        await queryRunner.query(`ALTER TABLE "consumption" ADD "averageFuelConsumption" double precision NOT NULL`);
        await queryRunner.query(`ALTER TABLE "consumption" DROP COLUMN "traveledDistance"`);
        await queryRunner.query(`ALTER TABLE "consumption" ADD "traveledDistance" double precision NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "consumption" DROP COLUMN "traveledDistance"`);
        await queryRunner.query(`ALTER TABLE "consumption" ADD "traveledDistance" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "consumption" DROP COLUMN "averageFuelConsumption"`);
        await queryRunner.query(`ALTER TABLE "consumption" ADD "averageFuelConsumption" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "consumption" DROP COLUMN "maxLoad"`);
        await queryRunner.query(`ALTER TABLE "consumption" ADD "maxLoad" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "consumption" DROP COLUMN "maxFuelCapacity"`);
        await queryRunner.query(`ALTER TABLE "consumption" ADD "maxFuelCapacity" integer NOT NULL`);
    }

}
