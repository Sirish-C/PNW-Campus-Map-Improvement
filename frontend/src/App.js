import React, { useState, useEffect } from "react";
import "./App.css";
import Layout from "./Components/Layout";
import { items } from "./constants";

function App() {
  const [data, setData] = useState([]);
  const [buildings, setBuidlings] = useState([]);
  const [item, setItem] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  useEffect(() => {
    setBuidlings(
      data.map((item) => {
        return {
          geocode: [item["latitude"], item["longitude"]],
          info: "<Clo />",
          popUp: item["building_name"],
          category: "building",
        };
      })
    );

    setItem(data.map((val)=>{
        return {        
            name: val["building_short_name"],
            value: val["building_name"],
          }
    }));
    let searchItems  = data.map((val)=>{
        return({        
            name: val["building_name"],
            value: val["building_name"],
          })
    });    
    setItem(searchItems.map((val,i)=>{
        return({
            id:i,
            name:val['name'],
            value:val['value']
        })
    }));
  }, [data]);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:3000/buildings");
      const result = await response.json();
      setData(result);
      console.log("DATA: ", data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  console.log("Buildings :",buildings);
  console.log("Items :",item);
  return (
    <div className="App">
      <Layout 
      buildingMarkers={buildings}
      items={item}
      />
    </div>
  );
}

export default App;
