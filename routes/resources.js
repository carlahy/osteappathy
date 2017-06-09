const express = require('express');
const router = express.Router();
const config = require('../config/database');
const Resources = require('../models/resources');

router.get('/', (req,res,next) => {
  Resources.getResources( (err, resources) => {
    if (err) throw err;
    if(!resources) {
      return res.json({success:false,msg:'Error loading resources'});
    }
    return res.json({success:true,resources:resources});
  });
});

module.exports = router;
