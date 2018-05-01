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
  // 请求微博授权
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
  // 请求微博列表
  axiosWeiboLists(state,page=0){
    axios({
      method: 'GET',
      url: '/api/home_timeline',
//        url: './static/data-weibo.json',
      params: {
        access_token: '2.00kztUyBlLpFLE72447ed797QGTYZC',
        count: 5,
        page: parseInt(page)
      }
    })
      .then(function (res) {
        state.weiboLists = res.data.statuses;
      })
      .catch(function (thrown) {

      });
  },
  openEyes(state){
    state.isCloseEyes=false;
  },
  closeEyes(state){
    state.isCloseEyes=true;
  },
  changeTabSel(state,data){
    state.selected = data;
  },
  updateNewsLists(state,data){
    state.newsLists = data;
  },
  undateNewsDetails(state,data){
    state.newsDetails = {...data[0]};
  }
}

export default new Vuex.Store({
  state,
  mutations
})
