import React from 'react';
import { Marker, Popup, Tooltip } from 'react-leaflet';
import L from 'leaflet';
export const iconsData = [
  {
    position: [41.584426071372256, -87.46832730438692],
    iconUrl: "https://cdn-icons-png.flaticon.com/128/4707/4707124.png",
    category: 'Buildings',
    
  },
  {
    position: [41.58324712934985, -87.46832730438692],
    iconUrl: "https://cdn-icons-png.flaticon.com/128/529/529860.png",
    category: 'Parking',
    
  },
  {
    position: [41.582339193810405, -87.46829107090153],
    iconUrl: "https://cdn-icons-png.flaticon.com/128/857/857718.png",
    category: 'Dining',
    
  },

];

const FloatingIcons = ({ iconsData, onClick }) => {
  return (
    <>
      {iconsData.map((iconData) => (
        <FloatingIcon key={iconData.category} {...iconData} onClick={onClick} />
      ))}
    </>
  );
};

const FloatingIcon = ({ position, iconUrl, category, onClick }) => {
  const icon = new L.Icon({
    
    iconUrl: iconUrl,
    iconSize: [32, 32],
   iconAnchor: [16, 32],
    popupAnchor: [0, -32],
  });

  return (
    <Marker position={position} icon={icon} onClick={() => onClick(category)}>
      {/* You can customize the Popup content as needed */}
      <Tooltip>{category}</Tooltip>
      <Popup />
      
    </Marker>
  );
};

export default FloatingIcons;