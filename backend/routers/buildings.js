const express = require('express');
const router = express.Router();
const buildings = require('../services/buildings');

/* GET programming languages. */
router.get('/', async function(req, res, next) {
  try {
    res.json(await buildings.getBuildings(req.query.page));
  } catch (err) {
    console.error(`Error while getting Building Details `, err.message);
    next(err);
  }
});

module.exports = router;