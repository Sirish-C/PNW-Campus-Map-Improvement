import React, { useState, useEffect } from 'react';
import './Layout.css';
import Mapcomponent from './Mapcomponent'; // Import the MapComponent
import { ReactSearchAutocomplete } from 'react-search-autocomplete';
import {buildingMarkers, emergencyMarkers,diningMarkers,parkingMarkers, entryMarkers, servicesMarkers} from './Markers.js';
import Parkinglayout from './Parkinglayout';



export const Layout = () => {
  const [searchText, setSearchText] = useState('');
  const [selectedOption, setSelectedOption] = useState('none');
  const [leftContainerContent, setLeftContainerContent] = useState(null);
  const [markers, setMarkers] = useState([]);
  const [searchSelection , setSearchSelection] = useState('');
  const [selectedMarkerInfo, setSelectedMarkerInfo] = useState(null);
  const imageMapping = {
    building: "https://www.pnw.edu/wp-content/uploads/2023/09/PNW-Bell-Tower-077_576x384.jpg",
    parking: "https://www.pnw.edu/wp-content/uploads/2023/01/PNW-Signage-and-Art-033-1-scaled.jpg",
    emergency: "https://www.pnw.edu/public-safety/wp-content/uploads/sites/84/2020/01/hammond-campus-police_900_feature-900x600.jpg",
    dining : "https://pnw.campus-dining.com/wp-content/uploads/2022/07/2022_Campus_Cafe_Leos-Marketplace_final-lo.png" ,
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

const items = [
  {
    id: 0,
    name: 'Anderson Building',
    value:'Anderson Building'
  },
  {
    id: 1,
    name: 'Classroom Office Building',
    value:'Classroom Office Building'
  },
  {
    id: 2,
    name: 'Potter Hall',
    value:'Potter Hall'
  },
  {
    id: 3,
    name: 'Potter Building',
    value:'Potter Building'
  },
  {
    id: 4,
    name: 'Gyte Building',
    value:'Gyte Building'
  },
  {
    id: 5,
    name: 'Schneider Building',
    value:'Schneider Building'
  },
  {
    id: 6,
    name: 'Fitness & Recreation Center',
    value:'Fitness & Recreation Center'
  },
  {
    id: 7,
    name: 'Nils Building',
    value:'Nils Building'
  },
  {
    id: 8,
    name: 'Lawshe Hall',
    value:'Lawshe Hall'
  },
  {
    id: 9,
    name: 'Housing',
    value:'Housing'
  },
  {
    id: 10,
    name: 'Student Library',
    value:'Student Library'
  },
  {
    id: 10,
    name: 'dining',
    value:'dining'
  },
  {
    id: 11,
    value: "Department Computer Information Technology",
    name:"Department Computer Information Technology",
  },{
    id: 12,
    value: "Department of Computer Science",
    name:"Department of Computer Science",
  },
  {
    id: 13,
    value: "Department of Mathematics",
    name:"Department of Mathematics",
  },{
    id:14,
    value:"College of Nursing",
    name:"College of Nursing"
  }
]

const handleOnSearch = (string, results) => {
  // onSearch will have as the first callback parameter
  // the string searched and for the second the results.
  console.log(string, results)
}

const handleOnHover = (result) => {
  // the item hovered
  console.log(result)
}

const handleOnSelect = (item) => {
  // the item selected
  console.log(item.value)
  setSelectedOption("building");
  const selected_building = buildingMarkers.find((building)=> building.popUp===item.value);
  setSearchSelection(selected_building);
  console.log(selected_building);
  }

const handleOnFocus = () => {
  console.log('Focused')
}

const formatResult = (item) => {
  return (
    <>
      <span style={{ display: 'block', textAlign: 'left' }}>{item.value}</span>
    </>
  )
}
useEffect(() => {
  console.log("Re-rendered.")
  setMarkers([searchSelection]);
}, [searchSelection]);

return (
  <div className="page">
  <div className="header">
    <div className="header-content">
      <h1 style={{ textAlign: 'center' }}>PNW CAMPUS MAP</h1>
      <a href="https://youvis.it/3yzGG8"target="_blank">
        <button>Campus Tour</button>
      </a>
      <a href="https://www.pnw.edu/about-pnw/"target="_blank">
        <button>About PNW</button>
      </a>
      <div className="search">
          <ReactSearchAutocomplete
          items={items}
          onSearch={handleOnSearch}
          onHover={handleOnHover}
          onSelect={handleOnSelect}
          onFocus={handleOnFocus}
          autoFocus
          formatResult={formatResult}
        />
        </div>                        
      <div className="logo">
        <img src="https://leapassets.s3.ap-south-1.amazonaws.com/PNW_a5ddbab748.PNG" alt="Logo" />
      </div>

    </div>
   
  </div>
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
      
  
  </div>
  

   
);
}
export default Layout;