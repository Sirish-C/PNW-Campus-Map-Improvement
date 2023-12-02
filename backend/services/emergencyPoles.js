const db = require('./db');
const helper = require('../helper');
const config = require('../config');

async function getEmergencyPoles(){
  const emergencyPoles = await db.query(
    `Select * from EmergencyPoles , Buildings where EmergencyPoles.Building_id = Buildings.building_id;`
  );
  const data = helper.isEmpty(emergencyPoles);
  return data;
}

module.exports = {
    getEmergencyPoles
}