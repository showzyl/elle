import Vue from 'vue'
import VueRouter from 'vue-router'
import ls from 'store2'
import cookies from 'js-cookie'

import index from '../pages/index.vue'

Vue.use(VueRouter)

const scrollBehavior = to => {
    const position = {}
    if (to.hash) {
        position.selector = to.hash
    }
    if (to.matched.some(mm => mm.meta.scrollToTop)) {
        position.x = 0
        position.y = 0
    }
    return position
}

const guardRoute = (to, from, next) => {
    var token = ls.get('token') && cookies.get('user')
    if (!token) {
        next('/')
    } else {
        next()
    }
}

import Login from '../pages/Login.vue'
import Reg from '../pages/Reg.vue'

let routes = [
    { name:'index', path: '/', component: index },
    { name:'login', path: '/login', component: Login },
    { name:'reg', path: '/reg', component: Reg }
]

const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    scrollBehavior,
    routes: routes
})



export default router
