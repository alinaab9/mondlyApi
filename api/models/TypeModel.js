var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TypeSchema = new Schema({
  name: {
    type: String,
    required: 'Kindly enter the name'
  },
  Birth_date: {
    type: Date,
  },
  status: {
    type: [{
      type: String,
      enum: ['family', 'friends']
    }],
    default: ['family']
  }
});

module.exports = mongoose.model('Types', TypeSchema);