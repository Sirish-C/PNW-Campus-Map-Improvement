// BuildingMap.js

import React from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

const buildingsData = [
  { id: 1, name: 'Anderson Building', description: 'Description for Building 1', location: [latitude, longitude] },
  // ... other building data
  { id: 2, name: 'Classroom Office Building', description: 'Description for Building 2' },
    { id: 3, name: 'Gyte', description: 'Description for Building 3' },
    { id: 4, name: 'Porter Hall', description: 'Description for Building 4' },
    { id: 5, name: 'Power Building', description: 'Description for Building 5' },
    { id: 6, name: 'Student Library', description: 'Description for Building 6' },
    { id: 7, name: 'Nils Building', description: 'Description for Building 7' },
    { id: 8, name: 'Lawshe Hall', description: 'Description for Building 8' },
    { id: 9, name: 'Fitness and Recreation Center', description: 'Description for Building 9' },
    { id: 10, name: 'Housing', description: 'Description for Building 10' },
    { id: 11, name: 'Housing', description: 'Description for Building 11' },
    { id: 12, name: 'University Police', description: 'Description for Building 12' },
];

const BuildingMap = ({ selectedBuilding }) => {
  return (
    <div className="building-map-container">
      <Map center={[initialLatitude, initialLongitude]} zoom={initialZoom}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {buildingsData.map((building) => (
          <Marker key={building.id} position={building.location}>
            <Popup>{building.name}</Popup>
          </Marker>
        ))}
      </Map>

      {selectedBuilding && (
        <div className="building-details">
          <h2>{selectedBuilding.name}</h2>
          <p>{selectedBuilding.description}</p>
        </div>
      )}
    </div>
  );
};

export default BuildingMap;
