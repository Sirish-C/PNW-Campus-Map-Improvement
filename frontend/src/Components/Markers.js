import { Icon, divIcon, point } from "leaflet";
import Anderson from './DetailsPages/Anderson';
import Clo from './DetailsPages/Clo'; 
import Library from './DetailsPages/Library';
import Lawshe from './DetailsPages/Lawshe';
import Gyte from './DetailsPages/Gyte';
import Nils from './DetailsPages/Nils';
import Porter from './DetailsPages/Porter';
import Powers from './DetailsPages/Powers';
import Potter from './DetailsPages/Potter';
import CLOServices from './DetailsPages/CLOServices';
import SULB from './DetailsPages/SULB';
import PowersServices from './DetailsPages/PowersServices';
import LAWSHEServices from './DetailsPages/LAWSHEServices';
 
 // Create custom icons for buildings, parking, and dining
export const buildingIcon = new Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/128/4707/4707124.png",
  iconSize: [32, 32],
});


export const parkingIcon = new Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/128/529/529860.png",
  iconSize: [38, 38],
});
export const emergencyIcon = new Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/128/2014/2014952.png",
  iconSize: [35, 35],
});


export const diningIcon = new Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/128/857/857718.png",
  iconSize: [35, 35],
});


export const entryIcon = new Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/128/10754/10754780.png",
  iconSize: [35, 35],
});
export const servicesIcon = new Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/128/870/870175.png",
  iconSize: [35, 35],
});
 
 // markers

 export const buildingMarkers =[
    {
      geocode: [41.587802008802214, -87.47503853035204],
      info: <Anderson /> ,
      popUp : 'Anderson Building',
      category: 'building'
    },
    {
      geocode: [41.587802008802214, -87.47503853035204],
      info: <Anderson /> ,
      popUp : 'Department Computer Information Technology',
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
      info : <Clo />,
      popUp: "Classroom Office Building",
      category: 'building'
    },
    {
      geocode: [41.586962687960856, -87.47538624504193],
      info : <Clo />,
      popUp: "Department of Computer Science",
      category: 'building'
    },
    {
      geocode: [41.586962687960856, -87.47538624504193],
      info : <Clo />,
      popUp: "Department of Mathematics",
      category: 'building'
    },    
    {
      geocode: [41.58639283346341, -87.47530466562853],
      info : <Powers />,
      popUp: "Powers Building",
      category: 'building'
    },
    {
      geocode: [41.586362760595456, -87.4748822668899],
      info : <Potter />,
      popUp: "Potter Building",
      category: 'building'
    },
    {
      geocode: [41.58531876792566, -87.47442502809437],
      info : <Gyte />,
      popUp: "Gyte Building",
      category: 'building'
    },
    {
      geocode: [41.58530189764238, -87.4733273607242],
      info : <Porter />,
      popUp: "Porter Hall",
      category: 'building'
    },
    {
      geocode: [41.584493603876815, -87.47407623741675],
      info : <Library />,
      popUp: "Student Library",
      category: 'building'
    },
    {
      geocode: [41.58353211960947, -87.47432377379278],
      info : <Nils />,
      popUp: "Nils Building",
      category: 'building'
    },
    {
      geocode: [41.58353211960947, -87.47432377379278],
      info : <Nils />,
      popUp: "College of Nursing",
      category: 'building'
    },
    {
      geocode: [41.58302436911473, -87.47536481169868],
      info : <Lawshe />,
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
  export const parkingMarkers =[
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
 export  const emergencyMarkers =[
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
 export const diningMarkers =[
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
  export const entryMarkers =[
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
  export const servicesMarkers =[
    {
      geocode: [41.58707770451279, -87.47542065031996],
      info: <CLOServices /> ,
      popUp: "CLO_Services",
      category: 'services'
    },   
    {
      geocode: [41.58637836966487, -87.47547265623038],
      info: <PowersServices /> ,
      popUp: "Powers_Services",
      category: 'services'
    }, 
    {
      geocode: [41.58442808592674, -87.47444049395489],
      info: <SULB /> ,
      popUp: "SULB_Services",
      category: 'services'
    }, 
    {
      geocode: [41.58303820582246, -87.47548997219268],
      info: <LAWSHEServices /> ,
      popUp: "LAWSHE_Services",
      category: 'services'
    }, 
  ];