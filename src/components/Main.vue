<template lang="html">
  <div class="ab-main">
    <slide-nav></slide-nav>
    <router-view></router-view>
  </div>
</template>

<script>
import SlideNav from './main/SlideNav.vue'
export default {
  data() {
      return {

      };
    },
    computed: {},
    ready() {

    },
    attached() {},
    methods: {},
    components: {
      SlideNav
    }
};
</script>

<style lang="less">
  .ab-main {

  }
</style>
