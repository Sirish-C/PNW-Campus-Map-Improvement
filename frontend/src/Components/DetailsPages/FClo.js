import React, { useState } from 'react';
import {  Marker, Tooltip} from "react-leaflet";
import L from 'leaflet';


const FClo  = () => {
    const [showMarker, setShowMarker] = useState(false);
  const [markerPosition, setMarkerPosition] = useState([41.586962687960856, -87.47538624504193]);


  const handleImageClick = () => {
    // Your custom logic to execute when the image is clicked
    console.log('Image clicked!');


    // Set the state to show the marker and specify its position
    setShowMarker(!showMarker);
    setMarkerPosition([41.586962687960856, -87.47538624504193]);
  };


  // Create an L.Icon instance with the iconUrl
  const customIcon = new L.Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/128/2015/2015741.png", // Replace with the path or URL to your custom icon
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
  });
  return (
  <div>
    <h2>Classroom Office Building (CLO)</h2>
    <img
        src="https://www.pnw.edu/wp-content/uploads/2020/01/clo-bldg-e1664400290208.jpg"
        alt="CLO Building"
        style={{ width: '100%', maxWidth: '500px', height: '170px', cursor: 'pointer' }}
        onClick={handleImageClick}
      />


<h2>First Floor</h2>
<ul>
<li>Student Life - Room 120A </li>
<li>Leo's Marketplace - Room 117</li>
<li>Student Lounge - Room 101</li>
<li>Multicultural Lounge - Room 180</li>
  <a href="https://www.pnw.edu/getting-to-pnw/wp-content/uploads/sites/7/2020/01/class-room-office-building-clo-first-floor.pdf" target="_blank">First Floor</a>
</ul>
<h2>Second Floor</h2>
<ul>
<li>Department of English & World Languages - Room 217</li>
<li>Department of History, Philosophy, Politics & Economics - Room 215</li>
<li>The Writing Center - Room 265</li>
  <a href="https://www.pnw.edu/getting-to-pnw/wp-content/uploads/sites/7/2020/01/class-room-office-building-clo-second-floor.pdf" target="_blank">Second Floor</a>
</ul>
<h2>Third Floor</h2>
<ul>
<li>College of Humanities, Education & Social Sciences - Room 315,317</li>
<li>Department of Mathematics, Computer Science & Statistics - Room 343,344</li>
  <a href="https://www.pnw.edu/getting-to-pnw/wp-content/uploads/sites/7/2020/01/class-room-office-building-clo-third-floor.pdf" target="_blank">Third Floor</a>
</ul>
{showMarker && (
        <Marker position={markerPosition} icon={customIcon} eventHandlers={{ click: () => setShowMarker(false) }}>
        <Tooltip>CLO Building</Tooltip>  
         
        </Marker>
      )}
  </div>
);
};
export default FClo;