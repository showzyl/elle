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
       <router-link to="/classify">
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

    <li class="footBarItem " :class="[pageName == 'shopcar' ? 'on' : '']">
      <router-link to="/shopcar">
        <i class="iconShopinglist"/></i>
        <h3 class="footBarTxt">购物车</h3>
      </router-link>
    </li>

    <li class="footBarItem " :class="[pageName == 'profile' ? 'on' : '']">
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
    /*line-height: 1rem;*/
  }

  .footBarItems{
    display: -webkit-box;
    padding: .2rem .4rem;
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
    font-size: 0.35rem;
    margin: 0;
  }

  .iconHome, .iconCatalogue, .iconLook, .iconShopinglist, .iconProfile{
    display: inline-block;
    width: 0.5rem;
    height: 0.5rem;
    background-size: cover;
  }

  .iconHome{
    background-image: url(../assets/img/footer/tabbar_home@3x.png);
  }

  .iconCatalogue{
    background-image: url(../assets/img/footer/tabbar_category@3x.png);
  }

  .iconLook{
    width: 0.7rem;
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
  created(){
    //console.log(core);
    //core.string.get_url_param('l')
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
