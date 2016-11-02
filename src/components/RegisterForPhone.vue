<template lang="html">
<div class="ab-register">
  <h2>微记账</h2>
  <div class="row">
    <form class="col s12">
      <div class="row">
        <div class="input-field col s10 push-s1 m6 push-m3">
          <input id="phone" type="text" class="validate" v-model="reg.phone">
          <label for="phone">请输入手机号</label>
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
          <input id="password" type="password" class="validate" v-model="reg.password">
          <label for="password">请输入密码</label>
        </div>
      </div>
      <div class="row">
        <div class="col s10 push-s1 m6 push-m3">
          <a @click="register()" href="#" class='waves-effect waves-light btn register'>注册</a>
        </div>
      </div>
    </form>
    <div class="col s12">
      <div class="row">
        <div class="col s10 push-s1 m6 push-m3 subtext">
          <a href="#" class="left" v-link="{ path: '/login' }">已有账号</a>
          <a href="#" class="right" v-link="{ path: '/register-for-email' }">邮箱注册</a>
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
      return {
        reg:{
          phone:null,
          password:null
        }
      };
    },
    computed: {},
    ready() {},
    attached() {},
    methods: {
      register() {
        var param = this.reg;
        if(param.phone&&param.password) {
          this.$http.post('http://127.0.0.1:3000/api/user', {username:param.phone,phone:param.phone,password:param.password}).then(function(response){
              alert('____')
              alert(response.responseText)
          }, function(err){
            console.info(err);
          });
        }
      }
    },
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
