const db = require('./db');
const helper = require('../helper');
const config = require('../config');

async function getParkingLots(){
  const parkingLots = await db.query(
    `Select * from ParkingLots , Buildings where ParkingLots.building_id = Buildings.building_id ;`
  );
  const data = helper.isEmpty(parkingLots);
  return data;
}

module.exports = {
    getParkingLots
}