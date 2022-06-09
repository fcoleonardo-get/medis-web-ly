import React,{ useState, useEffect } from "react";
import { mapacasos } from '../../Controllers/apimedis'
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ZoomableGroup
} from "react-simple-maps";

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const MapChart = () => {
    const [casos, setCasos] = useState([])

    useEffect(()=>{
        getCasos()
    },[])

    const getCasos = async () =>{
        const response = await mapacasos()
        if(response.status === 200){
            setCasos(response.data)
        }
    }

  return (
    <ComposableMap 
        projection="geoAlbers"
        projectionConfig={{
            rotate: [58, 53, 0],
            scale: 950
        }}
    >
    <ZoomableGroup zoom={1}>
        
        <Geographies geography={geoUrl}>
            {({ geographies }) =>
            geographies.map(geo => (
                <Geography
                key={geo.rsmKey}
                geography={geo}
                fill="#DDD"
                stroke="#FFF"
                />
            ))
            }
        </Geographies>
        {casos.map((item, index)=>{
            return(
                <Marker key={index} coordinates={[ item.longitude, item.latitude]}>
                    <circle r={5} fill="#F53" />
                </Marker>
            ) 
        })}
    </ZoomableGroup>

    </ComposableMap>
  );
};

export default MapChart;