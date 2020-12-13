
const request = require('request')

exports.CreateCat = (req, res) => {
  let url = 'http://localhost/webservice/rest/server.php?'
  url += 'wstoken=4e9c7fa0e855f4bd5c9c6625ca35d38d' // + req.body.token
  url += '&moodlewsrestformat=json'
  url += '&wsfunction=core_course_create_categories'
  request({
    uri: url,
    qs: {
      categories: [{
        name: req.body.name,
        parent: req.body.parent,
        idnumber: req.body.idnumber,
        description: req.body.description
      }]
    },
    json: true,
    method: 'POST'

  }).pipe(res)
}

exports.getAllCat = (req, res) => {
  request({
    method: 'GET',
    uri: 'http://localhost/webservice/rest/server.php?wstoken=07fd9f40ab52e4ce98340fdcb7918bb5&wsfunction=core_course_get_categories&moodlewsrestformat=json'
    /* qs: {
      api_key: '123456',
      query: 'World of Warcraft: Legion'
    } */
  }).pipe(res)
}
