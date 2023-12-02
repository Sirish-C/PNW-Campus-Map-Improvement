// CampusMap.js

import React, { useState } from 'react';
import BuildingMap from './BuildingMap'; // Assuming you have created the BuildingMap component
import FloatingIcon from './FloatingIcon';

const CampusMap = () => {
  const [selectedBuilding, setSelectedBuilding] = useState(null);

  const updateSelectedBuilding = (building) => {
    setSelectedBuilding(building);
  };

  return (
    <div>
      <FloatingIcon updateSelectedBuilding={updateSelectedBuilding} />
      <BuildingMap selectedBuilding={selectedBuilding} />
    </div>
  );
};

export default CampusMap;
