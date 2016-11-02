<template>
  <div id='app'>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  }

}
</script>

<style>
  * {
    margin: 0;
    padding: 0;
  }

  html {
    height: 100%;
  }

  .slide-right-transition,
  slide-left-transition {
    transition: all 1s ease;
    transform: translate3d(0,0,0);
  }

  .slide-left-enter{
    transform: translateX(-100vw);
  }
</style>
