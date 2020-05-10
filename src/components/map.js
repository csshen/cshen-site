/*
import React, {useEffect, useState} from 'react';
import * as d3 from 'd3';
import * as topojson from 'topojson-client';
import atlas from './MapChart/atlas';
import geoURL from './MapChart/world-50m-simplified.json';
import europe from './MapChart/europe-50m-simplified.json';
import asia from './MapChart/asia-50m-simplified.json';

const Map = ({ id, country }) => {
  const [load, setLoad] = useState({filter: 'blur(8px)'});
  useEffect(() => {
    let t;
    if (atlas[country].continent === 'europe') {
      t = europe;
    } else if (atlas[country].continent === 'asia') {
      t = asia;
    } else {
      t = atlas[country].geoURL || geoURL;
    }



    var offset = [400/2, 400/2];
    var albersProjection = d3.geoAzimuthalEqualArea()
    .rotate([-atlas[country].long, -atlas[country].lat, 0])
    .scale( atlas[country].scale * 100)
    .translate(offset);


    var path = d3.geoPath().projection( albersProjection );
    var svg = d3.select('#map'+id);

    var url = t;
    d3.json(url)
      .then((topology) => {
        console.log(topojson.mesh(topology))
        var geojson = topojson.feature(topology, topology.objects[Object.keys(topology.objects)[0]]);
        //console.log(geojson)
        svg.selectAll("path")
            .data(geojson.features)
            .enter().append("path")
            .attr("d", path(topojson.mesh(topology)));
      })
      .then(() => {
        setLoad({
          background: 'red',
          filter: '',
          animationName: 'blurin',
          animationTimingFunction: 'cubic-bezier(0.1, 0.7, 1.0, 0.1)',
        animationDuration: '.5s'})
      })
      .catch(function(error) {
          console.log(error)
      });

  });

  return (<svg id={"map"+id} width={'100%'} viewBox="0 0 400 400"  style={{...load}}></svg>);
}

export default Map;
*/
