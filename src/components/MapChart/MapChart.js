import React from 'react';
import atlas from './atlas';
import geoURL from './world-50m-simplified.json';
import europe from './europe-50m-simplified.json';
import asia from './asia-50m-simplified.json';
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  Graticule
} from 'react-simple-maps';

const MapChart = ({ country, markers }) => {
  let t;
  if (atlas[country].continent === 'europe') {
    t = europe;
  } else if (atlas[country].continent === 'asia') {
    t = asia;
  } else {
    t = atlas[country].geoURL || geoURL;
  }
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
      <Geographies geography={t}>
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
          <circle r={4*radius} fill='#F00' fillOpacity={0.6} />
        </Marker>
      ))}
    </ComposableMap>
  );
};

export default MapChart;
