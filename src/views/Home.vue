<template>
  <div class="home">
    <ChatApp />
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {
    ChatApp: () => import("@/views/ChatApp"),
  },
};
</script>
