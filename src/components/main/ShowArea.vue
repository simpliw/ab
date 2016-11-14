<template lang="html">
  <div class="ab-showArea" :style="{ backgroundColor:item.background }">
    <label> {{item.name}} </label>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  props:['item']
}
</script>

<style lang="less">
.ab-showArea {
  padding-left: 1em;
  height: 50px;
  line-height: 50px;
  label {
    color: #fff;
  }
}
</style>
