<template>

<div class="footBar">
  <ul class="footBarItems">

    <li class="footBarItem" :class="[pageName == 'index' ? 'on' : '']">
      <router-link to="/">
        <i class="iconHome"/></i>
        <h3 class="footBarTxt">首页</h3>
      </router-link>
    </li>

    <li class="footBarItem" :class="[pageName == 'classify' ? 'on' : '']">
       <router-link to="/classify?active0=tab0&active1=tab0&tab=category">
        <i class="iconCatalogue"/></i>
        <h3 class="footBarTxt">分类</h3>
      </router-link>
    </li>

    <li class="footBarItem" :class="[pageName == 'inspire' ? 'on' : '']">
      <router-link to="/inspire">
        <i class="iconLook"/></i>
        <h3 class="footBarTxt">灵感</h3>
      </router-link>
    </li>

    <li class="footBarItem shopcart none" :class="[pageName == 'shopcar' ? 'on' : '']">
      <router-link to="/shopcar">
        <i class="iconShopinglist"/></i>
        <h3 class="footBarTxt">购物车</h3>
      </router-link>
      <span class="shopcartNumber" v-show="shopcartNumber">{{shopcartNumber}}</span>
    </li>

    <li class="footBarItem none" :class="[pageName == 'profile' ? 'on' : '']">
      <router-link to="/profile">
        <i class="iconProfile"/></i>
        <h3 class="footBarTxt">我的</h3>
      </router-link>
    </li>

  </ul>
</div>

</template>

<style media="screen" scoped>

  .footBar{
    position: fixed;
    left: 0;
    bottom: 0;
    height: 1.2rem;
    width: 100%;
    background: #fff;
    border-top: 1px solid #d7d7d5;
    z-index: 3;
    /*line-height: 1rem;*/
  }

  .footBarItems{
    display: -webkit-box;
    padding: .1rem .4rem;
    text-align: center;
  }

  .footBarItem a{
    display: block;
    color: #9c9c9b;
  }

  .footBarItems .on a{
    color: #000;
  }

  .footBarItem{
    -webkit-box-flex: 1;
  }

  /*.footBarHref{
    display: block;
  }*/

  .footBarIcon{
    width: 0.6rem;
    height: 0.6rem;
  }

  .footBarTxt{
    font-size: 0.3rem;
    margin: 0;
  }

  .iconHome, .iconCatalogue, .iconLook, .iconShopinglist, .iconProfile{
    display: inline-block;
    width: 20px;
    height: 17px;
    background-size: cover;
  }

  .iconHome{
    background-image: url(../assets/img/footer/tabbar_home@3x.png);
  }

  .iconCatalogue{
    height: 14px;
    background-image: url(../assets/img/footer/tabbar_category@3x.png);
    margin-top: 3px;
  }

  .iconLook{
    width: 20px;
    height: 17px;
    background-image: url(../assets/img/footer/tabbar_look@3x.png);
  }

  .iconShopinglist{
    width: .7rem;
    background-image: url(../assets/img/footer/tabbar_shop@3x.png);
  }

  .iconProfile{
    background-image: url(../assets/img/footer/tabbar_mine@3x.png);
  }

  .footBarItems .on .iconHome{
     background-image: url(../assets/img/footer/tabbar_home_selected@3x.png);
  }

  .footBarItems .on .iconCatalogue{
     background-image: url(../assets/img/footer/tabbar_category_selected@3x.png);
  }

  .footBarItems .on .iconLook{
     background-image: url(../assets/img/footer/tabbar_look_selected@3x.png);
  }

  .footBarItems .on .iconShopinglist{
     background-image: url(../assets/img/footer/tabbar_shop_selected@3x.png);
  }

  .footBarItems .on .iconProfile{
     background-image: url(../assets/img/footer/tabbar_mine_selected@3x.png);
  }

  .shopcart{
    position: relative;

  }

  .shopcartNumber{
    position: absolute;
    top: -10px;
    right: 12px;
    width: .5rem;
    height: .5rem;
    line-height: .5rem;
    background-color: red;
    color: #ffffff;
    border-radius: 50%;
  }

</style>

<script lang="babel">
import core from '../assets/lib/q.core.js'
import store from '../assets/lib/q.store.js'

export default {
  props: {
    pageName: {
      type: String,
      default: 'index'
    }
  },
  data(){
    return {
      shopcartNumber: null
    }
  },
  created(){
    const me = this;

    setTimeout(() => {
      me.shopcartNumber = store.get('shopcartNumber');
    }, 1000)

  },
  components: {

  },
  computed: {

  },
  methods: {

  },
  mounted() {

  },
  watch: {

  }
}
</script>
