import React, { useState } from 'react';
import {  Marker, Tooltip} from "react-leaflet";
import L from 'leaflet';


const FAnderson = () => {
  const [showMarker, setShowMarker] = useState(false);
  const [markerPosition, setMarkerPosition] = useState([41.587802008802214, -87.47503853035204]);


  const handleImageClick = () => {
    // Your custom logic to execute when the image is clicked
    console.log('Image clicked!');


    // Set the state to show the marker and specify its position
    setShowMarker(!showMarker);
    setMarkerPosition([41.587802008802214, -87.47503853035204]);
  };


  // Create an L.Icon instance with the iconUrl
  const customIcon = new L.Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/128/3938/3938862.png", // Replace with the path or URL to your custom icon
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
  });
 
  return (
    <div>
      <h2>Anderson Building (ANDR)</h2>
      <img
        src="https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=u5LJI1s6nHRfL6a83NFBwA&cb_client=search.gws-prod.gps&w=408&h=240&yaw=52.71456&pitch=0&thumbfov=100"
        alt="Anderson Building"
        style={{ width: '100%', maxWidth: '500px', height: 'auto', cursor: 'pointer' }}
        onClick={handleImageClick}
      />


      <h2>First Floor</h2>
      <ul>
        <li>Department of Engineering Technology - Room 143</li>
        <li>Department of Computer Information Technology & Graphics - Room 145</li>
      </ul>


      <h2>Second Floor</h2>
      <ul>
        <li>College of Technology - Room 202</li>
        <li>Department of Construction Science & Organizational Leadership - Room 212</li>
        <a href="https://www.pnw.edu/getting-to-pnw/wp-content/uploads/sites/7/2020/01/anderson-second-floor.pdf" target="_blank">Second Floor</a>
      </ul>


      <h2>Third Floor</h2>
      <ul>
        <li>College of Business - Room 357</li>
        <a href="https://www.pnw.edu/getting-to-pnw/wp-content/uploads/sites/7/2020/01/andersons-third-floor.pdf" target="_blank">Third Floor</a>
      </ul>


      {showMarker && (
        <Marker position={markerPosition} icon={customIcon} eventHandlers={{ click: () => setShowMarker(false) }}>
        <Tooltip>Anderson Building</Tooltip>  
         
        </Marker>
      )}
    </div>
  );
};


export default FAnderson;