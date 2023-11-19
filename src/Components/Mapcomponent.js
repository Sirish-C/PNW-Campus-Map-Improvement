import './Layout.css';
import React, { useState, useEffect } from 'react';
import L from 'leaflet';
import "leaflet/dist/leaflet.css";
import { useHistory } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup,Polygon, Tooltip } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import { polygonCoords, polygoncoords1,polygoncoords2 } from './Highlight';
import { navigateToCloPage,navigateToAndersonPage  } from './DetailsPages/Navigations.js';
import Clo from './DetailsPages/Clo';
import Anderson from './DetailsPages/Anderson';


import { Icon, divIcon, point } from "leaflet";


// Create custom icons for buildings, parking, and dining
const buildingIcon = new Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/128/4707/4707124.png",
  iconSize: [32, 32],
});


const parkingIcon = new Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/128/529/529860.png",
  iconSize: [38, 38],
});
const emergencyIcon = new Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/128/2014/2014952.png",
  iconSize: [35, 35],
});


const diningIcon = new Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/128/857/857718.png",
  iconSize: [35, 35],
});


const entryIcon = new Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/128/10754/10754780.png",
  iconSize: [35, 35],
});
const servicesIcon = new Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/128/870/870175.png",
  iconSize: [35, 35],
});






function getMarkerIcon(category) {
  switch (category) {
    case 'building':
      return buildingIcon;
    case 'parking':
      return parkingIcon;
    case 'dining':
      return diningIcon;
      case 'emergency':
      return emergencyIcon;
      case 'Entry':
      return entryIcon;
      case 'services':
          return servicesIcon;
    //default:
     // return customIcon; // Use the default icon for other categories or if not specified
  }
}


export default function App({ markers, searchText, selectedOption , setLeftContainerContent, setSelectedMarkerInfo}) {
  const history = useHistory();
  
  const filteredMarkers = markers.filter((marker) => {
    // Check if the marker's category matches the selectedOption
    return marker.category === selectedOption;
});
const handleMarkerClick = (marker) => {
  if (marker.popUp === 'Cafeteria') {
    navigateToCloPage(history);
  } else if (marker.popUp === "Leo's Market Place") {
    navigateToAndersonPage(history);
  }
  // Add additional conditions for other popUp names if needed

  // Set information about the selected marker
  //setSelectedMarkerInfo(marker);
};

 
 
  const center = [41.58389937037336, -87.47355647640109];
 


  useEffect(() => {
    // Set the history object for navigation
   


  }, [markers, selectedOption]);
 
  return (
    <MapContainer center={center} zoom={16} className="map-container" >
      {/* OPEN STREEN MAPS TILES */}
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
 
    <Polygon
        positions={polygonCoords}
        pathOptions={{ color: '#808080', fillColor: '#A0522D', fillOpacity: 0.2 }}
      />
    <Polygon
        positions={polygoncoords1}
        pathOptions={{ color: '#808080', fillColor: '#A0522D', fillOpacity: 0.2 }}
      />
      <Polygon
        positions={polygoncoords2}
        pathOptions={{ color: '#808080', fillColor: '#A0522D', fillOpacity: 0.2 }}
      />
 

<MarkerClusterGroup
  chunkedLoading
 // iconCreateFunction={createClusterCustomIcon}
>
  {filteredMarkers.map((marker) => (
    <Marker
    key={marker.id} // Ensure each marker has a unique key
    position={marker.geocode}
    icon={getMarkerIcon(marker.category)}
    eventHandlers={{
      click: () => handleMarkerClick(marker),
    }}
  >
    <Tooltip>{marker.popUp}</Tooltip>
  </Marker>
  ))}
</MarkerClusterGroup>
    </MapContainer>
  );
}


{/* <Marker position={marker.geocode} icon={getMarkerIcon(marker.category)}>
      <Tooltip>{marker.popUp}</Tooltip>
</Marker> 
eventHandlers={{
      click: () => {
        // Handle marker click based on popUp name
        if (marker.popUp === 'Cafeteria') {
          navigateToCloPage(history);
          //setLeftContainerContent(<Clo />);
        } else if (marker.popUp === "Leo's Market Place") {
          navigateToAndersonPage(history);
          //setLeftContainerContent(<Anderson />);
        }
        // Add additional conditions for other popUp names if needed
      },
    }}
*/}

