import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class createUsers1673543497193 implements MigrationInterface {
  name = 'createUsers1673543497193';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'users',
        columns: [
          {
            name: 'id',
            type: 'integer',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'name',
            type: 'varchar',
          },
          {
            name: 'slug',
            type: 'varchar',
          },
          {
            name: 'email',
            type: 'varchar',
            isUnique: true,
          },
          {
            name: 'password',
            type: 'varchar',
          },
        ],
      })
    );

    await queryRunner.createTable(
      new Table({
        name: 'users_favorite_quotes',
        columns: [
          {
            name: 'usersId',
            type: 'integer',
            isPrimary: true,
            isGenerated: false,
          },
          {
            name: 'quotesId',
            type: 'integer',
            isPrimary: true,
            isGenerated: false,
          },
        ],
        foreignKeys: [
          {
            name: 'user',
            referencedTableName: 'users',
            referencedColumnNames: ['id'],
            columnNames: ['usersId'],
            onDelete: 'cascade',
          },
          {
            name: 'quote',
            referencedTableName: 'quotes',
            referencedColumnNames: ['id'],
            columnNames: ['quotesId'],
            onDelete: 'cascade',
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('users');
    await queryRunner.dropTable('users_favorite_quotes');
  }
}
