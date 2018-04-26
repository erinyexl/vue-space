<template>
  <div class="hello">
    <h1>{{count}}</h1>
    <button @click='add'>+</button>
    <button @click='reduce'>-</button>
    <button @click='addAction'>Action+</button>
    <button @click='reduceAction'>Action-</button>
  </div>
</template>

<script>
import store from '@/vuex/store';
import {mapState, mapMutations, mapGetters, mapActions} from 'vuex';

import axios from 'axios';

export default {
  name: 'HelloWorld',
  store,
  data () {
    return {}
  },
  created:function (){
           // axios({
           //  methods:'get',
           //  url:'/api/2/statuses/public_timeline.json',
           //  data:{
           //    appkey:'3828459437',
           //   access_token:'2.00kztUyBlLpFLE72447ed797QGTYZC',
           //   count:10
           // }
           // })
   },
  computed:{
    ...mapState(['count']),
    // ...mapGetters(['count'])
  },
  methods:{
    ...mapMutations(['add','reduce']),
    ...mapActions(['addAction','reduceAction'])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

</style>
