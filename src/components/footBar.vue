<template>

<div class="footBar">
  <ul class="footBarItems">

    <li class="footBarItem" v-bind:class="[pageName == 'index' ? 'on' : '']">
      <a href="/" class="footBarHref">
        <i class="iconHome"/></i>
        <h3 class="footBarTxt">首页</h3>
      </a>
    </li>

    <li class="footBarItem" v-bind:class="[pageName == 'classify' ? 'on' : '']">
      <!--<a href="/#/classify" class="footBarHref">
        <i class="iconCatalogue"/></i>
        <h3 class="footBarTxt">分类</h3>
      </a>-->
       <router-link to="/classify">
        <i class="iconProfile"/></i>
        <h3 class="footBarTxt">分类</h3>
      </router-link>
    </li>

    <li class="footBarItem">
      <a href="#" class="footBarHref">
        <i class="iconLook"/></i>
        <h3 class="footBarTxt">Look</h3>
      </a>
    </li>

    <li class="footBarItem">
      <a href="#" class="footBarHref">
        <i class="iconShopinglist"/></i>
        <h3 class="footBarTxt">购物车</h3>
      </a>
    </li>

    <li class="footBarItem" v-bind:class="[pageName == 'profile' ? 'on' : '']">
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
    /*line-height: 1rem;*/
  }

  .footBarItems{
    display: -webkit-box;
    padding: .2rem .4rem;
    text-align: center;
  }

  .footBarItem a{
    display: block;
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
    font-size: 0.1rem;
    margin: 0;
  }

  .iconHome, .iconCatalogue, .iconLook, .iconShopinglist, .iconProfile{
    background: url(../assets/img/foot_bar_icons.png) no-repeat;
    display: inline-block;
    width: 0.5rem;
    height: 0.5rem;
  }

  .iconHome{
    background-size: .7rem;
  }

  .iconCatalogue{
    background-size: .7rem;
    background-position: 0 -.7rem;
  }

  .iconLook{
    background-size: .7rem;
    background-position: 0 -1.3rem;
  }

  .iconShopinglist{
    background-size: .5rem;
    background-position: 0 -1.4rem;
  }

  .iconProfile{
    background-size: .6rem;
    background-position: 0 -2.5rem;
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
