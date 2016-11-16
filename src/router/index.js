'use strict'

import Index from '../page/Index.vue'

import Shopcar from '../page/Shopcar.vue'
import Profile from '../page/Profile.vue'
import Personal from '../page/Personal.vue'
import Classify from '../page/Classify.vue'
import Inspire from '../page/Inspire.vue'
import InspireDetail from '../page/InspireDetail.vue'
import Address from '../page/Address.vue'
import AddressDetail from '../page/AddressDetail.vue'
import Invoice from '../page/Invoice.vue'
import InvoiceDetail from '../page/InvoiceDetail.vue'
import Collect from '../page/Collect.vue'
import Order from '../page/Order.vue'
import OrderDetail from '../page/OrderDetail.vue'
import Product from '../page/Product.vue'
import Login from '../page/Login.vue'
import Reg from '../page/Reg.vue'
import Findpwd from '../page/Findpwd.vue'
import Changepwd from '../page/Changepwd.vue'


// const Shopcar = () => System.import('../page/Shopcar.vue')
// const Profile = () => System.import('../page/Profile.vue')
// const Personal = () => System.import('../page/Personal.vue')
// const Classify = () => System.import('../page/Classify.vue')
// const Inspire = () => System.import('../page/Inspire.vue')
// const InspireDetail = () => System.import('../page/InspireDetail.vue')
// const Address = () => System.import('../page/Address.vue')
// const AddressDetail = () => System.import('../page/AddressDetail.vue')
// const Invoice = () => System.import('../page/Invoice.vue')
// const InvoiceDetail = () => System.import('../page/InvoiceDetail.vue')
// const Collect = () => System.import('../page/Collect.vue')
// const Order = () => System.import('../page/Order.vue')
// const OrderDetail = () => System.import('../page/OrderDetail.vue')
// const Product = () => System.import('../page/Product.vue')
// const Login = () => System.import('../page/Login.vue')
// const Reg = () => System.import('../page/Reg.vue')
// const Findpwd = () => System.import('../page/Findpwd.vue')
// const Changepwd = () => System.import('../page/Changepwd.vue')


const routes = [
  { name: '首页', path: '/', component: Index },
  { name: '登录', path: '/login', component: Login },
  { name: '注册', path: '/reg', component: Reg },
  { name: '找回密码', path: '/findpwd', component: Findpwd },
  { name: '修改密码', path: '/changepwd', component: Changepwd },
  { name: '个人中心', path: '/profile', component: Profile },
  { name: '个人资料', path: '/personal', component: Personal },
  { name: '购物车', path: '/shopcar', component: Shopcar },
  { name: '分类', path: '/classify', component: Classify },
  { name: '灵感', path: '/inspire', component: Inspire },
  { name: '灵感详情', path: '/inspire/:id', component: InspireDetail },
  { name: '商品', path: '/product/:id', component: Product },
  { name: '详情', path: '/detail', component: Shopcar },
  { name: '收藏', path: '/collect', component: Collect },
  { name: '订单', path: '/order', component: Order },
  { name: '订单', path: '/ordertail', component: OrderDetail },
  { name: '地址', path: '/address', component: Address },
  { name: '地址新增和修改', path: '/adddetail', component: AddressDetail },
  { name: '发票新增', path: '/invoice', component: Invoice },
  { name: '发票详情', path: '/invdetail', component: InvoiceDetail },
]


export default routes
