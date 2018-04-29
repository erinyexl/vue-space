<template>
  <div>
    <article class="list-article" v-for="item in weiboLists">
      <header class="user-wrap">
        <div class="user-author">
          <div class="user-avator"><img :src="item.user.profile_image_url" alt=""></div>
          <div class="user-verified" v-if="item.user.verified"><i class="iconfont i-vip">&#xe613;</i></div>
        </div>
        <div class="user-info">
          <p class="user-pub-name">{{item.user.screen_name}}</p>
          <span class="user-pub-time"></span>
          <span class="user-pub-from" v-html="'来自 '+item.source"></span>
        </div>
        <div class="user-arrow">
          <div><i class="iconfont i-arrow-down">&#xe600;</i></div>
        </div>
      </header>
      <section class="detail-wrap">
        <p class="detail-text">{{item.text}}</p>
        <div class="detail-images" v-if="item.pic_urls.length">
          <div class="detail-item" v-for="pic in item.pic_urls"
               :style="{backgroundImage:'url(' + pic.thumbnail_pic + ')'}"></div>
        </div>
      </section>
      <footer class="action-wrap">
        <div><i class="iconfont i-reposts">&#xe609;</i>{{item.reposts_count}}</div>
        <div><i class="iconfont i-comments">&#xe608;</i>{{item.comments_count}}</div>
        <div><i class="iconfont i-attitudes">&#xe70d;</i>{{item.attitudes_count}}</div>
        <div><i class="iconfont i-share">&#xe612;</i></div>
      </footer>
    </article>
  </div>
</template>

<script>
  import store from '@/vuex/store';
  import {mapState, mapMutations} from 'vuex';
  import axios from 'axios';

  export default {
    name: 'weiboLists',
    store,
    beforeCreate() {
      axios({
        method: 'GET',
//        url: '/api/home_timeline',
        url: './static/data-weibo.json',
        params: {
          access_token: '2.00kztUyBlLpFLE72447ed797QGTYZC',
          count: 1
        }
      })
        .then(function (res) {
          store.commit('updateWeiboLists', res.data);
        })
        .catch(function (err) {
          console.log(err);
        });
    },
    computed: {
      ...mapState(['weiboLists'])
    },
    methods: {
      ...mapMutations(['updateWeiboLists'])
    }
  }
</script>

<style lang="less">
  @minor-color: #999;

  body {
    background: #eee;
    color: #333;
  }

  .list-article {
    margin: 30px 0;
    padding: 0 30px;
    background: #fff;
    font-size: 18px; /*px*/
  }

  .user-wrap {
    display: flex;
    align-items: center;
    padding-top: 30px;
  }

  .user-author {
    flex: 1;
    margin-right: 20px;
    position: relative;
  }

  .user-avator {
    img {
      width: 90px;
      height: 90px;
      border-radius: 50px;
    }
  }

  .user-verified {
    position: absolute;
    right: 0;
    bottom: -16px;
    .i-vip {
      color: #ff9712;
      font-size: 32px; /*px*/
    }
  }

  .user-info {
    flex: 9;
  }

  .user-pub-name {
    font-size: 30px; /*px*/
    font-weight: bold;
  }

  .user-pub-tine {
    font-size: 18px; /*px*/
    line-height: 30px;
    color: @minor-color;
  }

  .user-pub-from {
    margin-left: 10px;
    a {
      color: @minor-color;
    }
  }

  .user-arrow {
    position: relative;
    div {
      padding-bottom: 20px;
    }
    .i-arrow-down {
      color: @minor-color;
      font-size: 28px; /*px*/
    }
  }

  .detail-wrap {
    margin: 30px 0;
  }

  .detail-text {
    font-size: 32px; /*px*/
    line-height: 40px; /*px*/
    word-break: break-all;
  }

  .detail-images {
    display: flex;
    flex-flow: row wrap;
    padding-top: 20px;
    margin: -3px; /*no*/
  }

  .detail-item {
    flex: 0 0 33%;
    padding-top: 30%;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-clip: padding-box;
    box-sizing: border-box;
    border: 3px solid transparent; /*no*/
  }

  .action-wrap {
    padding: 30px 0;
    display: flex;
    justify-content: space-between;
    font-size: 32px; /*px*/
    color: @minor-color;
    border-top: 1px solid #eee; /*no*/
    i {
      font-size: 36px; /*px*/
      padding-right: 10px;
    }
  }
</style>
