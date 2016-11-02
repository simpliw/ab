<template lang="html">
  <div class="ab-addone row">
    <div class="col s12">
      <div class="month">
        <a class="waves-effect waves-light out">
          9月支出
        </a>
        <a class="waves-effect waves-light in">
          9月收入
        </a>
      </div>
    </div>
    <div class="col s12">
      
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {

    };
  },
  computed: {},
  ready() {},
  attached() {},
  methods: {},
  components: {}
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
