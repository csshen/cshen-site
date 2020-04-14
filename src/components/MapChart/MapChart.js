import React from 'react';
import atlas from './atlas';
import geoURL from './world-50m.json';
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  Graticule
} from 'react-simple-maps';

const MapChart = ({ country, markers }) => {
  return (
    <ComposableMap
      projection='geoAzimuthalEqualArea'
      projectionConfig={{
        rotate: [-atlas[country].long, -atlas[country].lat, 0],
        scale: atlas[country].scale * 100
      }}
      width={400}
      height={400}
    >
      <Graticule stroke='#EAEAEC' />
      <Geographies geography={atlas[country].geoURL || geoURL}>
        {({ geographies }) =>
          geographies
            .map(geo => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill='#EAEAEC'
                stroke='#D6D6DA'
              />
            ))
        }
      </Geographies>
      {markers.map(({ city, lat, long, radius }) => (
        <Marker key={city} coordinates={[long, lat]}>
          <circle r={4*radius} fill='#F00' fillOpacity='50%' />
        </Marker>
      ))}
    </ComposableMap>
  );
};

export default MapChart;
