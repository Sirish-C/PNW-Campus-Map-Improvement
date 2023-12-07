import './Layout.css';
import React, { useState, useEffect } from 'react';
import L from 'leaflet';
import "leaflet/dist/leaflet.css";
import { useHistory } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup,Polygon, Tooltip, LayersControl } from "react-leaflet";

import { polygonCoords, polygoncoords1,polygoncoords2 } from './Highlight';
import { buildingIcon,diningIcon,parkingIcon,emergencyIcon,entryIcon,servicesIcon } from './Markers.js';
import FloatingIcons, {iconsData} from './FloatingIcons.js';
import Parkinglayout from './Parkinglayout';


const { BaseLayer } = LayersControl;     

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
const handleMarkerClick = (marker) => { 
  console.log("marker")
}

export default function App({ markers, searchText, selectedOption , setLeftContainerContent, setSelectedMarkerInfo}) {
  const [selectedMarker, setSelectedMarker] = useState(null);
  const history = useHistory();
  const [selectedCenter, setSelectedCenter] = useState(null);
  const filteredMarkers = markers.filter((marker) => {
    // Check if the marker's category matches the selectedOption
    return marker.category === selectedOption;
});
console.log('Filtered Markers:', filteredMarkers);
const center = [41.58389937037336, -87.47355647640109];
 
  useEffect(() => {
    console.log('Filtered Markers:', filteredMarkers);
    console.log('Selected Option:', selectedOption);
  }, [filteredMarkers, selectedOption]);

  useEffect(() => {
    // Set the history object for navigation
   


  }, [markers, selectedOption]);
 
  return (
    <MapContainer center={center} zoom={16} className="map-container" >
      <LayersControl position="topright">
        <BaseLayer checked name="Street Map">
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
        </BaseLayer>
        <BaseLayer name="Satellite View">
          <TileLayer
            url="https://api.mapbox.com/styles/v1/mapbox/satellite-v9/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoidmR1bm5hbGEiLCJhIjoiY2xwbmEycGhzMDdzNjJqbDhrOGNnNXNxYiJ9.eGvTZQLh3AD21SvPwR9pKg"
            attribution='&copy; <a href="https://www.mapbox.com/">Mapbox</a> contributors'
          />
        </BaseLayer>
      </LayersControl>
      <FloatingIcons iconsData = {iconsData} />
      {/*<Parkinglayout /> */}
 
    <Polygon
        positions={polygonCoords}
        pathOptions={{ color: '#FFCC33', fillColor: '#A0522D', fillOpacity: 0.2 }}
      />
    <Polygon
        positions={polygoncoords1}
        pathOptions={{ color: '#FFCC33', fillColor: '#A0522D', fillOpacity: 0.2 }}
      />
      <Polygon
        positions={polygoncoords2}
        pathOptions={{ color: '#FFCC33', fillColor: '#A0522D', fillOpacity: 0.2 }}
      />
 


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
    <Popup>{marker.info}</Popup>
    
    
  </Marker>
  ))}

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

