import React, { useState, useEffect } from "react";
import "./Layout.css";
import Mapcomponent from "./Mapcomponent"; // Import the MapComponent
import FloatingButton from "./FloatingButton";
import { ReactSearchAutocomplete } from "react-search-autocomplete";

const Layout = () => {
  const [searchText, setSearchText] = useState("");
  const [selectedOption, setSelectedOption] = useState("none");
  const [markers, setMarkers] = useState([]);
  const [searchSelection, setSearchSelection] = useState("");
  // markers

  const buildingMarkers = [
    {
      geocode: [41.587802008802214, -87.47503853035204],
      popUp: "Anderson Building",
      category: "building",
    },
    {
      geocode: [41.58702068752308, -87.47343875916728],
      popUp: "University Police",
      category: "building",
    },
    {
      geocode: [41.58798528907706, -87.46972668400419],
      popUp: "Schneider Building",
      category: "building",
    },
    {
      geocode: [41.586962687960856, -87.47538624504193],
      popUp: "CLO Building",
      category: "building",
    },
    {
      geocode: [41.58639283346341, -87.47530466562853],
      popUp: "Powers Building",
      category: "building",
    },
    {
      geocode: [41.586362760595456, -87.4748822668899],
      popUp: "Potter Building",
      category: "building",
    },
    {
      geocode: [41.58531876792566, -87.47442502809437],
      popUp: "Gyte Building",
      category: "building",
    },
    {
      geocode: [41.58530189764238, -87.4733273607242],
      popUp: "Porter Hall",
      category: "building",
    },
    {
      geocode: [41.584493603876815, -87.47407623741675],
      popUp: "Student Library",
      category: "building",
    },
    {
      geocode: [41.58353211960947, -87.47432377379278],
      popUp: "Nils Building",
      category: "building",
    },
    {
      geocode: [41.58302436911473, -87.47536481169868],
      popUp: "Lawshe Hall",
      category: "building",
    },
    {
      geocode: [41.580317391764794, -87.47396503797455],
      popUp: "Fitness & Recreation Center",
      category: "building",
    },
    {
      geocode: [41.58051985049796, -87.4723561282842],
      popUp: "Housing - Peregrine Hall",
      category: "building",
    },
    {
      geocode: [41.58050860280817, -87.47098028503423],
      popUp: "Housing - Griffin Hall",
      category: "building",
    },
  ];
  const parkingMarkers = [
    {
      geocode: [41.586769872027716, -87.47416627757438],
      popUp: "Parking Area",
      category: "parking",
    },
    {
      geocode: [41.58763019191676, -87.47177380305824],
      popUp: "Parking Area",
      category: "parking",
    },
    {
      geocode: [41.58686877622326, -87.4719282303319],
      popUp: "Parking Area",
      category: "parking",
    },
    {
      geocode: [41.586201313366566, -87.47295420240837],
      popUp: "Parking Area",
      category: "parking",
    },
    {
      geocode: [41.58618743098299, -87.47170137697195],
      popUp: "Parking Area",
      category: "parking",
    },
    {
      geocode: [41.585194832806856, -87.47200762318722],
      popUp: "Parking Garage",
      category: "parking",
    },
    {
      geocode: [41.585835389098804, -87.47579977145372],
      popUp: "Parking Area",
      category: "parking",
    },
    {
      geocode: [41.582393963255136, -87.47580351222474],
      popUp: "Parking Area",
      category: "parking",
    },
    {
      geocode: [41.58259190732055, -87.47433270207964],
      popUp: "Parking Area",
      category: "parking",
    },
    {
      geocode: [41.57991368161599, -87.47293409720919],
      popUp: "Parking Area",
      category: "parking",
    },
    {
      geocode: [41.58027574400408, -87.47509209072037],
      popUp: "Parking Area",
      category: "parking",
    },
    {
      geocode: [41.579091219606745, -87.47471208241629],
      popUp: "Parking Area",
      category: "parking",
    },
  ];
  const emergencyMarkers = [
    {
      geocode: [41.587151, -87.473541],
      popUp: "Emergency Pole",
      category: "emergency",
    },
    {
      geocode: [41.585544, -87.473439],
      popUp: "Emergency Pole",
      category: "emergency",
    },
    {
      geocode: [41.586112, -87.471763],
      popUp: "Emergency Pole",
      category: "emergency",
    },
    {
      geocode: [41.587137, -87.471866],
      popUp: "Emergency Pole",
      category: "emergency",
    },
    {
      geocode: [41.585591, -87.474367],
      popUp: "Emergency Pole",
      category: "emergency",
    },
    {
      geocode: [41.585603, -87.475511],
      popUp: "Emergency Pole",
      category: "emergency",
    },
    {
      geocode: [41.584708, -87.475718],
      popUp: "Emergency Pole",
      category: "emergency",
    },
    {
      geocode: [41.584909, -87.47428],
      popUp: "Emergency Pole",
      category: "emergency",
    },
    {
      geocode: [41.584866, -87.473502],
      popUp: "Emergency Pole",
      category: "emergency",
    },
    {
      geocode: [41.584119, -87.474151],
      popUp: "Emergency Pole",
      category: "emergency",
    },
    {
      geocode: [41.58256, -87.475667],
      popUp: "Emergency Pole",
      category: "emergency",
    },
    {
      geocode: [41.581992, -87.475322],
      popUp: "Emergency Pole",
      category: "emergency",
    },
    {
      geocode: [41.582073, -87.4742],
      popUp: "Emergency Pole",
      category: "emergency",
    },
    {
      geocode: [41.580632, -87.473362],
      popUp: "Emergency Pole",
      category: "emergency",
    },
  ];
  const diningMarkers = [
    {
      geocode: [41.584340714396646, -87.47376963684603],
      popUp: "Cafeteria",
      category: "dining",
    },
    {
      geocode: [41.58707249096816, -87.47538925519639],
      popUp: "Leo's Market Place",
      category: "dining",
    },
  ];
  useEffect(() => {
    switch (selectedOption) {
      case "all":
        setMarkers([...buildingMarkers, ...parkingMarkers, ...diningMarkers]);
        break;
      case "building":
        setMarkers(buildingMarkers);
        break;
      case "parking":
        setMarkers(parkingMarkers);
        break;
      case "emergency":
        setMarkers(emergencyMarkers);
        break;
      case "dining":
        setMarkers(diningMarkers);
        break;
      default:
        setMarkers([]);
    }
  }, [selectedOption]);

  const items = [
    {
      id: 0,
      name: "Anderson Building",
      value: "Anderson Building",
    },
    {
      id: 1,
      name: "Classroom Office Building",
      value: "Classroom Office Building",
    },
    {
      id: 2,
      name: "Potter Hall",
      value: "Potter Hall",
    },
    {
      id: 3,
      name: "Potter Building",
      value: "Potter Building",
    },
    {
      id: 4,
      name: "Gyte Building",
      value: "Gyte Building",
    },
    {
      id: 5,
      name: "Schneider Building",
      value: "Schneider Building",
    },
    {
      id: 6,
      name: "Fitness & Recreation Center",
      value: "Fitness & Recreation Center",
    },
    {
      id: 7,
      name: "Nils Building",
      value: "Nils Building",
    },
    {
      id: 8,
      name: "Lawshe Hall",
      value: "Lawshe Hall",
    },
    {
      id: 9,
      name: "Housing",
      value: "Housing",
    },
    {
      id: 10,
      name: "Student Library",
      value: "Student Library",
    },
  ];

  const handleOnSearch = (string, results) => {
    // onSearch will have as the first callback parameter
    // the string searched and for the second the results.
    console.log(string, results);
  };

  const handleOnHover = (result) => {
    // the item hovered
    console.log(result);
  };

  const handleOnSelect = (item) => {
    // the item selected
    console.log(item.value);
    const selected_building = buildingMarkers.find(
      (building) => building.popUp === item.value
    );
    setSearchSelection(selected_building);
    console.log(selected_building);
  };

  const handleOnFocus = () => {
    console.log("Focused");
  };

  const formatResult = (item) => {
    return (
      <>
        <span style={{ display: "block", textAlign: "left" }}>
          {item.value}
        </span>
      </>
    );
  };
  useEffect(() => {
    console.log("Re-rendered.");
    setMarkers([searchSelection]);
  }, [searchSelection]);

  return (
    <div className="page">
      <div className="header">
        <div className="header-content">
          <h1 style={{ textAlign: "center" }}>PNW CAMPUS MAP</h1>
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
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1RpFBtXoPgJzXHVYV04tMwJCithXcgqNHrA&usqp=CAU"
              alt="Logo"
            />
          </div>
        </div>
      </div>
      <div className="split-container">
        <div className="left-panel">
          <div className="top-image">
            <img
              src="https://www.pnw.edu/wp-content/uploads/2023/09/PNW-Bell-Tower-077_576x384.jpg"
              alt="Top Image"
            />
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
            </select>
          </div>
        </div>
        <div className="right-panel">
          <div className="map">
            <Mapcomponent
              markers={markers}
              searchText={searchText}
              selectedOption={selectedOption}
            />
          </div>
          <div className="floating">
            <FloatingButton />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Layout;
