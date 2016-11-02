import Vue from 'vue'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import App from './App.vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'

Vue.use(VueRouter)
Vue.use(MintUI)
Vue.use(Vuex)

const Bar = { template: '<div><router-link to="/foo">Go to Foo</router-link></div>' }

import Index from './page/index.vue'
import Foo from './components/Foo.vue'

const routes = [
  { path: '/', component: Index },
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar }
]

const router = new VueRouter({
  routes // （缩写）相当于 routes: routes
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
