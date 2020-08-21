var express = require('express');
var router = express.Router();
var models = require('../models/index');


// get all todos
router.get('/', function (req, res) {
  models.Todo.findAll({}).then(function (todos) {
    res.json(todos);
  });
});

// add new todo
router.post('/', function (req, res) {
  models.Todo.create({
    title: req.body.title,
    UserId: req.body.userid
  }).then(function (todo) {
    res.json(todo);
  });
});

module.exports = router;
