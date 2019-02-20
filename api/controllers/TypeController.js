var mongoose = require('mongoose'),
Type = mongoose.model('Tasks');

exports.list_all_types = function(req, res) {
  Type.find({}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};
