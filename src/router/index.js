import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/page/Login'
import NewsLists from '@/components/NewsLists'
import NewsDetails from '@/components/NewsDetails'
import WeiboLists from '@/components/page/WeiboLists'
import Tabbar from '@/components/page/Tabbar'
import UserCenter from '@/components/UserCenter'

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: '/',
      name: '/',
      components: {
        default: Tabbar,
        home: NewsLists,
        weibo: WeiboLists,
        user: UserCenter
      }
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/news-details',
      name: 'news-details',
      component: NewsDetails
    }
  ]
})
