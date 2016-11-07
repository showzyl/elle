'use strict'

const Bar = { template: '<div><router-link to="/foo">Go to Foo</router-link></div>' }

import Index from '../page/index.vue'
import Login from '../page/Login.vue'
import Reg from '../page/Reg.vue'
import Shopcar from '../page/Shopcar.vue'
import Profile from '../page/Profile.vue'
import Classify from '../page/classify.vue'


// address add remove update

const routes = [
  { name: '首页', path: '/', component: Index },
  { name: '登录', path: '/login', component: Login },
  { name: '注册', path: '/reg', component: Reg },
  { name: '个人中心', path: '/profile', component: Profile },
  { name: '购物车', path: '/shopcar', component: Shopcar },
  { name: '分类', path: '/classify', component: Classify },
  { name: '灵感', path: '/inspire', component: Shopcar },
  { name: '商品', path: '/product', component: Shopcar },
  { name: '详情', path: '/detail', component: Shopcar },
  { name: '收藏', path: '/collect', component: Shopcar }
]

export default routes
