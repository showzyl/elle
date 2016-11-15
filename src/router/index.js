'use strict'

import Index from '../page/Index.vue'

const Shopcar = resolve => require(['../page/Shopcar.vue'], resolve);
const Profile = resolve => require(['../page/Profile.vue'], resolve);
const Classify = resolve => require(['../page/Classify.vue'], resolve);
const Inspire = resolve => require(['../page/Inspire.vue'], resolve);
const InspireDetail = resolve => require(['../page/InspireDetail.vue'], resolve);
const Address = resolve => require(['../page/Address.vue'], resolve);
const AddressDetail = resolve => require(['../page/AddressDetail.vue'], resolve);
const Invoice = resolve => require(['../page/Invoice.vue'], resolve);
const InvoiceDetail = resolve => require(['../page/InvoiceDetail.vue'], resolve);
const Personal = resolve => require(['../page/Personal.vue'], resolve);
const Collect = resolve => require(['../page/Collect.vue'], resolve);
const Order = resolve => require(['../page/Order.vue'], resolve);
const OrderDetail = resolve => require(['../page/OrderDetail.vue'], resolve);
const Product = resolve => require(['../page/Product.vue'], resolve);
const Login = resolve => require(['../page/Login.vue'], resolve);
const Reg = resolve => require(['../page/Reg.vue'], resolve);
const Findpwd = resolve => require(['../page/Findpwd.vue'], resolve);
const Changepwd = resolve => require(['../page/Changepwd.vue'], resolve);

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
