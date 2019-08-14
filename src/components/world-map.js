import React, { Component } from 'react';
import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography,
  Markers,
  Marker,
} from 'react-simple-maps';

const wrapperStyles = {
  width: "100%",
  maxWidth: 980,
  margin: "0 auto",
  //border: '1px',
  //borderColor: 'black',
  //borderStyle: 'solid'
};

const europe = [
  'ALB', 'AND', 'ARM', 'AUT', 'AZE', 'BLR', 'BEL', 'BIH', 'BGR', 'HRV',
  'CYP', 'CZE', 'DNK', 'EST', 'FIN', 'FRA', 'GEO', 'DEU', 'GRC', 'HUN',
  'ISL', 'IRL', 'ITA', 'KAZ', 'LVA', 'LIE', 'LTU', 'LUX', 'MDA', 'MCO',
  'MNE', 'NLD', 'NOR', 'POL', 'PRT', 'ROU', 'RUS', 'SMR', 'SRB', 'SVK',
  'SVN', 'ESP', 'SWE', 'CHE', 'TUR', 'UKR', 'GBR', 'VAT'
];
const vEurope = new Set([
  'GBR', 'FRA', 'BEL', 'CHE', 'DEU', 'MCO', 'GRC', 'ITA', 'VAT', 'LUX',
  'NLD', 'ESP'
]);
const asia = [
  'AFG', 'ARM', 'AZE', 'BHR', 'BGD', 'BTN', 'BRN', 'KHM', 'CHN', 'GEO',
  'HKG', 'IND', 'IDN', 'IRN', 'IRQ', 'ISR', 'JPN', 'JOR', 'KAZ', 'KWT',
  'KGZ', 'LAO', 'LBN', 'MAC', 'MYS'
];
const vAsia = new Set([
  'HKG', 'CHN', 'MYS', 'SGP'
]);

const strokeColor = '#607D8B';
const strokeWidth = 0.75;
const visitedColor = '#F09D51';


class WorldMap extends Component {
  render() {
    let include, visited, scale, center;
    if (this.props.continent === 'europe') {
      scale = 1700;
      include = europe;
      visited = vEurope;
      center = [10, 49];
    } else if (this.props.continent === 'asia') {
      scale = 800;
      include = asia;
      visited = vAsia;
      center = [70, 30];
    }

    return (
      <div style={wrapperStyles}>
        <ComposableMap
          projectionConfig={{ scale: scale }}
          width={1400}
          height={1000}
          style={{ width: "100%", height: "auto" }}
        >
          <ZoomableGroup center={center} disablePanning>
            <Geographies geography='/world-50m.json'>
              {(geographies, projection) =>
                geographies.map((geography, i) =>
                  include.indexOf(geography.id) !== -1 && (
                    <Geography
                      key={i}
                        geography={geography}
                        projection={projection}
                        style={{
                          default: {
                            fill: visited.has(geography.id) ? visitedColor : "#ECEFF1",
                            stroke: strokeColor,
                            strokeWidth: strokeWidth,
                            outline: "none",
                          },
                          hover: {
                            fill: "#CFD8DC",
                            stroke: strokeColor,
                            strokeWidth: strokeWidth,
                            outline: "none",
                          },
                          pressed: {
                            fill: "#FF5722",
                            stroke: strokeColor,
                            strokeWidth: strokeWidth,
                            outline: "none",
                          },
                        }}
                    />
                ))
              }
            </Geographies>
          </ZoomableGroup>
        </ComposableMap>
      </div>
    )
  }
}

export default WorldMap;
