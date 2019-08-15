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


const markers = visited.us_cities_markers;


class USMap extends Component {

  renderMarkers() {
    return (
      <Markers>
        {markers.map((marker, i) => (
          <Marker
            key={i}
            marker={marker}
            style={{
              default: { fill: "#FF5722" },
              hover: { fill: "#FFFFFF" },
              pressed: { fill: "#FF5722" },
            }}
            >
            <circle cx={0} cy={0} r={10}
              style={{
                stroke: "#FF5722",
                strokeWidth: 3,
                opacity: 0.9,
              }}
            />
            <text
              textAnchor="middle"
              y={marker.markerOffset}
              style={{
                fontFamily: "Roboto, sans-serif",
                fontSize: '28px',
                fill: "#607D8B",
              }}
              >
              {marker.name}
            </text>
          </Marker>
        ))}
      </Markers>
    );
  }

  render() {
    let visitedColor = this.props.color[0];
    let hoverColor = this.props.color[1];
    let scale = 1350;
    let center = [-96, 39];
    let visited = new Set(this.props.visited);
    let markers = this.props.showMarkers ? this.renderMarkers() : null;

    return (
      <div style={wrapperStyles}>
        <ComposableMap
          projection='mercator'
          projectionConfig={{ scale: scale }}
          width={1400}
          height={900}
          style={{ width: "100%", height: "auto" }}
        >
          <ZoomableGroup center={center} disablePanning>
            <Geographies geography='/topojson/us-states.json'>
              {(geographies, projection) =>
                geographies.map((geography, i) => (
                    <Geography
                      key={i}
                        geography={geography}
                        projection={projection}
                        style={{
                          default: {
                            fill: visited.has(geography.properties.NAME_1) ? visitedColor : '#ECEFF1',
                            stroke: strokeColor,
                            strokeWidth: strokeWidth,
                            outline: "none",
                          },
                          hover: {
                            fill: visited.has(geography.properties.NAME_1) ? hoverColor : '#CFD8DC',
                            stroke: strokeColor,
                            strokeWidth: strokeWidth,
                            outline: "none",
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
            { markers }
          </ZoomableGroup>
        </ComposableMap>
      </div>
    )
  }
}

export default USMap;
