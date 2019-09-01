import React from 'react';
import Graph from 'react-graph-vis';
// https://github.com/crubier/react-graph-vis
// https://visjs.github.io/vis-network/docs/network/#options

function VisChart(props) {

  const parentColor = "#f95d6a"
  const childColor = "#ffa600"
  const bkndColor = props.bkndColor
  const fontColor = props.fontColor
  const parentNodeStyles = { color: { border: parentColor, highlight: parentColor, hover: { border: parentColor, background: parentColor } }, shadow: { color: parentColor } }
  const childNodeStyles = { color: { border: childColor, highlight: childColor, hover: { border: childColor, background: childColor } } }
  
  const visChartOptions = {
    physics: false,
    edges: {
      length: 3000,
      width: 2,
      color: { inherit: 'to' },
      arrows: { to: { type: 'circle' } },
      smooth: { type: 'vertical', roundness: 1 },
      font: { // https://github.com/almende/vis/issues/768
        size: 20,
        color: fontColor,
        strokeWidth: 3, 
        strokeColor: bkndColor,
        background: bkndColor,
        align: props.data.length >= 10 ? 'middle' : 'horizontal',
        
      }
    },
    nodes: {
      shape: 'box',
      borderWidth: 2,
      shapeProperties: { borderRadius: 50 },
      font: { color: fontColor, size: 40, face: 'arial' },
      color: { background: bkndColor },
      shadow: { color: childColor, size: 25, x: 0, y: 0 },
      margin: { right: 50, left: 50 }
    },
    interaction: {
      dragNodes: true,
      dragView: false,
      hover:true
    },
    autoResize: true
  }

  function getPropsByIndex(index) {
    if (index === 0) return { ...parentNodeStyles, x: 800, y: 0 }
    return { ...childNodeStyles, x: index * 50, y: index * 75 }
  }

  function getNodes () {
    return props.data
      .map((node, index) => ({
        ...node,
        ...getPropsByIndex(index)
      }))
  }

  function getEdges () {
    return props.data
      .filter((d, index) => index > 0)
      .map(data => ({
        from: 1,
        to: data.id,
        label: data.subLabel,
        color: childColor,
        shadow: {
          enabled: true,
          color: childColor,
          size: 10,
          x: 0,
          y: 0
        }
      }))
  }
  
  const graph = {
    nodes: getNodes(),
    edges: getEdges()
  }
  
  const events = {
    select: function onSelectNode (event) {
      const { nodes, edges } = event
      const selectedNodeId = nodes[0]
      const node = graph.nodes.filter(n => n.id === selectedNodeId)[0]
      node && console.log(node.label, node.subLabel)
    },
    hoverNode: () => document.body.style.cursor = 'pointer',
    blurNode: () => document.body.style.cursor = 'auto'
  }

  return (
    <Graph
      graph={ graph }
      options={ visChartOptions }
      events={ events }
      style={{ height: window.innerHeight }} />
  );
}

export default VisChart;
