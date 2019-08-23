import React, { Component } from 'react';
import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography,
  Markers,
  Marker,
} from 'react-simple-maps';
import visited from '../config/map-metadata';

const wrapperStyles = {
  width: "100%",
  maxWidth: 980,
  margin: "0 auto",
  //border: '1px',
  //borderColor: 'black',
  //borderStyle: 'solid'
};

const strokeColor = '#607D8B';
const strokeWidth = 0.75;


const include = new Set(visited.new_york_counties);


class NYMap extends Component {
  render() {
    let scale = 8500;
    let center = [-76, 42.9];
    let visitedColor = this.props.color[0];
    let hoverColor = this.props.color[1];

    return (
      <div style={wrapperStyles}>
        <ComposableMap
          projection='mercator'
          projectionConfig={{ scale: scale }}
          width={1400}
          height={1000}
          style={{ width: "100%", height: "auto" }}
        >
          <ZoomableGroup center={center} disablePanning>
            <Geographies geography='/topojson/ny-36-new-york-counties.json'>
              {(geographies, projection) =>
                geographies.map((geography, i) => (
                    <Geography
                      key={i}
                        geography={geography}
                        projection={projection}
                        style={{
                          default: {
                            fill: include.has(geography.properties.NAME) ? visitedColor : '#ECEFF1',
                            stroke: strokeColor,
                            strokeWidth: strokeWidth,
                            outline: 'none',
                          },
                          hover: {
                            fill: include.has(geography.properties.NAME) ? hoverColor : '#CFD8DC',
                            stroke: strokeColor,
                            strokeWidth: strokeWidth,
                            outline: 'none',
                          },
                          pressed: {
                            fill: '#26547C',
                            stroke: strokeColor,
                            strokeWidth: strokeWidth,
                            outline: 'none',
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

export default NYMap;
