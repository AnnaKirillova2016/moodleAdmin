module.exports = server => {
  const User = require('../Controller/user.controller')
  server.post('/user', User.create)
  server.get('/user', User.findAll)
  server.get('/user/:id', User.findOne)
  server.put('/user/:id', User.update)
  server.delete('/user/:id', User.delete)
  server.delete('/user', User.deleteAll)
}
