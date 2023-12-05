import './Layout.css';
import React, { useState } from 'react';
import L from 'leaflet';
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup,Polygon, Tooltip} from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import getMarkerIcon from "react-leaflet-cluster";


export default function App({ markers, searchText, selectedOption }) {
  const filteredMarkers = markers.filter((marker) => {
    // Check if the marker's category matches the selectedOption
    return marker.category === selectedOption;
  });
  
  
  const center = [41.58389937037336, -87.47355647640109];
  // Coordinates for the polygon to highlight an area
  const parking1Coords = [
    [41.5876319, -87.4746019],
    [41.5869458, -87.474575],
    [41.5866328, -87.4746126],
    [41.5856739, -87.4746126],
    [41.5856899, -87.4737114],
    [41.5865285, -87.4736953],
    [41.5865285, -87.4739367],
    [41.5869739, -87.473942],
    [41.5869659, -87.4736523],
    [41.5876159, -87.4736684],
    [41.5876319, -87.4746019]
    ]
    
  const parking2Coords = [
    [41.5865432, -87.4735861],
    [41.5863907, -87.4736237],
    [41.5856725, -87.4736237],
    [41.5856765, -87.4733769],
    [41.5854558, -87.4733769],
    [41.5854478, -87.4732857],
    [41.5853475, -87.4731194],
    [41.5853515, -87.4727064],
    [41.5857688, -87.4727117],
    [41.5857808, -87.4722504],
    [41.5863787, -87.4722558],
    [41.5864429, -87.4727761],
    [41.5865432, -87.4732213],
    [41.5865432, -87.4735861]
    ]
  
  const parking3Coords= [
    [41.587141, -87.4722504],
    [41.5866114, -87.4722397],
    [41.5866034, -87.4715369],
    [41.587145, -87.4715262],
    [41.587141, -87.4722504]
    ]
  const parking4Coords = [
    [41.5864053, -87.4720108],
    [41.5857713, -87.4720215],
    [41.5857733, -87.4715468],
    [41.5862989, -87.4715414],
    [41.5864454, -87.4715522],
    [41.5864474, -87.4718418],
    [41.5864053, -87.4720108]
    ]
  const parking5Coords = [
    [41.5876697, -87.4719172],
    [41.5873768, -87.4719225],
    [41.5873728, -87.4715846],
    [41.5876616, -87.4715846],
    [41.5876697, -87.4719172]
    ]
  const parking6Coords = [
    [41.5831908, -87.4748667],
    [41.5820472, -87.4748667],
    [41.5820672, -87.473252],
    [41.5832028, -87.4732735],
    [41.5831908, -87.4748667]
    ]
  const parking7Coords = [
    [41.5825466, -87.4758843],
    [41.5813629, -87.4759219],
    [41.5813629, -87.4749509],
    [41.5819848, -87.4749563],
    [41.5819848, -87.4756483],
    [41.5825426, -87.4756483],
    [41.5825466, -87.4758843] 
    ]
  const parking8Coords = [
    [41.5819286, -87.4748276],
    [41.5813749, -87.4748329],
    [41.5813869, -87.4734811],
    [41.5819246, -87.4734811],
    [41.5819286, -87.4748276]
    ]
  const parking9Coords = [
    [41.580823, -87.4754039],
    [41.5805542, -87.4754414],
    [41.5798921, -87.4754414],
    [41.5799001, -87.4752591],
    [41.5798078, -87.4752644],
    [41.5798118, -87.4751625],
    [41.5797436, -87.4751625],
    [41.5797396, -87.4752644],
    [41.5796473, -87.4752698],
    [41.5796553, -87.4747119],
    [41.5806745, -87.4746851],
    [41.580819, -87.4745241],
    [41.580823, -87.4754039] 
    ]
  const parking10Coords = [
     [41.5799434, -87.473212],
     [41.579884, -87.4732292],
     [41.5798407, -87.47333],
     [41.5795887, -87.473345],
     [41.5795759, -87.471313],
     [41.5796898, -87.4713087],
     [41.579693, -87.4712572],
     [41.5798503, -87.4712572],
     [41.57986, -87.4713065],
     [41.5799145, -87.4713065],
     [41.5799209, -87.4712572],
     [41.5805245, -87.4712572],
     [41.5805196, -87.4714589],
     [41.5799209, -87.4714589],
     [41.5799065, -87.4714074],
     [41.5798471, -87.4714546],
     [41.5798535, -87.4716112],
     [41.5799209, -87.4716177],
     [41.5799209, -87.4715619],
     [41.580242, -87.4716112],
     [41.5802998, -87.4716606],
     [41.5803688, -87.4716499],
     [41.5804041, -87.4717142],
     [41.5804153, -87.4718644],
     [41.5803591, -87.4719653],
     [41.5802644, -87.4720211],
     [41.5799129, -87.4720383],
     [41.5799242, -87.4727228],
     [41.5802709, -87.472727],
     [41.5803784, -87.4728215],
     [41.5804169, -87.4729245],
     [41.5804169, -87.4730275],
     [41.5803784, -87.4731283],
     [41.5803415, -87.4730811],
     [41.5802644, -87.4731326],
     [41.5802548, -87.4732141],
     [41.5799434, -87.473212]
    ]
  const parking11Coords = [
    [41.5781382, -87.4749999],
    [41.5783663, -87.4749763],
    [41.5785461, -87.4751565],
    [41.5788414, -87.475178],
    [41.5790886, -87.4749763],
    [41.5789923, -87.4748733],
    [41.5789666, -87.4747746],
    [41.579002, -87.4746673],
    [41.5791336, -87.4746029],
    [41.5792106, -87.4744699],
    [41.5796504, -87.4743669],
    [41.5796023, -87.4749248],
    [41.5791863, -87.4749999],
    [41.5791831, -87.4751007],
    [41.5791286, -87.4752016],
    [41.5790146, -87.4753153],
    [41.5789311, -87.4753604],
    [41.5784046, -87.4753732],
    [41.5782907, -87.4754054],
    [41.5781719, -87.4754054],
    [41.5780965, -87.4753067],
    [41.5780804, -87.4751501],
    [41.5781382, -87.4749999]
    ]
  const parking12Coords = [
    [41.5832398, -87.4758932],
    [41.5832302, -87.4756014],
    [41.583686, -87.4756229],
    [41.5836635, -87.4758932],
    [41.5832398, -87.4758932]
    ]
  const parking13Coords = [
    [41.5855548, -87.4759649],
    [41.5855548, -87.4755487],
    [41.5858838, -87.4755186],
    [41.5859464, -87.4756023],
    [41.5859464, -87.4759757],
    [41.5855548, -87.4759649]
    ]
  const parking14Coords = [
    [41.5873681, -87.4750586],
    [41.5873489, -87.474653],
    [41.5881304, -87.474653],
    [41.5881353, -87.4749556],
    [41.5880021, -87.4750071],
    [41.5879844, -87.4749084],
    [41.5878961, -87.4749062],
    [41.5878159, -87.4749041],
    [41.5876939, -87.474814],
    [41.5876409, -87.4748097],
    [41.5876217, -87.474947],
    [41.5875864, -87.4750607],
    [41.5873681, -87.4750586]
    ]
  const parking15Coords = [
    [41.5882374, -87.4693497],
    [41.5878923, -87.4693562],
    [41.5878907, -87.4690687],
    [41.5882326, -87.4690987],
    [41.5882374, -87.4693497]
    ]
  const parking16Coords = [
    [41.5882067, -87.4707224],
    [41.5878536, -87.470716],
    [41.5878312, -87.4706559],
    [41.5877862, -87.4706152],
    [41.5877894, -87.4702611],
    [41.5882083, -87.4702611],
    [41.5882067, -87.4707224] 
    ]
  const parking17Coords = [
    [41.5872592, -87.4723356],
    [41.5871469, -87.4723399],
    [41.5871597, -87.4717047],
    [41.5872528, -87.4717219],
    [41.5872592, -87.4723356]
    ]
  return (
    <MapContainer center={center} zoom={16} className="map-container" >
      {/* OPEN STREEN MAPS TILES */}
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    <Polygon
        positions={parking1Coords}
        pathOptions={{ color: '#46AAF5', fillColor: '#1B6A9E', fillOpacity: 0.2 }}
      />
    <Polygon
        positions={parking2Coords}
        pathOptions={{ color: '#46AAF5', fillColor: '#1B6A9E', fillOpacity: 0.2 }}
      />
    <Polygon
        positions={parking3Coords}
        pathOptions={{ color: '#46AAF5', fillColor: '#1B6A9E', fillOpacity: 0.2 }}
      />
    <Polygon
        positions={parking4Coords}
        pathOptions={{ color: '#46AAF5', fillColor: '#1B6A9E', fillOpacity: 0.2 }}
      />
    <Polygon
        positions={parking5Coords}
        pathOptions={{ color: '#46AAF5', fillColor: '#1B6A9E', fillOpacity: 0.2 }}
      />
    <Polygon
        positions={parking6Coords}
        pathOptions={{ color: '#46AAF5', fillColor: '#1B6A9E', fillOpacity: 0.2 }}
      />
    <Polygon
        positions={parking7Coords}
        pathOptions={{ color: '#46AAF5', fillColor: '#1B6A9E', fillOpacity: 0.2 }}
      />
    <Polygon
        positions={parking8Coords}
        pathOptions={{ color: '#46AAF5', fillColor: '#1B6A9E', fillOpacity: 0.2 }}
      />
    <Polygon
        positions={parking9Coords}
        pathOptions={{ color: '#46AAF5', fillColor: '#1B6A9E', fillOpacity: 0.2 }}
      />
    <Polygon
        positions={parking10Coords}
        pathOptions={{ color: '#46AAF5', fillColor: '#1B6A9E', fillOpacity: 0.2 }}
      />
    <Polygon
        positions={parking11Coords}
        pathOptions={{ color: '#46AAF5', fillColor: '#1B6A9E', fillOpacity: 0.2 }}
      />
    <Polygon
        positions={parking12Coords}
        pathOptions={{ color: '#46AAF5', fillColor: '#1B6A9E', fillOpacity: 0.2 }}
      />
    <Polygon
        positions={parking13Coords}
        pathOptions={{ color: '#46AAF5', fillColor: '#1B6A9E', fillOpacity: 0.2 }}
      />
    <Polygon
        positions={parking14Coords}
        pathOptions={{ color: '#46AAF5', fillColor: '#1B6A9E', fillOpacity: 0.2 }}
      />
    <Polygon
        positions={parking15Coords}
        pathOptions={{ color: '#46AAF5', fillColor: '#1B6A9E', fillOpacity: 0.2 }}
      />
    <Polygon
        positions={parking16Coords}
        pathOptions={{ color:'#46AAF5', fillColor: '#1B6A9E', fillOpacity: 0.2 }}
      />
    <Polygon
        positions={parking17Coords}
        pathOptions={{ color:'#46AAF5', fillColor: '#1B6A9E', fillOpacity: 0.2 }}
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