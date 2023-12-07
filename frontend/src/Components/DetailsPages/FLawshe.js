import React, { useState } from 'react';
import {  Marker, Tooltip, Popup} from "react-leaflet";
import L from 'leaflet';
const Lawshe = () => {
    const [showMarker, setShowMarker] = useState(false);
  const [markerPosition, setMarkerPosition] = useState([41.58302436911473, -87.47536481169868]);


  const handleImageClick = () => {
    // Your custom logic to execute when the image is clicked
    console.log('Image clicked!');


    // Set the state to show the marker and specify its position
    setShowMarker(true);
    setMarkerPosition([41.58302436911473, -87.47536481169868]);
  };


  // Create an L.Icon instance with the iconUrl
  const customIcon = new L.Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/128/12218/12218382.png", // Replace with the path or URL to your custom icon
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
  });
  return(
  <div>
    <h2>C.H. Lawshe Hall (LAWS)</h2>
    <img
        src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX5R-5kuv8DPZNwwDB7abyWiwYGY8kPBeVeS-NwuE2TJ8Df84UDX0EL0mL5znKlH3uDDg&usqp=CAU"
        alt="Lawshe Hall"
        style={{ width: '100%', maxWidth: '500px', height: 'auto', cursor: 'pointer' }}
        onClick={handleImageClick}
      />
   
<h2>First Floor</h2>
<ul>
<li> Financial Aid - Room 122</li>
<li>Admissions & Enrollment Service Center -  Room 130 </li>
  <a href="https://www.pnw.edu/getting-to-pnw/wp-content/uploads/sites/7/2020/01/lawshe-hall-first-floor.pdf" target="_blank">First Floor</a>
</ul>
<h2>Second Floor</h2>
<ul>
<li>Graduate Studies - Room 212</li>
<li>International Admissions & Immigration Services - Room 227</li>
<li>Office of Research & Sponsored Programs - Room 246</li>
  <a href="https://www.pnw.edu/getting-to-pnw/wp-content/uploads/sites/7/2020/01/lawshe-hall-second-floor.pdf" target="_blank">Second Floor</a>
</ul>
<h2>Third Floor</h2>
<ul>
<li> Institutional Advancement - Room 318</li>
<li>Finance & Administration - Room 336</li>
  <li>Academic Affairs - Room 346</li>
  <li>Enrollment Management & Student Affairs - Room 352</li>
  <a href="https://www.pnw.edu/getting-to-pnw/wp-content/uploads/sites/7/2020/01/lawshe-hall-third-floor.pdf" target="_blank">Third Floor</a>
</ul>
{showMarker && (
        <Marker position={markerPosition} icon={customIcon} eventHandlers={{ click: () => setShowMarker(false) }}>
        <Tooltip>Lawshe Hall</Tooltip>
        </Marker>
      )}
  </div>
);
  };
export default Lawshe;
