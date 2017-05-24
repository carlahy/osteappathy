const mongoose = require('mongoose');
const config = require('../config/database');

// Patient Schema
const PatientSchema = mongoose.Schema({
  patient_num: {
    type: Number,
    required: true
  },
  sex: {
    type: String,
    required: true
  },
  dob: {
    type: Date,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  occupation: {
    type: String,
    required: true
  },
  consult_date: {
    type: Date,
    required: true
  },
  body_part: {
    type: String,
    required: true
  },
  injury_detail: {
    type: String,
    required: true
  },
  stage: {
    type: String,
    required: true
  },
  discharged: {
    type: Boolean
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
