import path from 'path';
import { Options } from 'sequelize';

export const databaseConnectionConfig: Options = {
  dialect: 'sqlite',
  storage: path.join(__dirname, '..', 'db', 'database.sqlite'),
};
