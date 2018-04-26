import Vue from 'vue'
import Router from 'vue-router'
import Tabbar from '@/components/page/Tabbar'
import Login from '@/components/page/Login'
import WbLists from '@/components/page/WbLists'
import Hello from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
    mode:"history",
    routes: [
        {
            path: '/',
            name: 'Tabbar',
            components: {
            	default: Tabbar,
            	weibo: WbLists
            }
        }
    ]
})
