const express = require('express');
const router = express.Router();
const emergencyPoles = require('../services/emergencyPoles');

/* GET programming languages. */
router.get('/', async function(req, res, next) {
  try {
    res.json(await emergencyPoles.getEmergencyPoles(req.query.page));
  } catch (err) {
    console.error(`Error while getting emergency Poles `, err.message);
    next(err);
  }
});

module.exports = router;