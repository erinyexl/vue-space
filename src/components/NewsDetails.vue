<template>
  <div>
    <header>{{$route.params.articleID}}</header>
    <article>
      <p>{{newsDetails.article}}</p>
    </article>
  </div>
</template>

<script>
  import store from '@/vuex/store';
  import {mapState, mapMutations} from 'vuex';
  import axios from 'axios';

  export default {
    name: 'newsDetails',
    store,
    beforeCreate(){
      axios({
        methods: 'get',
        url: '/api/news/newsDetails',
        data: {
          articleID: 1
        }
      })
        .then(function (res) {
          console.log(res.data);
          store.commit('undateNewsDetails',res.data);
        })
        .catch(function (err) {
          console.log(err);
        });
    },
    computed:{
      ...mapState(['newsDetails'])
    },
    methods:{
      ...mapMutations(['undateNewsDetails'])
    }
  }
</script>
