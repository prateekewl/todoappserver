var express = require('express');
var router = express.Router();
var models = require('../models');


// Delete
router.post('/delete', function (req, res){
  models.List.deleteOne({_id: req.body.id}, (err, resp) => {
    console.log("deleted", resp);
    res.json({"status": "success", "msg": "list deleted"});
  });
});

// Update
router.post('/update', function (req, res) {
  console.log(req.body);
  models.List.findOne({_id: req.body._id}, (err, list) => {
    list.title = req.body.title;
    list.description = req.body.description;
    list.save();
    console.log(task);
    res.json({"status": "ok", "msg" : "list updated", "list": list});
  });
})
// Read
router.get('/getAll', function (req, res) {
  models.List.find({}, (err, lists) => {
    if(!err) {
      res.json({data: lists, status: "success"});
    }
    else {
      res.json({data: [], status: "failed"});
    }
  })
});
// Create
router.post('/add', function (req, res) {
  console.log(req.body);
  var list = new models.List({
    title: req.body.title,
    description: req.body.description
  });
  list.save();
  console.log(task);
  res.json({"status": "ok", "msg" : "list added", "list": list});
});

module.exports = router;
