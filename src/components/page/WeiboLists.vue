<template>
  <mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore">
    <weibo-item class="weibo-container"/>
  </mt-loadmore>
</template>

<script>
  import store from '@/vuex/store';
  import {mapMutations} from 'vuex';
  import weiboItem from './WeiboItem.vue';

  export default {
    name: '',
    data(){
      return {
        allLoaded: false,
        page: 1
      }
    },
    store,
    created() {
      this.$store.commit('axiosWeiboLists',this.page);
    },
    components: {
      'weibo-item': weiboItem
    },
    methods: {
      ...mapMutations(['axiosWeiboLists']),
      loadTop() {
        // 有新数据再调接口
        // this.$store.commit('axiosWeiboLists',this.page);
        this.$refs.loadmore.onTopLoaded();
      },
      loadBottom() {
        this.page++;
        this.$store.commit('axiosWeiboLists',this.page);
        this.$refs.loadmore.onBottomLoaded();
        // 若数据已全部获取完毕
        // this.allLoaded = true;
      }
    }
  }
</script>

<style lang="less">
  .weibo-container {
    padding-bottom: 80px;
  }
</style>
