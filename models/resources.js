const mongoose = require('mongoose');
const config = require('../config/database');

//type 0 = input, 1 = select

const ResourcesSchema = mongoose.Schema({
  key: {
    type: String,
    required: true
  },
  type: {
    type: Number,
    required: true
  },
  order: {
    type: Number,
    required: true
  },
  values: {
    type: [String],
    required: true
  },
  for: {
    type: String,
    required: true
  }
});

const Resources = module.exports = mongoose.model('Resources', ResourcesSchema);

module.exports.getResources = function(callback){
  Resources.find(callback);
};
