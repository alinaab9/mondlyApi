module.exports = function(app) {
  var todoList = require('../controllers/typeController');

  app.route('/types')
    .get(todoList.list_all_types)
};