'use strict'

const Bar = { template: '<div><router-link to="/foo">Go to Foo</router-link></div>' }

import Index from '../page/index.vue'
import Login from '../page/Login.vue'
import Reg from '../page/Reg.vue'
import Foo from '../components/Foo.vue'

// address add remove update 

const routes = [
  { name: '首页', path: '/', component: Index },
  { name: 'foo', path: '/foo', component: Foo },
  { name: 'bar', path: '/bar', component: Bar },
  { name: '登录', path: '/login', component: Login },
  { name: '注册', path: '/reg', component: Reg },
  { name: '个人中心', path: '/profile', component: Reg },
  { name: '购物车', path: '/shopcar', component: Reg }
]

export default routes
