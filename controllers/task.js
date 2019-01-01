var express = require('express');
var router = express.Router();
var models = require('../models');


// Delete
router.post('/delete', function (req, res){
  models.Task.deleteOne({_id: req.body.id}, (err, resp) => {
    console.log("deleted", resp);
    res.json({"status": "success", "msg": "task deleted"});
  });
});

// Update
router.post('/update', function (req, res) {
  console.log(req.body);
  models.Task.findOne({_id: req.body._id}, (err, task) => {
    task.title = req.body.title;
    task.description = req.body.description;
    task.save();
    console.log(task);
    res.json({"status": "ok", "msg" : "task updated", "task": task});
  });
})
// Read
router.get('/getAll', function (req, res) {
  models.Task.find({}, (err, tasks) => {
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
  var task = new models.Task({
    title: req.body.title,
    description: req.body.description
  });
  task.save();
  console.log(task);
  res.json({"status": "ok", "msg" : "task added", "task": task});
});

module.exports = router;
