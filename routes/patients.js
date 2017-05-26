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
    occupation: req.body.occupation,
    consult_date: req.body.consult_date,
    body_part: req.body.body_part,
    injury_detail: req.body.injury_detail,
    stage: req.body.stage,
    treatments: req.body.treatments,
    discharged:req.body.discharged
  });

  Patient.addPatient(newPatient, (err,patient) => {
    if(err) {
      if(err.code == 11000) { // Duplicate key error (for patient_num)
        res.json({success:false, msg:'Patient could not be created: patient number is already in use'});
      } else {
        res.json({success:false, msg:'Something went wrong, patient could not be created', err:err});
      }
    } else {
      res.json({success:true, msg:'New patient was created'});
    }
  });
});

// Read patient (get)

router.get('/readall', (req,res,next) => {
  Patient.getPatientsForUser( (err, patients) => {
    if (err) throw err;
    if(!patients) {
      return res.json({success:false,msg:'Patients not found'});
    }
    return res.json({success:true,patients:patients});
  });
});

// router.get('/read', (req,res,next) => {
//   Patient.getPatientByNumber()
// });

// Update patient


// Delete patient

module.exports = router;
