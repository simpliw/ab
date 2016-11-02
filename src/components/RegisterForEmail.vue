<template lang="html">
<div class="ab-register">
  <h2>微记账</h2>
  <div class="row">
    <form class="col s12">
      <div class="row">
        <div class="input-field col s10 push-s1 m6 push-m3">
          <input id="email" type="email" class="validate">
          <label for="email">请输入邮箱</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s10 push-s1 m6 push-m3">
          <input id="password" type="password" class="validate">
          <label for="password">请输入密码</label>
        </div>
      </div>
      <div class="row">
        <div class="col s10 push-s1 m6 push-m3">
          <a v-link="{ path: '/login' }" href="#" class='waves-effect waves-light btn register'>注册</a>
        </div>
      </div>
    </form>
    <div class="col s12">
      <div class="row">
        <div class="col s10 push-s1 m6 push-m3 subtext">
          <a href="#" class="right" v-link="{path:'/register-for-phone'}">手机注册</a>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import OtherLogin from './OtherLogin'

export default {
  data() {
      return {};
    },
    computed: {},
    ready() {},
    attached() {},
    methods: {},
    components: {
      OtherLogin
    }
};
</script>

<style lang="less">
.ab-register {
    h2 {
        margin-top: 16vh;
        color: #ee6e73;
        text-align: center;
    }
    .register {
        width: 100%;
        background: #ee6e73;
        height: 45px;
        line-height: 45px;
        font-size: 1.3rem;
    }
    .subtext a {
        display: block;
        color: #9e9e9e;
        &.left {
            float: left;
        }
        &.right {
            float: right;
        }
    }
}
</style>
