'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class stories extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  stories.init({
    summary: DataTypes.STRING,
    description: DataTypes.STRING,
    type: DataTypes.STRING,
    complexity: DataTypes.STRING,
    estimated_time_of_completion: DataTypes.STRING,
    cost: DataTypes.STRING,
    status: DataTypes.STRING,
    approved: DataTypes.BOOLEAN,
    rejected: DataTypes.BOOLEAN,
    added_by: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'stories',
  });
  return stories;
};