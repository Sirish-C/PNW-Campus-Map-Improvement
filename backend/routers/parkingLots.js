const express = require('express');
const router = express.Router();
const parkingLots = require('../services/parkingLots');

/* GET programming languages. */
router.get('/', async function(req, res, next) {
  try {
    res.json(await parkingLots.getParkingLots(req.query.page));
  } catch (err) {
    console.error(`Error while getting parlinglots `, err.message);
    next(err);
  }
});

module.exports = router;