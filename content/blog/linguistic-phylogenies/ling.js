import React, { Component } from 'react';
import * as d3 from 'd3';
import graph from './languages.json';
import './App.css';

class Ling extends Component {
  componentDidMount() {
    var svg = d3.select("svg");
    var width = svg.node().getBoundingClientRect().width;
    var height = svg.attr("height");

    var color = d3.scaleOrdinal(['#011638', '#aafcb8', '#8cd790','#77af9c','#285943']);

    var simulation = d3.forceSimulation()
      .force("link", d3.forceLink()
        .id(link => link.id)
        // 300 * (1 - link.similarity)
        // -90 * Math.log(link.similarity)
        // 100 * Math.sqrt(1 - link.similarity)
        // 8 * ((1/link.similarity) - 1)
        // Math.acos(link.similarity) / Math.PI
        .distance(link => 50 * Math.sqrt(((1/link.similarity) - 1)))
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

    var circles = node.append("circle")
      .attr("r", 5)
      .attr("fill", node => color(node.group))
      .call(d3.drag()
      .on("start", dragstarted)
      .on("drag", dragged)
      .on("end", dragended));

    var labels = node.append("text")
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
        maxWidth: '900px',
        margin: 'auto',
        display: 'block',
        border: '1px solid black'
      }}></svg>);
  }
}

export default Ling;