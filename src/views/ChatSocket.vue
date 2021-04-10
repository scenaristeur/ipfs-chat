<template>
  <b-container> 
      
      
      <h3>Chat socket </h3>
      agoraPath : {{ agoraPath}}<br>
      
      
      </b-container>
</template>

<script>
import ldflex from "@solid/query-ldflex/lib/exports/rdflib";

export default {
  name: "ChatSocket",
  data() {
    return {
      agoraPath: "https://ipgs.solidcommunity.net/public/ipgs/network.ttl",
    };
  },
  created() {
      let app = this
    var socket = new WebSocket("wss://ipgs.solidcommunity.net/", ["solid-0.1"]);
    //  var socket = new WebSocket('wss://solidweb.org');

    //  console.log(socket)
    socket.onopen = function () {
      //  console.log("socket open")
      this.send("sub " + app.agoraPath);
      //console.log("socket sub to "+app.log)
    };
    socket.onmessage = function (msg) {
      //  console.log("message",msg)
      if (msg.data && msg.data.slice(0, 3) === "pub") {
        //  console.log(msg)
        //console.log(msg.data)
        app.update();
        // resource updated, refetch resource
      }
    };
  },
  methods: {
    async update() {
     // let nb = 0;
      let notifications = [];
      console.log("update", this.agoraPath);
      await this.read(notifications);
      //this.nb = nb;
    },
    async read(notifications) {
      await ldflex.clearCache();
      for await (const agoraEvent of ldflex[this.agoraPath][
        "https://www.dublincore.org/specifications/dublin-core/dcmi-terms/hasPart"
      ]) {
        notifications.push(`${agoraEvent}`);
        // nb++;
      }
      console.log(notifications);
    },
  },
};
</script>

<style>
</style>