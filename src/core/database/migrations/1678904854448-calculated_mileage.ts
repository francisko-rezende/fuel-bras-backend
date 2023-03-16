import { MigrationInterface, QueryRunner } from "typeorm";

export class calculatedMileage1678904854448 implements MigrationInterface {
    name = 'calculatedMileage1678904854448'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "consumption" ADD "formattedAverageFuelConsumptionByTonByKm" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "consumption" DROP COLUMN "formattedAverageFuelConsumptionByTonByKm"`);
    }

}
