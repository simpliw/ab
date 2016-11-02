<template lang="html">
<div class="ab-findpwd">
  <div class="row">
    <form class="col s12">
      <div class="row">
        <div class="input-field col s10 push-s1 m6 push-m3">
          <input id="phoneoremail" type="text" class="validate">
          <label for="phoneoremail">{{byPhone?'请输入手机号':'请输入邮箱'}}</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s10 push-s1 m6 push-m3">
          <input id="codes" type="text" class="validate">
          <label for="codes">请输入验证码</label>
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
          <a href="javascript:void(0)" class="right" @click='toggle()'>{{byPhone?'邮箱找回密码':'手机号找回密码'}}</a>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data() {
      return {
        byPhone: true
      };
    },
    computed: {},
    ready() {},
    attached() {},
    methods: {
      toggle: function() {
        this.byPhone = !this.byPhone
        return false
      }
    },
    components: {

    }
};
</script>

<style lang="less">
.ab-findpwd {
    padding-top: 20vh;
    .login {
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
