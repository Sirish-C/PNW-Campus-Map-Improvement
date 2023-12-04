// BuildingMap.js

import React from 'react';
import { Link } from 'react-router-dom';
import Anderson from './DetailsPages/Anderson';
import Clo from './DetailsPages/Clo'; 
import Potters from './DetailsPages/Potters';
import Powers from './DetailsPages/Powers';
import Library from './DetailsPages/Library';
import Lawshe from './DetailsPages/Lawshe';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

const Building  = () => (
<div>
<ul>
      <li>
        <Link to="./DetailsPages/Anderson">Link 1</Link>
      </li>
      <li>
        <Link to="./DetailsPages/Clo">Link 2</Link>
      </li>
      {/* Add more list items as needed */}
    </ul>

</div>









);
export default Building;