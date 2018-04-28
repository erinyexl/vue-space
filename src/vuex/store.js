import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

const state = {
  isCloseEyes: false,
  newsLists: [],
  newsDetails: {}
}

const mutations = {
  wbLogin(state){
    axios({
      methods: 'get',
      url: 'http://www.test.com:3000/authorize'
      // url: '/api/oauth2/authorize?client_id=3828459437&response_type=code&redirect_uri=http://www.test.com/'
    })
      .then(function (res) {
        console.log(res.data);
      })
      .catch(function (err) {
        console.log(err);
      });
  },
  openEyes(state){
    state.isCloseEyes=false;
  },
  closeEyes(state){
    state.isCloseEyes=true;
  },
  updateNewsLists(state,data){
    state.newsLists = [...data];
  },
  undateNewsDetails(state,data){
    state.newsDetails = {...data[0]};
  }
}

export default new Vuex.Store({
  state,
  mutations
})
