import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/page/Login'
import NewsLists from '@/components/NewsLists'
import NewsDetails from '@/components/NewsDetails'
import WbLists from '@/components/page/WbLists'

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: '/',
      name: '/',
      components: {
        default: WbLists
      }
    },
    {
      path: '/news-details',
      name: 'news-details',
      component: NewsDetails
    }
  ]
})
