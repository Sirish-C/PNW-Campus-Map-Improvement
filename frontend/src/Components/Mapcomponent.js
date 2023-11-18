import './Layout.css';
import React, { useState } from 'react';
import L from 'leaflet';
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup,Polygon, Tooltip } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";

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



// custom cluster icon
{/*const createClusterCustomIcon = function (cluster) {
  return new divIcon({
    html: `<span class="cluster-icon">${cluster.getChildCount()}</span>`,
    className: "custom-marker-cluster",
    iconSize: point(33, 33, true)
  });
}; */}

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

export default function App({ markers, searchText, selectedOption }) {
  const filteredMarkers = markers.filter((marker) => {
    // Check if the marker's category matches the selectedOption
    return marker.category === selectedOption;
  });
  
  
  const center = [41.58389937037336, -87.47355647640109];
  // Coordinates for the polygon to highlight an area
  //Campus
  const polygonCoords = [
    [41.58832592509739, -87.4761106137069],
    [41.58825762659633, -87.47146014395905],
    [41.584830503890345, -87.47147338825272],
    [41.58484400008665, -87.47315145039262],
    [41.581186982538235, -87.47318087124755],
    [41.581170931853414, -87.4761098433693],
    ];
    //HOusing
  const polygoncoords1 = [
    [41.581066602270475, -87.47548757090836],
    [41.58101845012448, -87.4694686940652],
    [41.58069852382447, -87.46949337039922],
    [41.579580575345474, -87.47134445991631],
    [41.579591925174014, -87.47435627360622],
    [41.57774755193054, -87.47436386004087],
    [41.577679450975694, -87.47552458416605],
    ]
    //Schineder
    const polygoncoords2 = [
      [41.588278467655805, -87.47007637421156],
      [41.58826414654201, -87.46906552116764],
      [41.58786377426849, -87.46908669909163],
      [41.58785775588453, -87.46958827215643],
      [41.58762303847201, -87.46960704761875],
      [41.58762905687786, -87.47010862068355],

    ]

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
    <Marker position={marker.geocode} icon={getMarkerIcon(marker.category)}>
      <Tooltip>{marker.popUp}</Tooltip>
    </Marker>
  ))}
</MarkerClusterGroup>
    </MapContainer>
  );
}