const express = require('express');
const router = express.Router();
const buildings = require('../services/buildings');

/* GET programming languages. */
router.get('/', async function(req, res, next) {
  try {
    res.json(await buildings.getMultiple(req.query.page));
  } catch (err) {
    console.error(`Error while getting programming languages `, err.message);
    next(err);
  }
});

module.exports = router;