<template>
    <div id="">
        <commonNav tit="呵呵" />
        <footBar />
        <div class="" @click="handleClick" style="height: 30px">
          点击我
        </div>
        <!-- <div class="menu">
            我是menugit stash pop
        </div> -->
    </div>
</template>
<script lang="babel">
    import {mapGetters} from 'vuex'
    //import 'normalize.css'
    import footBar from '../components/footBar.vue'
    import indexNav from '../components/indexNav.vue'
    import commonNav from '../components/commonNav.vue'
    import { Toast, Cell, Checklist, Indicator } from 'mint-ui'
    //console.log(Toast, Cell, Checklist);

    export default {
        components: {
          footBar,
          indexNav,
          commonNav
        },
        computed: {},
        methods: {
          handleClick: function() {
            //console.log(Toast)
            //Toast('提示信息');
            Indicator.open();
          }
        },
        mounted() {

        },
        watch: {}
    }
</script>

<style>
 html, body, ul, li, h1, h2, h3{
    margin: 0;
    padding: 0;
 }

 html, body{
   height: 100%;
 }

 ul, li{
   list-style-type: none;
 }

 a{
   text-decoration: none;
 }

 /* out border */
 *:focus { outline: none; }

 .main{
   height: 100%;
   position: relative;
   /*background: red;*/
 }

 .menu{
   position: fixed;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
   background: #000000;
   opacity: 0.3;
 }


</style>
