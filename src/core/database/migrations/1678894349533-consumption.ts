import { MigrationInterface, QueryRunner } from "typeorm";

export class consumption1678894349533 implements MigrationInterface {
    name = 'consumption1678894349533'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "consumption" ("id" SERIAL NOT NULL, "licensePlate" character varying NOT NULL, "model" character varying NOT NULL, "maxFuelCapacity" integer NOT NULL, "maxLoad" integer NOT NULL, "averageFuelConsumption" integer NOT NULL, "traveledDistance" integer NOT NULL, CONSTRAINT "PK_90c8f17309014e5d0f244767367" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "consumption"`);
    }

}
