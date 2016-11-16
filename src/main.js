import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
// import vueResource from 'vue-resource'

import Vuex from 'vuex'
import store from './store/'

// 路由
import routes from './router/index.js'

Vue.use(VueRouter)
Vue.use(Vuex)
//Vue.use(vueResource)
// console.log(__dirname)


window.q = {
  interfaceHost: 'http://106.75.17.211:6603/'
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
