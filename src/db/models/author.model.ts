import { DataTypes, Sequelize } from 'sequelize';

export const authorModelDefiner = (sequelize: Sequelize) => {
  sequelize.define('author', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    slug: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    birthday: {
      type: DataTypes.DATEONLY,
    },
    deathday: {
      type: DataTypes.DATEONLY,
    },
  });
};
