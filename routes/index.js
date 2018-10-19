var express = require('express')
var router = express.Router()

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express', names: ['Islam', 'Muhammad', 'Mesha', 'Asmaa'] })
})

module.exports = router
