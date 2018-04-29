<template>
  <div id="app">
    <router-view/>
    <router-view :name="selected"/>
  </div>
</template>

<script>
  import store from '@/vuex/store';
  import {mapState, mapMutations} from 'vuex';

  export default {
    name: 'app',
    store,
    data() {
      return {};
    },
    computed: {
      ...mapState(['selected'])
    }
  };
</script>

<style scoped>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
</style>
