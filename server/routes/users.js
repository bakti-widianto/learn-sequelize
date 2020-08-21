var express = require('express');
var router = express.Router();
var models = require('../models/index');

/* GET users listing. */
router.get('/', function (req, res) {
  models.User.findAll({
    include: [{
      model: models.Todo
    }]
  }).then(function (users) {
    res.json(users);
  }).catch(function (error) {
    res.json(error)
  });
});


router.post('/', function (req, res, next) {
  models.User.create({
    email: req.body.email
  }).then(function (user) {
    res.json(user);
  });
});

module.exports = router;
