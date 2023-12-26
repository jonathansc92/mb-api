'use strict';
const bcrypt = require('bcrypt');

const {
  Model
} = require('sequelize');

const { cleanDocument } = require('../utils/helper');

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

        if (user.date) {
          user.date = new Date(user.date).toISOString();
        }

        if (user.document) {
          user.document = cleanDocument(user.document);
        }

        if (user.phone) {
          user.phone = cleanDocument(user.phone);
        }
      },
    },
    sequelize,
    modelName: 'users',
  });
  return users;
};