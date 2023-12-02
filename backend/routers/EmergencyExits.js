const express = require('express');
const router = express.Router();
const emergencyExits = require('../services/emergencyExits');

/* GET programming languages. */
router.get('/', async function(req, res, next) {
  try {
    res.json(await emergencyExits.getEmergencyExits(req.query.page));
  } catch (err) {
    console.error(`Error while getting emergency exits `, err.message);
    next(err);
  }
});

module.exports = router;