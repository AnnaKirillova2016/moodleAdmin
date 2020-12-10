const mysql = require('mysql')
const dbConf = require('./config/db.config')

const db = mysql.createConnection({
  host: dbConf.HOST,
  user: dbConf.USER,
  password: dbConf.PASSWORD,
  database: dbConf.DB
})

db.connect(error => {
  if (error) throw error
  console.log('Successfully connected to the database.')
})

module.exports = db
