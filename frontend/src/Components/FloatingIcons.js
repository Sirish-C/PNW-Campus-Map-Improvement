import React, { useState, useEffect } from 'react';
import { Marker, Popup, Tooltip,} from 'react-leaflet';
import L from 'leaflet';
import Anderson from './DetailsPages/Anderson';
import Clo from './DetailsPages/Clo'; 
import Library from './DetailsPages/Library';
import Lawshe from './DetailsPages/Lawshe';
import Powers from './DetailsPages/Powers.js';
import 'leaflet/dist/leaflet.css';
import Gyte from './DetailsPages/Gyte.js';


export const iconsData = [
  
  {
    position: [41.58415864296166, -87.48097576433399],
    iconUrl: "https://cdn-icons-png.flaticon.com/128/3938/3938862.png",
    category: 'Anderson Building',
    popUp : <Anderson />,
    
  },
  {
    position: [41.583171329004365, -87.48097576433399],
    iconUrl: "https://cdn-icons-png.flaticon.com/128/2015/2015741.png",
    category: 'CLO Building',
    popUp: <Clo />,
    
  },
  {
    position: [41.582001159580365, -87.48095946852129],
    iconUrl: "https://cdn-icons-png.flaticon.com/128/3854/3854232.png",
    category: 'Powers Building',
    popUp : <Powers />,
    
  },
  {
    position: [41.58410988707451, -87.46894945466867],
    iconUrl: "https://cdn-icons-png.flaticon.com/128/4696/4696164.png",
    category: 'Gyte Building',
    popUp : <Gyte />,
    
  },
  {
    position: [41.58308081935945, -87.46896994682143],
    iconUrl: "https://cdn-icons-png.flaticon.com/128/8074/8074804.png",
    category: 'Student Union & Library',
    popUp : <Library />,
    
  },
  {
    position: [41.58203772769918, -87.468933158856],
    iconUrl: "https://cdn-icons-png.flaticon.com/128/12218/12218382.png",
    category: 'Lawshe Hall',
    popUp : <Lawshe />,
    
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
 
  

const FloatingIcon= ({ position, iconUrl, category, onClick, popUp}) => {
  const icon = new L.Icon({
    
    iconUrl: iconUrl,
    iconSize: [32, 32],
   iconAnchor: [16, 32],
    popupAnchor: [0, -32],
  });
  
 

  return (
   
    <Marker position={position} icon={icon}  >
      {/* You can customize the Popup content as needed */}
     < div className="custom-tooltip" >
      <Tooltip direction="right" offset={[15, -13]} opacity={2} permanent= {true}
       >
      <span style={{ fontSize: '14px', fontWeight: 'bold', color: '#AB7D00' }}>{category}</span>

            
          </Tooltip> 
       <Popup>{popUp}</Popup>
      
      </div>
    </Marker>
    );
};

export default FloatingIcons;