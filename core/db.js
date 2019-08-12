const Sequelize = require('sequelize')
const {
  dbName,
  host,
  port,
  user,
  password
} = require('../config/dbConfig').database
const sequelize = new Sequelize(dbName,user,password,{
  dialect:'mysql',
  host,
  port,
  logging: true,
  timezone: '+08:00',
  define:{
    underscored: true
  }
})
sequelize.sync()
module.exports = {
  sequelize
}