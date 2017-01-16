import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import vueResource from 'vue-resource'

import Vuex from 'vuex'
import store from './store/'

// 路由
import routes from './router/index.js'

Vue.use(VueRouter)
Vue.use(Vuex)
Vue.use(vueResource)


var interfaceHost = location.hostname === 'm.elleshop.com.cn' ? '//api2.elleshop.com.cn/' : '//106.75.17.211:6603/'
// var interfaceHost = location.hostname === '//api.elleshop.com.cn/' ? '' : '//beta.elleshop.com.cn/'
// //106.75.17.211:6603/

window.q = {
  interfaceHost: interfaceHost
}


const router = new VueRouter({
  routes // （缩写）相当于 routes: routes
})


//window.Vue = new Vue

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
