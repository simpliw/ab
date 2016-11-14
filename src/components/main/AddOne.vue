<template lang="html">
  <div class="ab-addone row">
    <div class="col s12">
      <ul class="tabs">
        <li class="tab col s3"><a href="#income">收入</a></li>
        <li class="tab col s3"><a class="active" href="#expenditure">支出</a></li>
      </ul>
    </div>
    <div id="income" class="col s12">Test 1</div>
    <div id="expenditure" class="col s12">
      <show-area :item="item"></show-area>
      <items></items>
    </div>
  </div>
</template>

<script>
import ShowArea from './ShowArea.vue'
import Items from './Items.vue'
export default {
  data() {
    return {
      item: {}
    };
  },
  computed: {},
  ready() {
    $('ul.tabs').tabs();
  },
  attached() {},
  methods: {},
  events: {
    selectedItem( item ) {
      console.log('hahah',item)
      this.item = item;
    }
  },
  components: {
    ShowArea,
    Items
  }
};
</script>

<style lang="less">
.ab-addone {
    .s12:nth-of-type(1) {
        padding: 0;
        background: #ee6e73;
        .month {
            display: flex;
            .in,
            .out {
                width: 50%;
                text-align: center;
                padding: 10px;
                width: 100%;
                color: #fff;
            }
            .in {
                border-left: 0.5px solid #fff;
            }

        }
    }

}
</style>
