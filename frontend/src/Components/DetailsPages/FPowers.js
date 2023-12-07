import React, { useState } from 'react';
import {  Marker, Tooltip} from "react-leaflet";
import L from 'leaflet';


const Powers  = () => {
    const [showMarker, setShowMarker] = useState(false);
  const [markerPosition, setMarkerPosition] = useState([41.58639283346341, -87.47530466562853]);


  const handleImageClick = () => {
    // Your custom logic to execute when the image is clicked
    console.log('Image clicked!');


    // Set the state to show the marker and specify its position
    setShowMarker(true);
    setMarkerPosition([41.58639283346341, -87.47530466562853]);
  };


  // Create an L.Icon instance with the iconUrl
  const customIcon = new L.Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/128/3854/3854232.png", // Replace with the path or URL to your custom icon
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
  });
return (
  <div>
    <h2>Powers Building</h2>
    <img
        src="https://www.pnw.edu/college-of-business/wp-content/uploads/sites/19/2023/08/DSC_0098-900x600.jpg"
        alt="Powers Building"
        style={{ width: '100%', maxWidth: '500px', height: 'auto', cursor: 'pointer' }}
        onClick={handleImageClick}
      />
   
<h2>First Floor</h2>
<ul>
<li>Center forInnovation through Visualization & Simulation (CIVS) - Room 123 </li>
<li>Computer Labs - Room 129-144</li>
  <a href="https://www.pnw.edu/getting-to-pnw/wp-content/uploads/sites/7/2020/01/powers-building-first-floor.pdf" target="_blank">First Floor</a>
</ul>
<h2>Second Floor</h2>
<ul>
<li>Conference Room - Room 201</li>
<li>Faculty Training Center - Room 204</li>
<li>Network Infrastructure Management and Maintenance - Room 208</li>
<li>Mechanical Engineering - Room 211</li>
<li>Enterprise Systems - Room 216</li>
<li> IT Help Desk - Room 216</li>
<li> Technological Infrastructure Services - Room 216</li>
<li>Computer Operations & Telephone Services - Room 218</li>
  <a href="https://www.pnw.edu/getting-to-pnw/wp-content/uploads/sites/7/2020/01/powers-building-second-floor.pdf" target="_blank">Second Floor</a>
</ul>
{showMarker && (
        <Marker position={markerPosition} icon={customIcon} eventHandlers={{ click: () => setShowMarker(false) }}>
        <Tooltip>Powers Building</Tooltip>
        </Marker>
      )}
  </div>
);
};
export default Powers;
