import React, { Component } from 'react';
import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography,
  Annotation
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

class WorldMap extends Component {

  render() {
    let visitedColor = this.props.color[0];
    let hoverColor = this.props.color[1];

    let v, scale, center, anno;
    if (this.props.continent === 'europe') {
      scale = 2000;
      v = new Set(visited.europe_iso);
      center = [10, 49];
    } else if (this.props.continent === 'asia') {
      scale = 900;
      v = new Set(visited.asia_iso);
      center = [95, 30];
    } else if (this.props.continent === 'northAmerica') {
      scale = 800;
      center = [-100, 50];
      v = new Set(visited.north_america_iso);
    } else if (this.props.continent === 'southAmerica') {
      scale = 800;
      center = [-74.0563123, -15];
      v = new Set(visited.south_america_iso);
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
            <Geographies geography='/topojson/world-50m.json'>
              {(geographies, projection) =>
                geographies.map((geography, i) => geography.id !== -1 && (

                    <Geography
                      key={i}
                        geography={geography}
                        projection={projection}
                        style={{
                          default: {
                            fill: v.has(geography.id) ? visitedColor : '#ECEFF1',
                            stroke: strokeColor,
                            strokeWidth: strokeWidth,
                            outline: 'none',
                          },
                          hover: {
                            fill: v.has(geography.id) ? hoverColor : '#CFD8DC',
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

export default WorldMap;
