import { MigrationInterface, QueryRunner } from 'typeorm';

export class createQuotes1672797935337 implements MigrationInterface {
  name = 'createQuotes1672797935337';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "quotes" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "body" varchar NOT NULL, "authorId" integer)`
    );
    await queryRunner.query(
      `CREATE TABLE "authors" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "slug" varchar NOT NULL, "birthday" date NOT NULL, "deathday" date NOT NULL)`
    );
    await queryRunner.query(
      `CREATE TABLE "temporary_quotes" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "body" varchar NOT NULL, "authorId" integer, CONSTRAINT "FK_7da9efd0f2925f08e59dcb2b8fe" FOREIGN KEY ("authorId") REFERENCES "authors" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`
    );
    await queryRunner.query(
      `INSERT INTO "temporary_quotes"("id", "body", "authorId") SELECT "id", "body", "authorId" FROM "quotes"`
    );
    await queryRunner.query(`DROP TABLE "quotes"`);
    await queryRunner.query(`ALTER TABLE "temporary_quotes" RENAME TO "quotes"`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "quotes" RENAME TO "temporary_quotes"`);
    await queryRunner.query(
      `CREATE TABLE "quotes" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "body" varchar NOT NULL, "authorId" integer)`
    );
    await queryRunner.query(
      `INSERT INTO "quotes"("id", "body", "authorId") SELECT "id", "body", "authorId" FROM "temporary_quotes"`
    );
    await queryRunner.query(`DROP TABLE "temporary_quotes"`);
    await queryRunner.query(`DROP TABLE "authors"`);
    await queryRunner.query(`DROP TABLE "quotes"`);
  }
}
