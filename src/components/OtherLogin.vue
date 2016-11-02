<template lang="html">
  <div class="ab-otherlogin row">
    <span class='text col s12'>其他登录方式</span>
    <div class="list col s5">
      <a href="#"><i class="fa fa-qq" aria-hidden="true"></i></a>
      <a href="#"><i class="fa fa-weibo" aria-hidden="true"></i></a>
      <a href="#"><i class="fa fa-github" aria-hidden="true"></i></a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
      return {};
    },
    computed: {},
    ready() {},
    attached() {},
    methods: {},
    components: {}
};
</script>

<style lang="less">
.ab-otherlogin {
    display: flex;
    flex-direction: column;
    span.text {
        color: #9e9e9e;
        font-size: 0.5rem;
        position: relative;
        text-align: center;
        &:after {
            content: '';
            width: 70px;
            height: 1px;
            background: #9e9e9e;
            position: absolute;
            top: 50%;
            transform: translateX(30px);
        }
        &:before {
            content: '';
            width: 70px;
            height: 1px;
            background: #9e9e9e;
            position: absolute;
            top: 50%;
            transform: translateX(calc(-100% - 30px));
        }
    }
    .list {
        display: flex;
        justify-content: space-between;
        margin-right: auto;
        margin-top: 10px;
        a > i.fa {
            font-size: 2rem;
            color: #ee6e73;
        }
    }
}
</style>
