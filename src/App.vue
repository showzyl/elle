<template>
  <div id="app">
    <div class="log"></div>
    <transition>
      <router-view></router-view>
    </transition>
    <div class="mask none" @click='toggleMask'></div>
    <div class="iphone-tip none" id="iphoneTip" @click="toggleTip"></div>
  </div>
</template>

<script>
  import './assets/css/reset.css'
  import util from './assets/lib/q.util.js'
//  import logo from './assets/img/logo.png'

  export default {
    name: 'app',
    data () {
      return {}
    },
    created(){
//      document.querySelector('#icon').setAttribute('href', logo);
    },
    methods: {
      toggleMask(e){
        if (e.target.className === 'mask') {
          document.body.className = '';
          document.querySelector('.mask').className += ' none';
        }
      },
      toggleTip(e){
        const el = util.getEl('#iphoneTip');
        if (el.className === 'iphone-tip') {
          el.className = 'iphone-tip none';
        }
      }
    }
  }
</script>

<style>
  html,
  body {
    height: 100%;
    /*font-family: STHeiti,Helvetica Neue;*/
    font-family: "NeoSansStd Light" , "PingFang SC" , "Microsoft YaHei" , "微软雅黑";
  }

  #app {
    height: inherit;
  }

  .mask {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: white;
    opacity: 0;
    z-index: 2147483646;
  }

  .mask_black {
    background-color: black;
  }

  .btn {
    width: 100%;
    padding: .5rem 0;
    text-align: center;
    background-color: #000000;
    color: #fff;
    font-size: .45rem;
  }

  .btn a {
    color: #fff;
  }

  /* black checkbox start */
  .addBottom .mint-checklist-title {
    color: #888;
    display: block;
    font-size: 0;
    margin: 0;
  }

  .addBottom .mint-cell::before, .addBottom .mint-cell::after {
    border: 0 none;
  }

  .addBottom .mint-checkbox-input:checked + .mint-checkbox-core {
    background-color: #000000;
    border-color: #000000;
  }

  .addBottom .mint-checkbox-core {
    width: 15px;
    height: 15px;
  }

  .addBottom .mint-checkbox-core::after {
    top: 1px;
    left: 4px;
  }

  .addBottom .mint-checklist-label {
    /*padding: .2rem 0;*/
    margin: .2rem 0 0 0;
    float: left;
  }

  /* black checkbox end */

  /* border start */
  .bbgray {
    border-bottom: 1px solid #d7d7d5;
  }

  .bbblack {
    border-bottom: 1px solid;
  }

  /* border end */

  /* icon start */
  .iconAdd {
    display: inline-block;
    width: .28rem;
    height: .4rem;
    margin: .2rem 0 0;
    background-size: cover;
    background-image: url('./assets/img/address/address@3x.png');
  }

  .collectIconGray {
    display: inline-block;
    width: 18px;
    height: 17px;
    margin: .2rem 0 0;
    background-size: cover;
    background-image: url('./assets/img/profile/icon_fucus@3x.png');
  }

  .iconRight {
    display: inline-block;
    width: .3rem;
    height: .3rem;
    background-size: cover;
    background-image: url('./assets/img/profile/mine_right@3x.png');
  }

  .closebtnBlack {
    position: absolute;
    margin: .3rem 0 0 .5rem;
    background-size: cover;
    width: 20px;
    height: 20px;
    background-image: url(./assets/img/recomend/close01@3x.png);
  }

  /* icon end*/

  /* order start */

  .titleBox {
    overflow: hidden;
    height: .6rem;
    line-height: .6rem;
    padding: 0 0 .2rem 0;
  }

  .titleBox .orderNum {
    float: left;
    font-size: .3rem;
    color: #9c9c9c;
  }

  .titleBox .orderStatus {
    float: right;
    font-size: .45rem;
  }

  .orderMain {
    overflow: hidden;
    padding: .3rem 0;
    border: 1px solid;
    border-left: 0 none;
    border-right: 0 none;
  }

  .orderMain .imgBox {
    width: 25%;
    float: left;
  }

  .orderMain .contentBox {
    float: left;
    width: 68%;
    margin: 0 0 0 .3rem;
  }

  .contentBox p {
    font-size: .35rem;
    padding: .2rem 0;
    color: #9c9c9c;
  }

  .contentBox p.price {
    font-size: .5rem;
    font-weight: bold;
    color: #000000;
  }

  .contentBox .spec {
    padding: .3rem 0;
  }

  /* order end */

  /* loadmore start */

  .mint-tab-container-item {
    margin-bottom: 60px;
  }

  /* loadmore end */

  .product .mint-swipe-indicator.is-active {
    opacity: 1;
    background: #000000;
  }

  /* filterBrand start */
  .filterBrand .mint-indexlist-nav {
    background-color: transparent;
    border-left: 0 none;
  }

  .mint-indexlist-content {
    margin-right: 0 !important;
  }

  .filterBrand .mint-cell::before {
    border-bottom: 0 none;
  }

  .filterBrand .mint-cell::after {
    color: #fff;
  }

  .filterBrand .mint-cell-wrapper {
    font-size: .4rem;
  }

  .filterBrand .checked .mint-cell-value, .filterSize .checked .mint-cell-value, .filterColor .checked .mint-cell-value {
    width: 20px;
    height: 15px;
    background-image: url(./assets/img/recomend/headtick@3x.png);
    margin-right: 40px;
    background-size: cover;
  }

  .iphone-tip {
    background: url(http://www.elleshop.com.cn/catalog/view/theme/mobile/image/iphone-tip.png);
    background-size: 100% 100%;
    height: 100%;
    width: 100%;
    z-index: 2147483647;
    position: fixed;
    top: 0;
  }

  .back-to-top {
    position: fixed;
    bottom: 2.1rem;
    right: .4rem;
    cursor: pointer;
    display: inline-block;
    width: 1rem;
    height: 1rem;
    background-image: url(./assets/img/back2top.png);
    background-repeat: no-repeat;
    background-size: cover;
  }

  /* filterBrand end */

  .classify,
  .inspire,
  .login
  {
    margin-top: 2.01rem;
  }


  .product,
  .brand,
  .inspireDetail,
  .filter,
  .profile
  {
    margin-bottom: 2.01rem;
  }




</style>