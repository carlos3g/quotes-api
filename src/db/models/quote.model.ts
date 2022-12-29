import { DataTypes, Sequelize } from 'sequelize';

export const quoteModelDefiner = (sequelize: Sequelize) => {
  sequelize.define('quote', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  });
};
