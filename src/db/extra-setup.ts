import { Sequelize } from 'sequelize';

const applyExtraSetup = (sequelize: Sequelize) => {
  const { quote, author } = sequelize.models;

  author.hasMany(quote);
  quote.belongsTo(author);
};

export { applyExtraSetup };
