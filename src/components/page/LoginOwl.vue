<template>
    <div id="owl-login" :class="{password: isCloseEyes}">
        <div class="eyes"></div>
        <div class="arm-up-right"></div>
        <div class="arm-up-left"></div>
        <div class="arm-down-left"></div>
        <div class="arm-down-right"></div>
    </div>
</template>

<script>
import store from '@/vuex/store';
import {mapState} from 'vuex';
export default {
    store,
    data(){
        return {

        }
    },
    computed:{
      ...mapState(['isCloseEyes']),
      // ...mapGetters(['count'])
    }
}
</script>

<style lang="less">
#owl-login {
    width: 232px;
    height: 184px;
    background-image: url(../../assets/face.png);
    background-size: contain;
    position: absolute;
    top: -164px;
    left: 50%;
    margin-left: -128px;
}
.eyes {
    width: 100%;
    height: 100%;
    background-image: url(../../assets/eyes.png);
    background-size: contain;
    opacity: 0;
    transition: 0.1s ease-out 0s;
}
.arm-up-right {
    width: 102px;
    height: 82px;
    background-image: url(../../assets/arm-up-right.png);
    background-size: contain;
    position: absolute;
    bottom: 22px;
    right: 10px;
    transform: translateX(120px) scale(.8);
    transform-origin: 0 80px;
    transition: background-position 0.3s ease-out, transform 0.3s ease-out, opacity 0s linear 0.3s;
    background-position: 0 50px;
    background-repeat: no-repeat;
    opacity: 0;
}
.arm-up-left {
    width: 104px;
    height: 82px;
    background-image: url(../../assets/arm-up-left.png);
    background-size: contain;
    position: absolute;
    bottom: 22px;
    left: -6px;
    transform: translateX(-68px) scale(.8);
    transform-origin: 0 80px;
    transition: background-position 0.3s ease-out, transform 0.3s ease-out, opacity 0s linear 0.3s;
    background-position: 0 50px;
    background-repeat: no-repeat;
    opacity: 0;
}
.arm-down-left {
    width: 86px;
    height: 50px;
    background-image: url(../../assets/arm-down-left.png);
    background-size: contain;
    position: absolute;
    bottom: 4px;
    left: -68px;
    transition: 0.3s ease-out;
}
.arm-down-right {
    width: 86px;
    height: 52px;
    background-image: url(../../assets/arm-down-right.png);
    background-size: contain;
    position: absolute;
    bottom: 2px;
    right: -80px;
    transition: 0.3s ease-out;
}

.password .eyes {
    opacity: 1;
    transition: 0.1s ease-out 0.2s
}

.password .arm-down-left {
    transform: translateX(80px) scale(0) translateY(-20px);
    opacity: 0;
}

.password .arm-up-left {
    transform: scale(1);
    background-position: 0 0;
    opacity: 1;
    transition: background-position 0.3s ease-out, transform 0.3s ease-out
}

.password .arm-down-right {
    transform: translateX(-64px) scale(0) translateY(-16px);
    opacity: 0;
}

.password .arm-up-right {
    transform: scale(1);
    background-position: 0 0;
    opacity: 1;
    transition: background-position 0.3s ease-out, transform 0.3s ease-out
}
</style>
