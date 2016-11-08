<template>
  <div id="app">
    <router-view></router-view>
    <div class="mask none" @click='toggleMask'></div>
  </div>
</template>

<script>

import './assets/css/reset.css'

export default {
  name: 'app',
  data () {
    return {

    }
  },
  methods: {
    toggleMask(e){
      if(e.target.className === 'mask'){
        document.body.className = ''
        document.querySelector('.mask').className += ' none'
      }
    }
  }
}
</script>

<style>
  html,
  body {
    height: 100%;
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
</style>