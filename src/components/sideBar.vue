<template>
  <div class="sidebar" @click='test'>
    <div class="logo">
      <img src="" alt="" class="logoImg" />
    </div>

    <ul class="tabUl">
      <li class="tab">
        <span class="tabTxt">女士</span>
      </li>
      <li class="tab">
        <span class="tabTxt">男士</span>
      </li>
      <li class="tab bbnone">
        <span class="tabTxt">生活</span>
      </li>
    </ul>

    <ul class="tabUl">
      <li class="tab">
        <span class="tabTxt">品牌</span>
      </li>

      <li class="tab bbnone">
        <span class="tabTxt">视频</span>
      </li>
    </ul>
    
  </div>
</template>

<style media="screen" scoped>
  .side .sidebar {
    transform: translate3D(0, 0, 0);
  }
  .sidebar {
    width: 6.9rem;
    height: 100%;
    position: fixed;
    left: 0;
    top: 0;
    transform: translate3D(-7rem, 0, 0);
    -webkit-transition: -webkit-transform .2s cubic-bezier(.4, .01, .165, .99);
    transition: transform .2s cubic-bezier(.4, .01, .165, .99), -webkit-transform .2s cubic-bezier(.4, .01, .165, .99);
    z-index: 2147483647;
    background: #e5e5e5;
  }
  .logo{
    height: 2.5rem;
    /*line-height: 2.5rem;*/
    text-align: center;
    background-color: #fff;
  }
  .logoImg{
    width: 5rem;
    height: 1rem;
    margin-top: .8rem;
  }
  .tabUl{
    background-color: #fff;
    margin-bottom: .2rem;

  }
  .tab{
    padding: .5rem .2rem;
    border-bottom: 1px solid #666666;
    text-align: center;
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