'use strict'

const Bar = { template: '<div><router-link to="/foo">Go to Foo</router-link></div>' }
import Foo from '../components/Foo.vue'

import Index from '../page/index.vue'
import Login from '../page/Login.vue'
import Reg from '../page/Reg.vue'
import Shopcar from '../page/Shopcar.vue'
import Profile from '../page/Profile.vue'

// address add remove update

const routes = [
  { name: '首页', path: '/', component: Index },
  { name: '登录', path: '/login', component: Login },
  { name: '注册', path: '/reg', component: Reg },
  { name: '个人中心', path: '/profile', component: Profile },
  { name: '购物车', path: '/shopcar', component: Shopcar }
]

export default routes
