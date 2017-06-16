'use strict'

import Index from '../page/Index.vue'

const Shopcar = () => System.import('../page/Shopcar.vue')
const ConfirmOrder = () => System.import('../page/ConfirmOrder.vue')
const Pay = () => System.import('../page/Pay.vue')
const Profile = () => System.import('../page/Profile.vue')
const Personal = () => System.import('../page/Personal.vue')
const Classify = () => System.import('../page/Classify.vue')
const Inspire = () => System.import('../page/Inspire.vue')
const InspireDetail = () => System.import('../page/InspireDetail.vue')
const Address = () => System.import('../page/Address.vue')
const AddressDetail = () => System.import('../page/AddressDetail.vue')
const Invoice = () => System.import('../page/Invoice.vue')
const InvoiceDetail = () => System.import('../page/InvoiceDetail.vue')
const Collect = () => System.import('../page/Collect.vue')
const Order = () => System.import('../page/Order.vue')
const Product = () => System.import('../page/Product.vue')
const Filter = () => System.import('../page/Filter.vue')
const Brand = () => System.import('../page/Brand.vue')
const Login = () => System.import('../page/Login.vue')
const TelReg = () => System.import('../page/TelReg.vue')
const Findpwd = () => System.import('../page/Findpwd.vue')
const Changepwd = () => System.import('../page/Changepwd.vue')
const History = () => System.import('../page/History.vue')
const Coupon = () => System.import('../page/Coupon.vue')
const Qa = () => System.import('../page/Qa.vue')
const Vip = () => System.import('../page/Vip.vue')
const ActivityComment = () => System.import('../page/activity/Comment.vue')
const ActivityCommentVideo = () => System.import('../page/activity/CommentVideo.vue')
const Ct = () => System.import('../page/activity/CommentTest.vue')
const ImgTxtList = () => System.import('../page/hybird/ImgTxtList.vue')
const hybirdBoy = () => System.import('../page/hybird/boy.vue')
// const hybirdGirl = () => System.import('../page/hybird/girl.vue')
const Test = () => System.import('../page/Test.vue')


const routes = [
  { name: '首页', path: '/', component: Index },
  { name: '登录', path: '/login', component: Login },
  { name: '注册', path: '/reg', component: TelReg },
  { name: '找回密码', path: '/findpwd', component: Findpwd },
  { name: '修改密码', path: '/changepwd', component: Changepwd },
  { name: '个人中心', path: '/profile', component: Profile },
  { name: '个人资料', path: '/personal', component: Personal },
  { name: '购物车', path: '/shopcar', component: Shopcar },
  { name: '确认订单', path: '/confirmorder', component: ConfirmOrder },
  { name: '支付', path: '/pay', component: Pay },
  { name: '分类', path: '/classify', component: Classify },
  { name: '灵感', path: '/inspire', component: Inspire },
  { name: '灵感详情', path: '/inspire/:id', component: InspireDetail },
  { name: '商品详情', path: '/product/:id', component: Product },
  { name: '排序和筛选', path: '/filter', component: Filter },
  { name: '品牌详情', path: '/brand/:id', component: Brand },
  { name: '收藏', path: '/collect', component: Collect },
  { name: '订单', path: '/order', component: Order },
  { name: '地址', path: '/address', component: Address },
  { name: '地址新增和修改', path: '/adddetail', component: AddressDetail },
  { name: '发票新增', path: '/invoice', component: Invoice },
  { name: '发票详情', path: '/invdetail', component: InvoiceDetail },
  { name: '历史记录', path: '/history', component: History },
  { name: '优惠券', path: '/coupon', component: Coupon },
  { name: 'Vip', path: '/vip', component: Vip },
  { name: 'ActivityComment', path: '/activity/comment', component: ActivityComment },
  { name: 'ActivityCommentVideo', path: '/activity/video', component: ActivityCommentVideo },
  { name: 'Ct', path: '/activity/ct', component: Ct },
  { name: 'hybird图文混排', path: '/hybird/imglist', component: ImgTxtList },
  { name: 'hybird boy', path: '/hybird/boy', component: hybirdBoy },
  // { name: 'hybird girl', path: '/hybird/girl', component: hybirdGirl },
  { name: 'QA', path: '/qa', component: Qa },
  { name: '测试', path: '/test', component: Test },
]


export default routes
