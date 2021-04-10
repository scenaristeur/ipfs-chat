<template>
  <div class="home">
    <Chat />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
 components: {
    'Chat': () => import('@/views/Chat.vue'),
}
}
</script>
