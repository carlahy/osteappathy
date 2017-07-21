const express = require('express');
const router = express.Router();
const config = require('../config/database');
const Patient = require('../models/patient');

// Create patient

router.post('/create', (req, res, next) => {
  let newPatient = new Patient({
    patient_num: req.body.patient_num,
    sex: req.body.sex,
    dob: req.body.dob,
    age: req.body.age,
    ethnicity: req.body.ethnicity,
    occupation: req.body.occupation,
    site_of_complaint: req.body.site_of_complaint,
    stage: req.body.stage,
    suitable_for_osteopathy: req.body.suitable_for_osteopathy,
    notes: req.body.notes,
    treatments: req.body.treatments,
    discharged:req.body.discharged
  });

  Patient.addPatient(newPatient, (err,patient) => {
    if(err) {
      if(err.code == 11000) { // Duplicate key error (for patient_num)
        // TODO: patient number has to be unique for the user, not for all users
        res.json({success:false, msg:'Patient could not be created, patient number is already in use'});
      } else {
        console.log(err);
        res.json({success:false, msg:'Something went wrong, patient could not be created ' + err, err:err});
      }
    } else {
      // Add new patient ID to user patient list

      res.json({success:true, patient_id: patient._id, msg:'New patient was created'});
    }
  });
});

// Read patients for user

router.get('/user', (req,res,next) => {
  Patient.getPatientsByIds( req.query.patient_list, (err, patients) => {
    if (err) throw err;
    if(!patients) {
       return res.json({success:false,msg:'Patients not found'});
    }
    return res.json({success:true,patients:patients});
  });
});

router.get('/id', (req,res,next) => {
  Patient.getPatientById( (err, patients) => {
    if (err) throw err;
    if(!patients) {
      return res.json({success:false,msg:'Patients not found'});
    }
    return res.json({success:true,patients:patients});
  })
});

// Read all patients in patient db

router.get('/all', (req,res,next) => {
  // Patient.getPatientByNumber()
});

// Update patient
router.post('/update', (req,res,next) => {
  Patient.updatePatient(req.body.patient, (err,patient) => {
    if(err) throw err;
    return res.json({success:true,msg:'Updated patient information'});
  });
});


// Delete patient

module.exports = router;
