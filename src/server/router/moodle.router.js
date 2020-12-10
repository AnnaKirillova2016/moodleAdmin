module.exports = server => {
  const MoodleAPI = require('../Controller/moodleAPI.controller')
  server.all('/moodleapi/createcat', MoodleAPI.CreateCat)
  server.all('/moodleapi/getallcat', MoodleAPI.getAllCat)
}
