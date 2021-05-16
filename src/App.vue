<template>
  <div id="app">
    <component :is="sharedHeader"></component>
    <div class="main">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Header from "./components/header.vue";
export default {
  components: {
    Header
  },
  data() {
    return {
      sharedHeader: Header
    };
  }
};
</script>

<style lang="scss">
</style>