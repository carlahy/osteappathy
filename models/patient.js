const mongoose = require('mongoose');
const config = require('../config/database');

// Patient Schema
const PatientSchema = mongoose.Schema({
  patient_num: {
    type: Number,
    required: true
  },
  sex: {
    type: String
  },
  age: {
    type: Number
  },
  occupation: {
    type: String
  },
  case: {
    type: Object
  }
});

const Patient = module.exports = mongoose.model('Patient', PatientSchema);

// module.exports.getPatientById = function(id, callback){
//   Patient.findById(id, callback);
// };

module.exports.getPatientByNumber = function(patient_num, callback){
  const query = {patient_num: patient_num};
  Patient.findOne(query, callback);
};

module.exports.getPatientsForUser = function(callback){
  // const query = {user: user};
  // TODO: get unique user id
  Patient.find(callback);
};

module.exports.addPatient = function(newPatient, callback){
  newPatient.save(callback);
};
