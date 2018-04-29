<template>
  <div id="tabbarContainer">
    <mt-tabbar v-model="selected" fixed @click="changeTabSel">
      <mt-tab-item id="home">
        <div><i class="iconfont i-home">&#xe619;</i></div>
      </mt-tab-item>
      <mt-tab-item id="weibo">
        <div><i class="iconfont i-wiebo">&#xe621;</i></div>
      </mt-tab-item>
      <mt-tab-item id="user">
        <div><i class="iconfont i-user">&#xe651;</i></div>
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
  import store from '@/vuex/store';
  import {mapState, mapMutations} from 'vuex';

  export default {
    name: 'Tabbar',
    store,
    computed:{
      selected: {
        get () {
          return this.$store.state.selected
        },
        set (value) {
          this.$store.commit('changeTabSel', value)
        }
      }
    },
    methods: {
      ...mapMutations(['changeTabSel'])
    }
  }
</script>

<style lang="less">
  .mint-tabbar.is-fixed {
    padding: 15px 0;
    border-top: 1px solid #999; /*no*/
  }

  .mint-tabbar > .mint-tab-item.is-selected {
    background-color: #fff;
    color: #26a2ff;
  }

  .mint-tab-item-label {
    i {
      font-size: 40px; /*px*/
    }
  }
</style>
