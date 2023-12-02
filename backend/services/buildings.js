const db = require('./db');
const helper = require('../helper');
const config = require('../config');

async function getBuildings(){
  const buildings = await db.query(
    `SELECT  * FROM Buildings JOIN Coordinates ON Buildings.building_id= Coordinates.coordinate_id;`
  );
  const data = helper.isEmpty(buildings);
  return data;
}

module.exports = {
  getBuildings
}