import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

const state = {
  selected: "weibo",
  isCloseEyes: false,
  newsLists: [],
  newsDetails: {},
  weiboLists: []
}

const mutations = {
  changeTabSel(state,data){
    state.selected = data;
  },
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
  },
  updateWeiboLists(state,data){
    state.weiboLists = [...data.statuses];
  }
}

export default new Vuex.Store({
  state,
  mutations
})
