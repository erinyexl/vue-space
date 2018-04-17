import Vue from 'vue'
import Router from 'vue-router'
// import Tabbar from '@/components/page/Tabbar'
import Login from '@/components/page/Login'
import WbLists from '@/components/page/WbLists'

Vue.use(Router)

export default new Router({
    mode:"history",
    routes: [
        {
            path: '/',
            name: 'Login',
            component: WbLists
        }
    ]
})
