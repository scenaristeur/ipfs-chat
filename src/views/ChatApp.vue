<template>
  <div>
ChatApp

  <div className='avenir flex flex-column h-100'>
      <div className='flex-none'>
       started={{started}} <br>
       libp2p : {{ libp2p}} <br>

      </div>
      <div className='flex h-100'>
        <!-- <Metrics libp2p={libp2p} eventBus={eventBus} />
        <Chat libp2p={libp2p} eventBus={eventBus} /> -->
      </div>
    </div>

  </div>
</template>

<script>
import createLibp2p from '@/utils/libp2p'
import { getOrCreatePeerId } from '@/utils/peer-id'

export default {
name: "ChatApp",
data(){
  return {
    peerId: null,
    libp2p: null,
    started: null
  }
},
async created(){
  let app = this
    await createLibp2p()
        if (!this.peerId) {
      console.info('Getting our PeerId')
      this.peerId = await getOrCreatePeerId()
      console.log(this.peerId)
      return
    }

    // If the libp2p instance is not created, create it with our PeerId instance
    if (!this.libp2p) {
      (async () => {
        console.info('Creating our Libp2p instance')
        const node = await createLibp2p(app.peerId)
        app.libp2p = node
        console.log(app.libp2p)
        app.started = true
      })()
    }
}
}
</script>

<style>

</style>