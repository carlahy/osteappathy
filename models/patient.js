const mongoose = require('mongoose');
const config = require('../config/database');

// Patient Schema
const PatientSchema = mongoose.Schema({
  patient_num: {
    type: int,
    required: true
  },
  sex: {
    type: char
  },
  age {
    type: int
  }
  occupation: {
    type: String
  },
  case: {
    type: Object
  }
});

const Patient = module.exports = mongoose.model('Patient', UserSchema);

module.exports.getPatientById = function(id, callback){
  Patient.findById(id, callback);
};

module.exports.getPatientByNumber = function(patient_num, callback){
  const query = {patient_num: patient_num};
  Patient.findOne(query, callback);
};
