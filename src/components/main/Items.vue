<template lang="html">
  <div class="ab-items">
    <div class="warp">
      <a v-for="item in itemsOut" class="item" @click="select( item )">
        <span :style='{ backgroundColor:item.background }'></span>
        <label>{{item.name}}</label>
      </a>
    </div>
  </div>
</template>

<script>
import itemsOut from '../../../db/itemsOut.json';
export default {
  data() {
    return {
      itemsOut: itemsOut
    };
  },
  computed: {},
  ready() {
    console.log('items ready');
    if( this.itemsOut&&this.itemsOut.length > 0 ) {
      this.$dispatch('selectedItem',this.itemsOut[0]);
    }
  },
  attached() {},
  methods: {
    select( item ) {
      this.$dispatch('selectedItem',item);
    }
  },
  components: {}
};
</script>

<style lang="less" scoped>
.ab-items {
  overflow: hidden;
  padding-top: 10px;
  .warp {
    display: flex;
    flex-wrap: wrap;
    .item {
      display: flex;
      flex-direction: column;
      align-items: center;
      flex: 0 0 25%;
      text-align: center;
      span{
        display: block;
        width: 50px;
        height: 50px;
        border-radius: 50%;
      }
    }
  }
}
</style>
