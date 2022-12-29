import { Sequelize } from 'sequelize';
import { databaseConnectionConfig } from '../config/database.config';
import { applyExtraSetup } from './extra-setup';
import { authorModelDefiner, quoteModelDefiner } from './models';

const connection: Sequelize = new Sequelize(databaseConnectionConfig);

const modelDefiners: Array<(sequelize: Sequelize) => void> = [authorModelDefiner, quoteModelDefiner];

modelDefiners.forEach((modelDefiner) => {
  modelDefiner(connection);
});

applyExtraSetup(connection);

export default connection;
