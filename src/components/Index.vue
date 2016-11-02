<template lang="html">
    <div class="ab-index row">
        <div class="col s12">
            <h1>微记账</h1>    
            <p>简单好用的智能记账</p>
            <div class="ab-btns">
                <a v-link="{ path: '/register-for-phone' }" href="#" class='waves-effect waves-light btn register'>注册</a>
                <a v-link="{ path: '/login' }" href="#" class='waves-effect waves-light btn login'>登录</a>
            </div>
        </div>
        <other-login class='ol col s12'></other-login>
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
    .ab-index {
        display: flex;
        flex-direction: column;
        color: #ee6e73;
        width: 100%;
        height: 100vh;
        overflow: hidden;
        h1 {
            text-align: center;
            margin-top: 20vh;
            margin-bottom: 0;
        }
        p {
            text-align: center;
        }
        .ab-btns {
            margin-top: 3rem;
            display: flex;
            flex-direction: column;
            align-items: center;
            a {
                font-size: 1.5rem;
                width: 200px;
                height: 45px;
                line-height: 45px;
                border-radius: 22.5px;
                &.register {
                    border: 1px solid #ee6e73;
                    background-color: #ee6e73;
                    color: #fff;
                }
                &.login {
                    border: 1px solid #ee6e73;
                    color: #ee6e73;
                    background-color: #fff;
                    margin-top: 1.2rem;
                }
            }
        }
        .ol {
            margin-top: 170px;
        }
    }
</style>