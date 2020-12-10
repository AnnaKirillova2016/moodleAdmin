module.exports = server => {
  const IGUApi = require('../Controller/iguAPI.controller')
  server.get('/iguapi/facultets', IGUApi.facultets)
  server.get('/iguapi/directions', IGUApi.directions)
  server.post('/iguapi/directions/:id', IGUApi.directionsYear)
}
