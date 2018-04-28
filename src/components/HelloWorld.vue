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
import store from '@/vuex/store-test';
import {mapState, mapMutations, mapGetters, mapActions} from 'vuex';

import axios from 'axios';

export default {
  name: 'HelloWorld',
  store,
  data () {
    return {}
  },
  created:function (){},
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
