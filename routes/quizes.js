var express = require('express')
var router = express.Router()
var quizModel = require('../models/quiz')

//  GET quizes listing.
router.get('/', function (req, res, next) {
  console.log('List all quizes.')
  quizModel.find({}, (err, quizes) => {
    if (!err) {
      console.log('Quizes are: ', quizes)
      res.send(quizes)
      // res.render('index', { title: 'Islam Mesha', quizes })
    } else {
      res.sendStatus(500)
    }
  })
})

// Create a new quiz.
router.post('/create', function (req, res, next) {
  console.log('Create a new quiz.')

  if (!req.body) {
    return res.sendStatus(400)
  } else {
    let newQuiz = {
      name: req.body.name
    }

    quizModel.create(newQuiz, (err, quiz) => {
      if (!err) {
        console.log('Quiz created successfully: ', quiz)
        res.send(quiz)
      } else {
        return res.sendStatus(500)
      }
    })
  }
})

module.exports = router
