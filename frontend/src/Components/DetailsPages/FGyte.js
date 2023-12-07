import React, { useState } from 'react';
import {  Marker, Tooltip} from "react-leaflet";
import L from 'leaflet';




const Gyte  = () => {const [showMarker, setShowMarker] = useState(false);
    const [markerPosition, setMarkerPosition] = useState([41.58531876792566, -87.47442502809437]);
 
    const handleImageClick = () => {
      // Your custom logic to execute when the image is clicked
      console.log('Image clicked!');
 
      // Set the state to show the marker and specify its position
      setShowMarker(true);
      setMarkerPosition([41.58531876792566, -87.47442502809437]);
    };
 
    // Create an L.Icon instance with the iconUrl
    const customIcon = new L.Icon({
      iconUrl: "https://cdn-icons-png.flaticon.com/128/4696/4696164.png", // Replace with the path or URL to your custom icon
      iconSize: [32, 32],
      iconAnchor: [16, 32],
      popupAnchor: [0, -32],
    });
    return (
  <div>
<h2>GYTE Building</h2>
<img
        src="https://www.pnw.edu/crime-forensics/wp-content/uploads/sites/32/2021/11/Gyte_Building_Exterior_KCF_Hammond_2020.17-3-900x600.jpg"
        alt="Gyte Building"
        style={{ width: '100%', maxWidth: '500px', height: 'auto', cursor: 'pointer' }}
        onClick={handleImageClick}
      />
<h2>Ground Floor</h2>
<ul>
<li>Computer Lab - Room 40-48</li>
<li>Student Lounge - Room 57</li>
  <a href="https://www.pnw.edu/getting-to-pnw/wp-content/uploads/sites/7/2020/01/gyte-ground-floor.pdf" target="_blank">Ground Floor</a>
</ul>
<h2>First Floor</h2>
<ul>
<li>College of Engineering, Mathematics & Science - Room 181 </li>
<li>Office of Instructional Technology - Room 135</li>
<li>Exploratory Advising - Room 102</li>
<li>Supplemental Instruction Room - Room 106</li>
  <a href="https://www.pnw.edu/getting-to-pnw/wp-content/uploads/sites/7/2020/01/gyte-first-floor.pdf" target="_blank">First Floor</a>
</ul>
<h2>Second Floor</h2>
<ul>
<li>Chemistry Lab - Room 202-208</li>
<li>Instrumentation Lab - room 218,235</li>
  <a href="https://www.pnw.edu/getting-to-pnw/wp-content/uploads/sites/7/2020/01/gyte-second-floor.pdf" target="_blank">Second Floor</a>
</ul>
{showMarker && (
        <Marker position={markerPosition} icon={customIcon} eventHandlers={{ click: () => setShowMarker(false) }}>
        <Tooltip>Gyte Building</Tooltip>
        </Marker>
      )}
  </div>
);
};
export default Gyte;
