<template>
  <div class="sidebar" >
    <div class="logo">
      <div class="logoImg"></div>
      <!--<img src="../assets/img/bg_side_elleshop.png" alt="" class="logoImg" />-->
    </div>

    <ul class="tabUl">
      <li class="tab" @click.prevent="clickTab(0)" @click="clickMask">
        <span class="ladyIcon"></span>
        <span class="tabEng">LADY</span>
        <span class="tabTxt">女士</span>
      </li>
      <li class="tab" @click.prevent="clickTab(1)" @click="clickMask">
        <span class="manIcon"></span>
        <span class="tabEng">MAN</span>
        <span class="tabTxt">男士</span> 
      </li>
      <li class="tab bbnone" @click.prevent="clickTab(2)" @click="clickMask">
        <span class="lifeIcon"></span>
        <span class="tabEng">LIFE STYLE</span>
        <span class="tabTxt">生活</span> 
      </li>
    </ul>

    <div style="background: #e5e5e5;height: .2rem;"></div>

    <ul class="tabUl">
      <li class="tab">
        <router-link to="/classify?tab=1">
          <span class="brandIcon"></span>
          <span class="tabEng">BRAND</span>
          <span class="tabTxt">品牌</span>   
        </router-link>     
      </li>
      <li class="tab">
        <router-link to="/inspire">
          <span class="eventIcon"></span>
          <span class="tabEng">EVENT</span>
          <span class="tabTxt">活动</span>  
        </router-link>      
      </li>
    </ul>
    
  </div>
</template>

<style media="screen" scoped>
  .side .sidebar {
    transform: translate3D(0, 0, 0);
  }
  .sidebar {
    width: 7rem;
    height: 100%;
    position: fixed;
    left: 0;
    top: 0;
    transform: translate3D(-7.1rem, 0, 0);
    -webkit-transition: -webkit-transform .2s cubic-bezier(.4, .01, .165, .99);
    transition: transform .2s cubic-bezier(.4, .01, .165, .99), -webkit-transform .2s cubic-bezier(.4, .01, .165, .99);
    z-index: 2147483647;
    background-color: #fff;    
  }

  .logoImg{
    width: 3rem;
    height: 1rem;
    margin: .8rem auto;
    height: .6rem;
    background-image: url(../assets/img/bg_side_elleshop.png);
    background-size: cover;
  }
  
  .tabUl{
    margin-bottom: .2rem;
    font-size: .4rem;
    font-weight: bold;
  }

  .ladyIcon, .manIcon, .lifeIcon, .brandIcon, .eventIcon{
    display: inline-block;
    width: .8rem;
    height: .7rem;
    background-size: cover;
    vertical-align: middle;
    margin-left: .6rem;
  }

  .ladyIcon{
    background-image: url('../assets/img/sidebar/side_women@3x.png');
  }

  .manIcon{
    background-image: url('../assets/img/sidebar/side_man@3x.png');
  }

  .lifeIcon{
    background-image: url('../assets/img/sidebar/side_liftstyle@3x.png');
  }

  .brandIcon{
    background-image: url('../assets/img/sidebar/side_brand@3x.png');
  }

  .eventIcon{
    background-image: url('../assets/img/sidebar/side_event@3x.png');
  }

  .tabEng{
    margin-left: .3rem;
  }

  .tabTxt{
    margin-left: .2rem;
  }

  .tab{
    padding: .5rem .2rem;
    border-bottom: 1px solid #d7d7d5;
  }

  .bbnone{
    border-bottom: 0 none;
  }


</style>

<script lang="babel">
  import { TabContainer, TabContainerItem } from 'mint-ui'
  
  export default {
    props: {
      clickTab: {
        type: Function
      }
    },
    methods: {
      clickMask(){
        document.querySelector('.mask').click();
      }
    },
  }
</script>