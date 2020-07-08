const { Sequelize, Model } = require('sequelize');
const { unset, clone, isArray } = require('lodash');
const {
  dbName,
  host,
  port,
  user,
  password,
} = require('../config/dbConfig').database;
const sequelize = new Sequelize(dbName, user, password, {
  dialect: 'mysql',
  host,
  port,
  logging: true,
  timezone: '+08:00',
  define: {
    underscored: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    deletedAt: 'deleted_at',
    scopes: {
      bh: {
        attributes: {
          exclude: ['updated_at', 'deleted_at', 'created_at'],
        },
      },
    },
  },
});
sequelize.sync({
  force: false,
});
Model.prototype.toJSON = function () {
  let data = clone(this.dataValues);
  unset(data, 'updated_at');
  unset(data, 'created_at');
  unset(data, 'deleted_at');
  if (isArray(this.exclude)) {
    this.exclude.forEach((value) => {
      unset(data, value);
    });
  }
  return data;
};
module.exports = {
  sequelize,
};
