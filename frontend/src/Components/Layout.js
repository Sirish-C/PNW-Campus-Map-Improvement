import React, { useState, useEffect } from 'react';
import './Layout.css';
import Mapcomponent from './Mapcomponent'; // Import the MapComponent
import { ReactSearchAutocomplete } from 'react-search-autocomplete'

const Layout = () => {
  const [searchText, setSearchText] = useState('');
  const [selectedOption, setSelectedOption] = useState('none');
  const [markers, setMarkers] = useState([]);
  const [searchSelection , setSearchSelection] = useState('');
  // markers

const buildingMarkers =[
  {
    geocode: [41.587802008802214, -87.47503853035204],
    popUp: "Anderson Building",
    category: 'building'
  },
  {
    geocode: [41.58702068752308, -87.47343875916728],
    popUp: "University Police",
    category: 'building'
  },
  {
    geocode: [41.58798528907706, -87.46972668400419],
    popUp: "Schneider Building",
    category: 'building'
  },
  {
    geocode: [41.586962687960856, -87.47538624504193],
    popUp: "Classroom Office Building",
    category: 'building'
  },
  {
    geocode: [41.58639283346341, -87.47530466562853],
    popUp: "Powers Building",
    category: 'building'
  },
  {
    geocode: [41.586362760595456, -87.4748822668899],
    popUp: "Potter Building",
    category: 'building'
  },
  {
    geocode: [41.58531876792566, -87.47442502809437],
    popUp: "Gyte Building",
    category: 'building'
  },
  {
    geocode: [41.58530189764238, -87.4733273607242],
    popUp: "Porter Hall",
    category: 'building'
  },
  {
    geocode: [41.584493603876815, -87.47407623741675],
    popUp: "Student Library",
    category: 'building'
  },
  {
    geocode: [41.58353211960947, -87.47432377379278],
    popUp: "Nils Building",
    category: 'building'
  },
  {
    geocode: [41.58302436911473, -87.47536481169868],
    popUp: "Lawshe Hall",
    category: 'building'
  },
  {
    geocode: [41.580317391764794, -87.47396503797455],
    popUp: "Fitness & Recreation Center",
    category: 'building'
  },
  {
    geocode: [41.58051985049796, -87.4723561282842],
    popUp: "Housing",
    category: 'building'
  },
  {
    geocode: [41.58050860280817, -87.47098028503423],
    popUp: "Housing",
    category: 'building'
  },
];
const parkingMarkers =[
  {
    geocode: [41.586769872027716, -87.47416627757438],
    popUp: "Parking Area",
    category: 'parking'
  }, 
  {
    geocode: [41.58763019191676, -87.47177380305824],
    popUp: "Parking Area",
    category: 'parking'
  },
  {
    geocode: [41.58686877622326, -87.4719282303319],
    popUp: "Parking Area",
    category: 'parking'
  },{
    geocode: [41.586201313366566, -87.47295420240837],
    popUp: "Parking Area",
    category: 'parking'
  },{
    geocode: [41.58618743098299, -87.47170137697195],
    popUp: "Parking Area",
    category: 'parking'
  },{
    geocode: [41.585194832806856, -87.47200762318722],
    popUp: "Parking Garage",
    category: 'parking'
  },{
    geocode: [41.585835389098804, -87.47579977145372],
    popUp: "Parking Area",
    category: 'parking'
  },{
    geocode: [41.582393963255136, -87.47580351222474],
    popUp: "Parking Area",
    category: 'parking'
  },{
    geocode: [41.58259190732055, -87.47433270207964],
    popUp: "Parking Area",
    category: 'parking'
  },{
    geocode: [41.57991368161599, -87.47293409720919],
    popUp: "Parking Area",
    category: 'parking'
  },{
    geocode: [41.58027574400408, -87.47509209072037],
    popUp: "Parking Area",
    category: 'parking'
  },{
    geocode: [41.579091219606745, -87.47471208241629 ],
    popUp: "Parking Area",
    category: 'parking'
  },
];
const emergencyMarkers =[
  {
    geocode: [41.587151,-87.473541],
    popUp: "Emergency Pole",
    category: 'emergency'
  }, 
  {
    geocode: [41.585544,-87.473439],
    popUp: "Emergency Pole",
    category: 'emergency'
  },
  {
    geocode: [41.586112,-87.471763],
    popUp: "Emergency Pole",
    category: 'emergency'
  },
  {
    geocode: [41.587137,-87.471866],
    popUp: "Emergency Pole",
    category: 'emergency'
  },
  {
    geocode: [41.585591,-87.474367],
    popUp: "Emergency Pole",
    category: 'emergency'
  },
  {
    geocode: [41.585603,-87.475511],
    popUp: "Emergency Pole",
    category: 'emergency'
  },
  {
    geocode: [41.584708,-87.475718],
    popUp: "Emergency Pole",
    category: 'emergency'
  },
  {
    geocode: [41.584909,-87.474280],
    popUp: "Emergency Pole",
    category: 'emergency'
  },
  {
    geocode: [41.584866,-87.473502],
    popUp: "Emergency Pole",
    category: 'emergency'
  },
  {
    geocode: [41.584119,-87.474151],
    popUp: "Emergency Pole",
    category: 'emergency'
  },
  {
    geocode: [41.582560,-87.475667],
    popUp: "Emergency Pole",
    category: 'emergency'
  },
  {
    geocode: [41.581992,-87.475322],
    popUp: "Emergency Pole",
    category: 'emergency'
  },
  {
    geocode: [41.582073,-87.474200],
    popUp: "Emergency Pole",
    category: 'emergency'
  },
  {
    geocode: [41.580632,-87.473362],
    popUp: "Emergency Pole",
    category: 'emergency'
  },

];
const diningMarkers =[
  {
    geocode: [41.584340714396646, -87.47376963684603],
    popUp: "Cafeteria",
    category: 'dining'
  }, 
  {
    geocode: [41.58707249096816, -87.47538925519639],
    popUp: "Leo's Market Place",
    category: 'dining'
  },
]; 
const entryMarkers =[
  {
    geocode: [41.584340714396646, -87.47376963684603],
    popUp: "Entry/Exit",
    category: 'Entry'
  }, 
  {
    geocode: [41.58749695908637, -87.47516474046306],
    popUp: "Entry/Exit",
    category: 'Entry'
  }, 
  {
    geocode: [41.58743382391705, -87.47564076711559],
    popUp: "Entry/Exit",
    category: 'Entry'
  }, 
  {
    geocode: [41.58676683556113, -87.47491608053521],
    popUp: "Entry/Exit",
    category: 'Entry'
  }, 
  {
    geocode: [41.58714830458867, -87.47520473662672],
    popUp: "Entry/Exit",
    category: 'Entry'
  }, 
  {
    geocode: [441.58685819548822, -87.4757070182172],
    popUp: "Entry/Exit",
    category: 'Entry'
  }, 
  {
    geocode: [41.58644852003349, -87.47533451463879],
    popUp: "Entry/Exit",
    category: 'Entry'
  }, 
  {
    geocode: [41.58606513291734, -87.47539407485925],
    popUp: "Entry/Exit",
    category: 'Entry'
  }, 
  {
    geocode: [41.58644874996903, -87.47471005388479],
    popUp: "Entry/Exit",
    category: 'Entry'
  }, 
  {
    geocode: [41.58623384197921, -87.47501533873394],
    popUp: "Entry/Exit",
    category: 'Entry'
  }, 
  {
    geocode: [41.58614714593995, -87.47486514511834],
    popUp: "Entry/Exit",
    category: 'Entry'
  }, 
  {
    geocode: [41.585736271549855, -87.47543248836837],
    popUp: "Entry/Exit",
    category: 'Entry'
  }, 
  {
    geocode: [41.58553496209574, -87.47507909359574],
    popUp: "Entry/Exit",
    category: 'Entry'
  }, 
  {
    geocode: [41.5852951059026, -87.47422943938403],
    popUp: "Entry/Exit",
    category: 'Entry'
  }, 
  {
    geocode: [41.58540986754267, -87.47339174348011],
    popUp: "Entry/Exit",
    category: 'Entry'
  }, 
  {
    geocode: [41.58513026670642, -87.47353644549001],
    popUp: "Entry/Exit",
    category: 'Entry'
  }, 
  {
    geocode: [41.585060688429984, -87.47288700908837],
    popUp: "Entry/Exit",
    category: 'Entry'
  }, 
  {
    geocode: [41.58451972554008, -87.47455168984958],
    popUp: "Entry/Exit",
    category: 'Entry'
  }, 
  {
    geocode: [41.58457221492694, -87.47389947415832],
    popUp: "Entry/Exit",
    category: 'Entry'
  }, 
  {
    geocode: [41.5841275204758, -87.47447881125335],
    popUp: "Entry/Exit",
    category: 'Entry'
  }, 
  {
    geocode: [41.58416545731617, -87.47375606639702],
    popUp: "Entry/Exit",
    category: 'Entry'
  }, 
  {
    geocode: [41.58359776677979, -87.4741496673217],
    popUp: "Entry/Exit",
    category: 'Entry'
  }, 
  {
    geocode: [41.58325684142804, -87.4740302941198],
    popUp: "Entry/Exit",
    category: 'Entry'
  }, 
  {
    geocode: [41.58314334888758, -87.47519620382579],
    popUp: "Entry/Exit",
    category: 'Entry'
  }, 
  {
    geocode: [41.58296963182698, -87.47519777152358],
    popUp: "Entry/Exit",
    category: 'Entry'
  }, 
  {
    geocode: [41.58327413555184, -87.4754485705084],
    popUp: "Entry/Exit",
    category: 'Entry'
  }, 
  {
    geocode: [41.582684158271434, -87.4754522052773],
    popUp: "Entry/Exit",
    category: 'Entry'
  }, 
  {
    geocode: [41.58296963182578, -87.4755794221557],
    popUp: "Entry/Exit",
    category: 'Entry'
  }, 
  {
    geocode: [41.58070471249692, -87.47244022095694],
    popUp: "Entry/Exit",
    category: 'Entry'
  }, 
  {
    geocode: [41.580759215418645, -87.47108788739814],
    popUp: "Entry/Exit",
    category: 'Entry'
  }, 
  {
    geocode: [41.58040849876008, -87.4744961454419],
    popUp: "Entry/Exit",
    category: 'Entry'
  }, 
  {
    geocode: [41.57942590329995, -87.47497224292557],
    popUp: "Entry/Exit",
    category: 'Entry'
  }, 
  {
    geocode: [41.57885777227832, -87.47479176044152],
    popUp: "Entry/Exit",
    category: 'Entry'
  }, 
  {
    geocode: [41.5867481624538, -87.47339860747265],
    popUp: "Entry/Exit",
    category: 'Entry'
  }, 
  {
    geocode: [41.587954980528735, -87.46989870172692],
    popUp: "Entry/Exit",
    category: 'Entry'
  }, 
];
const servicesMarkers =[
  {
    geocode: [41.58707770451279, -87.47542065031996],
    popUp: "Student Life",
    category: 'services'
  },  
  {
    geocode: [41.586131854838854, -87.47549391972161],
    popUp: "Center for Innovation through Visualization & Simulation (CIVS)",
    category: 'services'
  }, 
  {
    geocode: [41.58637836966487, -87.47547265623038],
    popUp: "IT Help Desk",
    category: 'services'
  }, 
  {
    geocode: [41.58420354120943, -87.47464738137995],
    popUp: "Bookstore",
    category: 'services'
  }, 
  {
    geocode: [41.58418754793029, -87.4738763754069],
    popUp: "Career Center",
    category: 'services'
  }, 
  {
    geocode: [41.58419426688091, -87.47412609667495],
    popUp: "Welcome Center",
    category: 'services'
  }, 
  {
    geocode: [41.58442808592674, -87.47444049395489],
    popUp: "Testing Center",
    category: 'services'
  }, 
  {
    geocode: [41.58303820582246, -87.47548997219268],
    popUp: "Graduate Admissions",
    category: 'services'
  }, 
  {
    geocode: [41.58306638317554, -87.47545230165468],
    popUp: "International Admissions & Immigration Services",
    category: 'services'
  }, 
  {
    geocode: [41.58315447407467, -87.4753416251211],
    popUp: "Bursar Office",
    category: 'services'
  }, 
  {
    geocode: [41.58277939104131, -87.47542300234736],
    popUp: "Registrar Office",
    category: 'services'
  }, 
];
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
]
const imageMapping = {
  building: "https://www.pnw.edu/wp-content/uploads/2023/09/PNW-Bell-Tower-077_576x384.jpg",
  parking: "https://www.pnw.edu/wp-content/uploads/2023/01/PNW-Signage-and-Art-033-1-scaled.jpg",
  emergency: "https://www.pnw.edu/public-safety/wp-content/uploads/sites/84/2020/01/hammond-campus-police_900_feature-900x600.jpg",
  dining : "https://bloximages.chicago2.vip.townnews.com/nwitimes.com/content/tncms/assets/v3/editorial/5/2d/52d22b54-96d6-514a-98eb-c47340a7e60f/63ed822fb2d9f.image.jpg?resize=1200%2C800" ,
  Entry : "https://www.pnw.edu/wp-content/uploads/2020/02/WhyPNW_Housing_800x533.jpg",
  services : "https://media.licdn.com/dms/image/D5622AQGzSxTMAUw5og/feedshare-shrink_800/0/1670782442632?e=2147483647&v=beta&t=-wlGCteOZSrUb8Ao6IkuNOGbmZ0Ue35oqhSpUVR5EAE"
};
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
            <option value="building">Buildings</option>
            <option value="parking">Parking</option>
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