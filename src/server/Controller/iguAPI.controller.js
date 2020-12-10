const request = require('request')

exports.facultets = (req, res) => {
  request({
    uri: 'http://py.isu.ru:8000/hs/rest_http1c/facultets',
    /*function (error, response, body) {
      if (!error) {
        response.setHeader('Access-Control-Allow-Origin', '*')
        response.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept')
      }
    }*/
  }).pipe(res)
}
exports.directions = (req, res) => {
  request({
    uri: 'http://py.isu.ru:8000/hs/rest_http1c/directions_all'
  }).pipe(res)
}
exports.directionsYear = (req, res) => {
  request({
    uri: 'http://py.isu.ru:8000/hs/rest_http1c/directions_' + req.params.id,
    body: req.body,
    json: true,
    headers: {}
  }).then(function (res) {
    res.header('Access-Control-Allow-Origin', '*')
  }).pipe(res)
}
