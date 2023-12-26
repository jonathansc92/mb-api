'use strict';
const bcrypt = require('bcrypt');

const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  users.init({
    email: DataTypes.STRING,
    name: DataTypes.STRING,
    document: DataTypes.STRING,
    date: DataTypes.DATE,
    phone: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    hooks: {
      beforeCreate: async (user) => {
        if (user.password) {
          const hashedPassword = await bcrypt.hash(user.password, 10);
          user.password = hashedPassword;
        }
      },
    },
    sequelize,
    modelName: 'users',
  });
  return users;
};