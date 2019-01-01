var express = require('express');
var router = express.Router();
var models = require('../models');

// Delete
router.post('/delete', function (req, res){
  models.User.deleteOne({_id: req.body.id}, (err, resp) => {
    console.log("deleted", resp);
    res.json({"status": "success", "msg": "info deleted"});
  });
});

// Update
router.post('/update', function (req, res) {
  console.log(req.body);
  models.User.findOne({_id: req.body.id}, (err, task) => {
    task.email = req.body.email;
    task.firstname = req.body.firstname;
    task.lastname = req.body.lastname;
    task.password = req.body.password;
    task.save();
    console.log(task);
    res.json({"status": "ok", "msg" : "updated", "task": task});
  });
})
// Read
router.get('/getAll', function (req, res) {
  models.User.find({}, (err, tasks) => {
    if(!err) {
      res.json({data: tasks, status: "success"});
    }
    else {
      res.json({data: [], status: "failed"});
    }
  })
});
// Create
router.post('/add', function (req, res) {
  console.log(req.body);
  var task = new models.User({
    email: req.body.email,
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    password: req.body.password
  });
  task.save();
  console.log(task);
  res.json({"status": "ok", "msg" : "info added", "task": task});
});

module.exports = router;
