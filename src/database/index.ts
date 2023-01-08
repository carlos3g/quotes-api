import { DataSource } from 'typeorm';

import * as entities from '../entities';

const dataSource = new DataSource({
  type: 'sqlite',
  database: './src/database/database.sqlite',
  entities,
  migrations: ['./src/migrations/*.ts'],
});

export { dataSource };
