import React, { useState } from 'react';
import {  Marker, Tooltip, Popup} from "react-leaflet";
import L from 'leaflet';




const SULB  = () => {
    const [showMarker, setShowMarker] = useState(false);
  const [markerPosition, setMarkerPosition] = useState([441.5842444446376, -87.47414656240761]);


  const handleImageClick = () => {
    // Your custom logic to execute when the image is clicked
    console.log('Image clicked!');


    // Set the state to show the marker and specify its position
    setShowMarker(true);
    setMarkerPosition([41.5842444446376, -87.47414656240761]);
  };


  // Create an L.Icon instance with the iconUrl
  const customIcon = new L.Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/128/8074/8074804.png", // Replace with the path or URL to your custom icon
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
  });
  return(
  <div>
    <h2>Student Union Library Building(SULB)</h2>
    <img
        src="https://bloximages.chicago2.vip.townnews.com/nwitimes.com/content/tncms/assets/v3/editorial/5/2d/52d22b54-96d6-514a-98eb-c47340a7e60f/63ed822fb2d9f.image.jpg?resize=1200%2C800"
        alt="Student Union & Library"
        style={{ width: '100%', maxWidth: '500px', height: 'auto', cursor: 'pointer' }}
        onClick={handleImageClick}
      />
<h2>First Floor</h2>
<ul>
<li>Bookstore & Campus Shop - Room 110</li>
<li>Cafeteria - Room 150</li>
<li>PNW Welcome Center - Room 125</li>
<li>Student Lounge - Room 104</li>
<li>The Point - Room 101</li>
  <a href="https://www.pnw.edu/getting-to-pnw/wp-content/uploads/sites/7/2020/01/student-union-library-sul-first-floor.pdf" target="_blank">First Floor</a>
</ul>
<h2>Second Floor</h2>
<ul>
<li>Library - Room 200</li>
</ul>
<h2>Third Floor</h2>
<ul>
<li>Career Center - Room 349</li>
<li>The Chronicle - Room 344H</li>
<li>Honors College - Room 313</li>
<li>Testing Center - Room 318</li>
  <a href="https://www.pnw.edu/getting-to-pnw/wp-content/uploads/sites/7/2020/01/student-union-library-sul-third-floor.pdf" target="_blank">Third Floor</a>
</ul>
{showMarker && (
        <Marker position={markerPosition} icon={customIcon} eventHandlers={{ click: () => setShowMarker(false) }}>
        <Tooltip>Student Union and Library</Tooltip>
        </Marker>
      )}
  </div>
);
};
export default SULB;
