<template>
   <div class="wrapper">
    <network class="network"
    :nodes="nodes"
    :edges="edges"
    :options="options">
    </network>
  </div>
</template>

<script>
import "vis-network/dist/vis-network.css";

export default {
name: 'NetworkVue',
props: ['nodes'],
data(){
    return {
        edges : [],
                options: {
          nodes: {
          //  shape: "dot",
            scaling: {
              min: 10,
              max: 30,
            },
            font: {
              size: 12,
              face: "Tahoma",
            },
          },
          edges: {
            arrows: 'to',
            width: 0.15,
            color: { inherit: "from" },
            font: {
              align: 'top'
            },
            smooth: {
              type: "continuous",
            },
          },
          physics: {
            stabilization: false,
            barnesHut: {
              gravitationalConstant: -8000, //-8000
              springConstant: 0.03, //0.001 //0.01
              springLength: 100, //200
            },
          },
          interaction: {
            navigationButtons: true,
            tooltipDelay: 200,
           // hideEdgesOnDrag: true,
          },
        },
    }
}
}
</script>

<style>
/* * {
font-family: sans-serif;
} */

/* .wrapper {
padding: 20px 50px;
text-align: center;
} */
/* .events {
text-align: left;
height: 70px;
} */

.network{
  min-height: 50vh;
  border: 1px solid black;
  background: linear-gradient(to bottom, rgba(215, 215, 255), rgba(250, 250, 170));
  padding: 10px;
  height: 75vh;
}
.vis-label{
  color: black;

}

/* @media only screen and (max-width: 600px) {
.vis-label {
display: none;
}
.vis-button:after {
content:"°°"
}
} */
</style>
