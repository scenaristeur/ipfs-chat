<template>
  <div class="home">
    <ChatSocket />
    <ChatApp />
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {
    ChatApp: () => import("@/views/ChatApp"),
    ChatSocket: () => import("@/views/ChatSocket"),
  },
};
</script>
