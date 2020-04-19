import React, { Component } from 'react';
import * as d3 from 'd3';
import graph from './languages.json';
import './App.css';

class Ling extends Component {
  componentDidMount() {
    var svg = d3.select("svg");
    var width = svg.node().getBoundingClientRect().width;
    var height = svg.attr("height");
    var radius = width > 400 ? 6 : 4;

    function getRandomColor() {
      var letters = '0123456789ABCDEF';
      var color = '#';
      for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }

    var simulation = d3.forceSimulation()
      .force("link", d3.forceLink()
        .id(link => link.id)
        .distance(link => svg.node().getBoundingClientRect().width / 10 * -Math.log(link.similarity))
      )
      .force("charge", d3.forceManyBody())
      .force("center", d3.forceCenter(width / 2, height / 2));

    var link = svg.append("g")
      .attr("class", "links")
      .selectAll("line")
      .data(graph.links)
      .enter().append("line")
      .attr("stroke-width", .5);

    var node = svg.append("g")
      .attr("class", "nodes")
      .selectAll("g")
      .data(graph.nodes)
      .enter().append("g");

    node.append("circle")
      .attr("r", radius)
      .attr("fill", node => getRandomColor())
      .call(d3.drag()
      .on("start", dragstarted)
      .on("drag", dragged)
      .on("end", dragended));

    node.append("text")
      .text(node => node.id.split('_')[0])
      .attr('x', 6)
      .attr('y', 3);

    node.append("title")
      .text(d => d.id);

    simulation
      .nodes(graph.nodes)
      .on("tick", ticked);

    simulation.force("link")
      .links(graph.links);

    function ticked() {
      link
      .attr("x1", d => d.source.x)
      .attr("y1", d => d.source.y)
      .attr("x2", d => d.target.x)
      .attr("y2", d => d.target.y);
      node.attr("transform", d => `translate(${d.x},${d.y})`);
    }

    function dragstarted(d) {
      if (!d3.event.active) {
        simulation.alphaTarget(0.3).restart();
      }
      d.fx = d.x;
      d.fy = d.y;
    }

    function dragged(d) {
      d.fx = d3.event.x;
      d.fy = d3.event.y;
    }

    function dragended(d) {
      if (!d3.event.active) {
        simulation.alphaTarget(0);
      }
      d.fx = null;
      d.fy = null;
    }
  }

  render() {
    return (<svg height={500}
      style={{
        width: '100%',
        maxWidth: '700px',
        margin: 'auto',
        display: 'block',
      }}></svg>
    );
  }
}

export default Ling;
