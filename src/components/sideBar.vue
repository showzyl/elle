<template>
  <div class="sidebar" >
    <div class="logo">
      <img src="" alt="" class="logoImg" />
    </div>

    <ul class="tabUl">
      <li class="tab">
        <a href="/">
          <span class="ladyIcon"></span>
          <span class="tabEng">LADY</span>
          <span class="tabTxt">女士</span>
        </a>
      </li>
      <li class="tab">
        <a href="/?tab=1">
          <span class="manIcon"></span>
          <span class="tabEng">MAN</span>
          <span class="tabTxt">男士</span> 
        </a> 
      </li>
      <li class="tab bbnone">
        <a href="/?tab=2">
          <span class="lifeIcon"></span>
          <span class="tabEng">LIFE STYLE</span>
          <span class="tabTxt">生活</span> 
        </a>     
      </li>
    </ul>

    <div style="background: #e5e5e5;height: .2rem;"></div>

    <ul class="tabUl">
      <li class="tab">
        <span class="brandIcon"></span>
        <span class="tabEng">BRAND</span>
        <span class="tabTxt">品牌</span>        
      </li>
      <li class="tab">
        <span class="eventIcon"></span>
        <span class="tabEng">EVENT</span>
        <span class="tabTxt">活动</span>        
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
  .logo{
    height: 2.5rem;
    /*line-height: 2.5rem;*/
    text-align: center;
  }
  .logoImg{
    width: 5rem;
    height: 1rem;
    margin-top: .8rem;
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

import { TabContainer, TabContainerItem } from 'mint-ui';

export default {
  data() {
    return {

    }
  },
  components: {

  },
  created(){
    //console.log(this.$route)
  },
  computed: {

  },
  methods: {
    clickMask(){
      //alert(123);
      document.querySelector('.mask').click();
    }
  },
  mounted() {

  },
  watch: {

  }
}
</script>