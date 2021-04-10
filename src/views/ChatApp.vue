<template>
  <div>chat app status : {{ status }}


<b-button @click="IpfsAdd">Add</b-button>

  </div>
  
</template>

<script>
export default {
  name: "ChatApp",
  data() {
    return {
      status: "none",
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
      } catch (err) {
        // Set error status text.
        this.status = `Error: ${err}`;
      }
    },
    async IpfsAdd() {
      console.log(this.ipfs);
      // console.log(this.editorContent.content);
      let json = { name: "test" };
      const results = await this.ipfs.add(JSON.stringify(json));
      console.log("res", results);
      console.log(await results.cid);
      this.cid = results.cid;
      console.log(this.cid);
      console.log('https://ipfs.io/ipfs/'+this.cid.string)
      // this.$bvModal.show("ipfs-modal");
      // this.editorContent.content.ipfscid = results.cid
      // this.cid = results.cid
    },
  },
};
</script>

<style>
</style>