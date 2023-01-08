import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class createQuotes1672797956787 implements MigrationInterface {
  name = 'createQuotes1672797956787';

  async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'quotes',
        columns: [
          {
            name: 'id',
            type: 'integer',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'body',
            type: 'varchar',
          },
          {
            name: 'author_id',
            type: 'integer',
          },
        ],
        foreignKeys: [
          {
            name: 'author',
            referencedTableName: 'authors',
            referencedColumnNames: ['id'],
            columnNames: ['author_id'],
          },
        ],
      })
    );
  }

  async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('quotes');
  }
}
