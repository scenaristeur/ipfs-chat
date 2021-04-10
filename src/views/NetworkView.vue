<template>
  <div class="wrapper">
    <network
      class="network"
      :nodes="network.nodes"
      :edges="network.edges"
      :options="network.options"
      @select-node="selectNodeEvent"
      @nodes-add="addNodeEvent"
      @click="networkClickEvent"
    >
    </network>
    <NetworkPopups :network="network" />
  </div>
</template>

<script>
import "vis-network/dist/vis-network.css";

export default {
  name: "NetworkVue",
  props: ["network"],
    components: {
    //  Network,
    'NetworkPopups': () => import('@/components/network/NetworkPopups'),
    // 'network': () => import('vue-vis-network')
  },
  data() {
    return {
 
    }
  },
  created() {
    let app = this;
    this.network.options.manipulation = {
      initiallyActive: true,
      addNode: async (node, callback) => {
        node.label = "";
        app.editNode(node, callback);
      },
      editNode: async (node, callback) => {
        app.editNode(node, callback);
      },
      addEdge: async (edge, callback) => {
        app.addEdge(edge, callback);
      },
      editEdge: {
        editWithoutDrag: async (edge, callback) => {
          app.editWithoutDrag(edge, callback);
        },
      },

      //  editEdge: async (edge, callback) => { app.editWithoutDrag(edge, callback) },
      //  editEdge: {}
    };
  },
  methods: {
    onSelectNode(p) {
      console.log(p);
      console.log(p.nodes[0]);
      //console.log(this.nodes)
      let node = this.network.nodes.find((x) => x.id == p.nodes[0]);
      console.log(node);
     // this.$store.commit("ipgs/addToHistory", node);
      //  if(node.type == 'folder' || node.type == 'file'){
    //   try {
    //     if (node.id.startsWith("http")) {
    //       this.load(node.id);
    //     } else {
    //       this.$store.commit("ipgs/setCommandInput", node.label + " ");
    //     }
    //   } catch (e) {
    //     alert(e);
    //   }
      // console.log(this.nodeData)
      //
      // this.$bvModal.show("node-menu")

      //}
    },
    addNodeEvent(ev) {
      // console.log(ev)
      //const app = this;
      let nodes = this.network.nodes.filter((n) =>
        ev.properties.items.includes(n.id)
      );
      console.log(nodes);

    //   nodes.forEach(function (n) {
    //     if (n.built == undefined) {
    //       app.buildEdges(n);
    //     }
    //   });
    },
    selectNodeEvent(ev) {
      console.log(ev);
      let nodeId = ev.nodes[0];
      console.log(nodeId)
    },
      networkClickEvent(ev){
      console.log(ev)
    },
    editNode(node, callback) {
      //    this.node = node
      node.color == undefined
        ? (node.color = { background: "#D2E5FF", border: "#2B7CE9" })
        : "";
      node.shape == undefined ? (node.shape = "ellipse") : "";
      //  this.$bvModal.show("node-popup")
       this.$store.commit('setAction', {action: 'editNode', node: node})
      console.log(node);
      callback();
    },
    addEdge(edge, callback) {
      //  this.edge = edge
      if (edge.from == edge.to) {
        var r = confirm("Do you want to connect the node to itself?");
        if (r != true) {
          callback(null);
          return;
        }
      }
      this.editWithoutDrag(edge, callback);
    },
    //  editEdge(edge, callback){ this.editWithoutDrag(edge, callback); },
    editWithoutDrag(edge, callback) {
      //  this.edge = edge
      console.log(edge);
      let bugEdge = edge;
      bugEdge.from = edge.from.id != undefined ? edge.from.id : edge.from;
      bugEdge.to = edge.to.id != undefined ? edge.to.id : edge.to;
      this.$store.commit('setAction', {action: 'editEdge', edge: bugEdge})
      console.log(bugEdge);
      //  this.$bvModal.show("edge-popup")
      callback();
    },
  },
};
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

.network {
  min-height: 50vh;
  border: 1px solid black;
  background: linear-gradient(
    to bottom,
    rgba(215, 215, 255),
    rgba(250, 250, 170)
  );
  padding: 10px;
  height: 75vh;
}
.vis-label {
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
