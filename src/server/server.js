const express = require('express')
const morgan = require('morgan')
// const Cors = require('cors')
// const passport = require('passport')
// const sessionStore = require('./config/sessionStore')
// const session = require('express-session')

const server = express()

server.use(morgan('dev'))
server.use(express.json())
server.use(express.json({ limit: '5MB' }))

server.use(function (req, res, next) {
  var origins = [
    'http://localhost',
    'http://127.0.0.1'
  ]

  /*for (let i = 0; i < origins.length; i++) {
    let origin = origins[i]

    if (req.headers.origin.indexOf(origin) > -1) {
      res.header('Access-Control-Allow-Origin', req.headers.origin)
    }
  }*/

  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})

// server.use(Cors)
// server.use(passport.initialize())
// server.use(passport.session())
/* server.use(session({
  key: 'moodleAdmin_Cookies',
  secret: 'Kfmrfmoi345rf90ewfkc43099KeO43tRF90DCgWEF023',
  store: sessionStore,
  resave: false,
  saveUninitialized: false
})) */
server.use(express.urlencoded({extended: false}))
server.all('/', async function (req, res) {
  res.header('Access-Control-Allow-Origin', '*')
  res.send('It is API')
})

require('./router/user.router')(server)
require('./router/igu.router')(server)
require('./router/moodle.router')(server)
server.listen(3000, function () {
  console.log('API Server is started')
})
