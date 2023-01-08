import { DataSource, DataSourceOptions } from 'typeorm';
import { SeederOptions } from 'typeorm-extension';

const dataSourceOptions: DataSourceOptions & SeederOptions = {
  type: 'sqlite',
  database: './dist/database/database.sqlite',
  entities: ['./dist/entities/*.entity.js'],
  migrations: ['./dist/database/migrations/*.js'],
  seeds: ['./dist/database/seeds/*.seed.js'],
};

const dataSource = new DataSource(dataSourceOptions as DataSourceOptions);

export { dataSource };
