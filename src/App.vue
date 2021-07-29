<template>
  <div id="app">
    <component :is="sharedHeader"></component>
    <div class="main">
      <router-view></router-view>
    </div>
    <component :is="sharedFooter"></component>
  </div>
</template>

<script>
import Header from "./components/header.vue";
import Footer from "./components/footer.vue";
export default {
  components: {
    Header,
    Footer
  },
  data() {
    return {
      sharedHeader: Header,
      sharedFooter: Footer
    };
  }
};
</script>

<style lang="scss">
.main {
  margin-top: 142px;
}
</style>