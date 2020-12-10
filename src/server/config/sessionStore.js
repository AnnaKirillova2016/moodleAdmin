const dbConfig = require('db.config')
const session = require('express-session')
const MySQLStore = require('express-mysql-session')(session)

const options = {
  host: dbConfig.HOST,
  port: dbConfig.PORT,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: 'session',
  schema: {
    tableName: 'sessions',
    columnNames: {
      session_id: 'id',
      expires: 'expires',
      data: 'data'
    }
  }
}

let sessionStore = new MySQLStore(options)

module.exports = sessionStore
