const db = require('./db');
const helper = require('../helper');
const config = require('../config');

async function getEmergencyExits(){
  const emergencyExits = await db.query(
    `Select * From EmergencyExits , Buildings where EmergencyExits.building_id = Buildings.building_id;`
  );
  const data = helper.isEmpty(emergencyExits);
  return data;
}

module.exports = {
    getEmergencyExits
}