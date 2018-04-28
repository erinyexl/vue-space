<template>
  <div id="newsLists">
    <ul>
        <li v-for="item in newsLists">
          <router-link :to="{name:'news-details',params:{articleID:item.articleID}}">
            <h3>{{item.title}}</h3>
          </router-link>
        </li>
    </ul>
  </div>
</template>

<script>
  import store from '@/vuex/store';
  import {mapState, mapMutations} from 'vuex';
  import axios from 'axios';

  export default {
    name: 'newsLists',
    store,
    data(){
      return {}
    },
    created(){
      axios({
        methods: 'get',
        url: '/api/news'
      })
        .then(function (res) {
          store.commit('updateNewsLists',res.data)
        })
        .catch(function (err) {
          console.log(err);
        });
    },
    computed:{
      ...mapState(['newsLists'])
    },
    methods:{
      ...mapMutations(['updateNewsLists'])
    }
  }
</script>

<style lang="less">

</style>
