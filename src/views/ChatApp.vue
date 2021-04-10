<template>
  <div>
    chat app status : {{ status }}
    <b-input v-model="content" v-on:keyup.enter="IpfsAdd" />
    <b-button @click="IpfsAdd">Add</b-button>
    <b-button @click="load">Load</b-button>
    <!-- notifications : {{ notifications }}<br /> -->
    nodes : {{ JSON.stringify(nodes) }}
  </div>
</template>

<script>
import ldflex from "@solid/query-ldflex/lib/exports/rdflib";
export default {
  name: "ChatApp",
  data() {
    return {
      status: "none",
      agoraPath: "https://ipgs.solidcommunity.net/public/ipgs/network.ttl",
      content: "",
      nodes: [],
    };
  },
  created() {
    this.getIpfsNodeInfo();
  },
  methods: {
    async getIpfsNodeInfo() {
      try {
        // Await for ipfs node instance.
        this.ipfs = await this.$ipfs;
        // Call ipfs `id` method.
        // Returns the identity of the Peer.
        const { agentVersion, id } = await this.ipfs.id();
        this.agentVersion = agentVersion;
        this.id = id;
        // Set successful status text.
        this.status = "Connected to IPFS =)";
        console.log(this.status);
      //  this.notifications = this.$store.state.notifications;
      } catch (err) {
        // Set error status text.
        this.status = `Error: ${err}`;
      }
    },
    async IpfsAdd() {
      console.log(this.ipfs);
      // console.log(this.editorContent.content);
      let json = { label: this.content };
      const results = await this.ipfs.add(JSON.stringify(json));
      console.log("res", results);
      console.log(await results.cid);
      this.cid = results.cid;
      console.log(this.cid);
      console.log("https://ipfs.io/ipfs/" + this.cid.string);
      await ldflex[this.agoraPath][
        "https://www.dublincore.org/specifications/dublin-core/dcmi-terms/hasPart"
      ].add(this.cid.string);
      this.content = "";
      // this.$bvModal.show("ipfs-modal");
      // this.editorContent.content.ipfscid = results.cid
      // this.cid = results.cid
    },
    async load() {
      this.loadIpfs(this.cid.string);
    },
    async loadIpfs(cid) {
      console.log(cid);
      try {
        // Await for ipfs node instance.
        // this.ipfs = await this.$ipfs;
        // console.log(this.ipfs);
        // // Call ipfs `id` method.
        // // Returns the identity of the Peer.
        // const { agentVersion, id } = await this.ipfs.id();
        // console.log(agentVersion);
        // console.log(id);
        // // Set successful status text.
        // console.log("Connected to IPFS =)");
        // console.log(cid);
        if (this.status != 'none') {
          const stream = await this.ipfs.cat(cid);
          let data = "";
          for await (const chunk of stream) {
            console.log(chunk);
            // chunks of data are returned as a Buffer, convert it back to a string
            data += chunk.toString();
          }
          //  this.restit = data
          console.log(data);
          console.info(
            "must take a look at this solution if always preload error: https://github.com/ipfs/js-ipfs/issues/1481"
          );

          try {
            let d = JSON.parse(data);
            console.log(d);
            this.nodes.push(d);
            //   if (
            //     Array.isArray(d.nodes) &&
            //     Array.isArray(d.edges) &&
            //     d.nodes.length > 0
            //   ) {
            //     this.$store.commit("ipgs/setGraphs", [d]);
            //   }
          } catch (e) {
            console.log("i can't parse", data);
          }
        } else {
          console.error("IPFS not READY YET :-{");
        }
      } catch (err) {
        // Set error status text.
        console.log(`Error: ${err}`);
      }
    },
    async processNotifs() {
      console.log(this.notifications);
       this.nodes = [];
      if (this.notifications != undefined && this.notifications.length > 0) {
        this.notifications.forEach((n) => {
          this.loadIpfs(n);
        });
      }
    },
  },
  watch: {
    notifications() {
      this.processNotifs();
    },
    status() {
      this.processNotifs();
    },
  },
  computed: {
    notifications: {
      get() {
        return this.$store.state.notifications;
      },
      set(/*value*/) {
        /*this.updateTodo(value)*/
      },
    },
  },
};
</script>

<style>
</style>