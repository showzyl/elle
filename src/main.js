import Vue from 'vue'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import App from './App.vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'

// 路由
import routes from './router/index.js'

Vue.use(VueRouter)
Vue.use(MintUI)
Vue.use(Vuex)

const router = new VueRouter({
  routes // （缩写）相当于 routes: routes
})


//window.Vue = new Vue

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
