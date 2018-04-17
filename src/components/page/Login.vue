<template>
    <div class="login">
        <form class="login-form" action="">
            <owl-login></owl-login>
            <div>
                <div class="login-group">
                    <div class="login-email">
                        <label for="email" class="login-email-icon"></label>
                        <input type="email" placeholder="请输入邮箱"class="login-item" id="email" @focus="openEyes" @blur="openEyes">
                    </div>
                    <div class="login-password">
                        <label for="password" class="login-password-icon"></label>
                        <input type="password" placeholder="请输入密码"class="login-item" id="password" @focus="closeEyes" @blur="openEyes">
                    </div>
                    <div class="login-submit">登 录</div>
                  <a class="login-submit" href="https://api.weibo.com/oauth2/authorize?client_id=3828459437&redirect_uri=http://www.test.com:8080&response_type=code
">微博登录</a>
                    <div>
                        <router-link to="" class="forget-password">忘记密码?</router-link>
                        <router-link to="" class="register-link">注册账号</router-link>
                    </div>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
import store from '@/vuex/store1';
import {mapMutations} from 'vuex';
import OwlLogin from './LoginOwl.vue';

export default {
    store,
    components: {
        OwlLogin
    },
    methods: {
        ...mapMutations(['openEyes', 'closeEyes'])
    }
}
</script>

<style lang="less">
    @mainColor: #3484c6;
    body {
        background: @mainColor;
        font-size: 30px !important
    }
    .login {
        padding: 40% 50px 50px;
    }
    .login-form {
        background: #fff;
        position: relative;
        border-radius: 10px;
    }
    .login-group {
        padding: 40px;
    }
    .login-item {
        width: 100%;
        height: 80px;
        line-height: 80px;
        text-indent: 20px;
        border-radius: 6px;
        border: 1px solid #ccc;/*no*/
    }
    .login-password {
        margin: 26px 0;
    }
    .login-submit {
        height: 80px;
        line-height: 80px;
        text-align: center;
        color: #fff;
        background: @mainColor;
        border-radius: 10px;
        margin: 40px 0 20px;
    }
    .register-link {
        float: right;
    }
</style>
