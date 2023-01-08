import path from 'path';
import { DataSource, DataSourceOptions } from 'typeorm';
import { SeederOptions } from 'typeorm-extension';

const dataSourceOptions: DataSourceOptions & SeederOptions = {
  type: 'sqlite',
  database: path.join(__dirname, 'database.sqlite'),
  entities: [path.join(__dirname, '../entities/*.entity.?s')],
  migrations: [path.join(__dirname, 'migrations/*.?s')],
  seeds: [path.join(__dirname, 'seeds/*.seed.?s')],
};

const dataSource = new DataSource(dataSourceOptions as DataSourceOptions);

export { dataSource };
