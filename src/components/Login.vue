<template lang="html">
<div class="ab-login">
  <h2>微记账</h2>
  <div class="row">
    <form class="col s12">
      <div class="row">
        <div class="input-field col s10 push-s1 m6 push-m3">
          <input id="phoneoremail" type="text" class="validate">
          <label for="phoneoremail">请输入手机号/邮箱</label>
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
          <a v-link="{ path: '/login' }" href="#" class='waves-effect waves-light btn login'>登录</a>
        </div>
      </div>
    </form>
    <div class="col s12">
      <div class="row">
        <div class="col s10 push-s1 m6 push-m3 subtext">
          <a href="#" class="left" v-link="{ path: '/register-for-phone' }">立即注册</a>
          <a href="#" class="right" v-link="{ path: '/find-password' }">忘记密码</a>
        </div>
      </div>
    </div>
    <other-login class='ol col s12'></other-login>
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
.ab-login {
    h2 {
        margin-top: 16vh;
        color: #ee6e73;
        text-align: center;
    }
    .login {
        width: 100%;
        background: #ee6e73;
        height: 45px;
        line-height: 45px;
        font-size: 1.3rem;
    }
    .ol {
        margin-top: 70px;
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
