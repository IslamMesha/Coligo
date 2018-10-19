var mongoose = require('mongoose')
var uuid = require('node-uuid')
require('mongoose-uuid2')(mongoose)
var UUID = mongoose.Types.UUID

var quizSchema = mongoose.Schema({
  _id: { type: UUID, default: uuid.v4 },
  name: String
})

var quiz = mongoose.model('Quiz', quizSchema)
module.exports = quiz
