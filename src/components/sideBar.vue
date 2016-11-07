<template>
  <div class="sidebar" @click='test'>
    <div class="logo">
      <img src="" alt="" class="logoImg" />
    </div>

    <ul class="tabUl">
      <li class="tab">
        <span class="tabIcon"></span>
        <span class="tabEng">LADY</span>
        <span class="tabTxt">女士</span>        
      </li>
      <li class="tab">
        <span class="tabIcon"></span>
        <span class="tabEng">LADY</span>
        <span class="tabTxt">女士</span>        
      </li>
      <li class="tab bbnone">
        <span class="tabIcon"></span>
        <span class="tabEng">LADY</span>
        <span class="tabTxt">女士</span>        
      </li>
    </ul>

    <div style="background: #e5e5e5;height: .2rem;"></div>

    <ul class="tabUl">
      <li class="tab">
        <span class="tabIcon"></span>
        <span class="tabEng">LADY</span>
        <span class="tabTxt">女士</span>        
      </li>
      <li class="tab ">
        <span class="tabIcon"></span>
        <span class="tabEng">LADY</span>
        <span class="tabTxt">女士</span>        
      </li>
      <li class="tab bbnone">
        <span class="tabIcon"></span>
        <span class="tabEng">LADY</span>
        <span class="tabTxt">女士</span>        
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
    font-size: .35rem;
    font-weight: bold;
  }
  .tabIcon{
    display: inline-block;
    width: .6rem;
    height: .6rem;
    background-image: url('../assets/img/sidebar/side_women@3x.png');
    background-size: contain;
    vertical-align: middle;
    margin-left: .6rem;
  }

  .tabEng{
    margin-left: .3rem;
  }

  .tabTxt{
    margin-left: .2rem;
  }

  .tab{
    padding: .5rem .2rem;
    border-bottom: 1px solid #666666;
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
  computed: {

  },
  methods: {
    test(){
      alert(123);
    }
  },
  mounted() {

  },
  watch: {

  }
}
</script>