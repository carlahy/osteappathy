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
  ethnicity: {
    type: String,
    required: true
  },
  occupation: {
    type: String,
    required: true
  },
  site_of_complaint: {
    type: String,
    required: true
  },
  stage: {
    type: String,
    required: true
  },
  suitable_for_osteopathy: {
    type: String,
    required: true
  },
  treatments: [{
    treatment_date: String,
    treatment_used: String,
    vas: Number,
    qal: Number
  }],
  discharged: {
    type: Boolean,
    required: true
  }
});

const Patient = module.exports = mongoose.model('Patient', PatientSchema);

module.exports.getPatientById = function(id, callback){
  Patient.findById(id, callback);
};

module.exports.getPatientByNumber = function(patient_num, callback){
  const query = {patient_num: patient_num};
  Patient.findOne(query, callback);
};

module.exports.getPatientsByIds = function(patient_list,callback){
  var ids = [];
  patient_list = patient_list.split(',');
  for(var p in patient_list) {
    ids.push(mongoose.Types.ObjectId(patient_list[p]));
  }
  const query = {
    '_id': { $in: ids }
  };
  Patient.find(query, callback);
};

module.exports.addPatient = function(newPatient, callback){
  newPatient.save(callback);
};

module.exports.updatePatient = function(patient, callback) {

  Patient.update({_id:patient._id}, patient, callback);
}
