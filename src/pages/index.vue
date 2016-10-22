<template>

  <!-- index
  <br/>
  <router-link to="/reg">reg</router-link>
  <br/>
  <router-link to="/login">login</router-link> -->
  <!-- <div class="swiper-container">
       <div class="swiper-wrapper">
           <div class="swiper-slide" style="height: 740px;">
             <img src="/static/img/1.png" alt="">
           </div>
           <div class="swiper-slide">
             <img src="/static/img/2.png" alt="">
           </div>
           <div class="swiper-slide">
             <img src="/static/img/3.png" alt="">
           </div>
           <div class="swiper-slide">
             <img src="/static/img/4.png" alt="">
           </div>
           <div class="swiper-slide">
             <img src="/static/img/1.png" alt="">
           </div>
           <div class="swiper-slide">
            <img src="/static/img/2.png" alt="">
           </div>
       </div>
       <div class="swiper-pagination"></div>
   </div> -->

   <div id="fullpage">
      <div class="section">
        <img src="/static/img/1.png" alt="">
      </div>
      <div class="section">
        <img src="/static/img/2.png" alt="">
      </div>
      <div class="section">
        <img src="/static/img/3.png" alt="">
      </div>
      <div class="section">
        <img src="/static/img/4.png" alt="">
      </div>

  </div>


</template>
<script lang="babel">

import { mapGetters } from 'vuex'



export default {
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

<style>
html, body {
     position: relative;
     height: 100%;
 }
 body {
     background: #eee;
     font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
     font-size: 14px;
     color:#000;
     margin: 0;
     padding: 0;
 }
 .swiper-container {
     width: 100%;
     height: 100%;
 }
 .swiper-slide {
     text-align: center;
     font-size: 18px;
     background: #fff;
     /* Center slide text vertically */
     display: -webkit-box;
     display: -ms-flexbox;
     display: -webkit-flex;
     display: flex;
     -webkit-box-pack: center;
     -ms-flex-pack: center;
     -webkit-justify-content: center;
     justify-content: center;
     -webkit-box-align: center;
     -ms-flex-align: center;
     -webkit-align-items: center;
     align-items: center;
 }
 .swiper-slide img{
   display: block;
   width: 100%;
 }

 #fullpage .section img{
   display: block;
   width: 100%;
   margin-top: -18px;
 }

</style>
