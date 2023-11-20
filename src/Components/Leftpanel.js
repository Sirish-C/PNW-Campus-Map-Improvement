import React, { useState, useEffect } from 'react';
import './Layout.css';
import Mapcomponent from './Mapcomponent.js';
import {buildingMarkers, emergencyMarkers,diningMarkers,parkingMarkers, entryMarkers, servicesMarkers} from './Markers.js';


const LeftPanel = ({ selectedOption, setSelectedOption }) => {
    const [searchText, setSearchText] = useState('');
    const [markers, setMarkers] = useState([]);
  const [searchSelection , setSearchSelection] = useState('');
  const [selectedMarkerInfo, setSelectedMarkerInfo] = useState(null);
  const imageMapping = {
    building: "https://www.pnw.edu/wp-content/uploads/2023/09/PNW-Bell-Tower-077_576x384.jpg",
    parking: "https://www.pnw.edu/wp-content/uploads/2023/01/PNW-Signage-and-Art-033-1-scaled.jpg",
    emergency: "https://www.pnw.edu/public-safety/wp-content/uploads/sites/84/2020/01/hammond-campus-police_900_feature-900x600.jpg",
    dining : "https://bloximages.chicago2.vip.townnews.com/nwitimes.com/content/tncms/assets/v3/editorial/5/2d/52d22b54-96d6-514a-98eb-c47340a7e60f/63ed822fb2d9f.image.jpg?resize=1200%2C800" ,
    Entry : "https://www.pnw.edu/wp-content/uploads/2020/02/WhyPNW_Housing_800x533.jpg",
    services : "https://media.licdn.com/dms/image/D5622AQGzSxTMAUw5og/feedshare-shrink_800/0/1670782442632?e=2147483647&v=beta&t=-wlGCteOZSrUb8Ao6IkuNOGbmZ0Ue35oqhSpUVR5EAE"
  };
  useEffect(() => {
    
    switch (selectedOption) {
      case 'all':
        setMarkers([...buildingMarkers, ...parkingMarkers, ...diningMarkers]);
        break;
      case 'building':
        setMarkers(buildingMarkers);
        break;
      case 'parking':
        setMarkers(parkingMarkers);
        break;
        case 'emergency':
        setMarkers(emergencyMarkers);
        break;
      case 'dining':
        setMarkers(diningMarkers);
        break;
        case 'Entry':
        setMarkers(entryMarkers);
        break;
        case 'services':
          setMarkers(servicesMarkers);
          break;
      default:
        setMarkers([]);
    }
  }, [selectedOption]);
    return (
      

      <div className="split-container">
      <div className="left-panel">
   
        <div className="top-image">
          <img src={imageMapping[selectedOption] || "https://images.adsttc.com/media/images/605b/8922/f91c/8171/5b00/00f7/large_jpg/005433_00_N158_letter.jpg?1616611604"} alt="Top Image" />
        </div>
        <div className="search-container">
          <select
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}
          >
            
            <option value="parking">Parking</option>
            <option value="building">Buildings</option>
            <option value="emergency">Emergency Poles</option>
            <option value="dining">Dining</option>
            <option value="Entry">Entry/Exit Points</option>
            <option value="services">Popular Services</option>
          </select>
        </div>
     
  </div>
  <div className="right-panel">
  {/* Include the MapComponent in the right panel (70%) */}
  <Mapcomponent markers={markers} searchText={searchText} selectedOption={selectedOption} />

</div>
</div>
      
  
)};


export default LeftPanel
