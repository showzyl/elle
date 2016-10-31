<template>
    <div id="">
        <commonNav tit="呵呵" />
        <footBar />
        <!-- <div class="menu">
            我是menugit stash pop
        </div> -->
    </div>
</template>
<script lang="babel">
    import {mapGetters} from 'vuex'
    //import 'normalize.css'
    import footBar from '../components/footBar'
    import indexNav from '../components/indexNav'
    import commonNav from '../components/commonNav'
    // console.log(footBar);
    export default {
        components: {
          footBar,
          indexNav,
          commonNav
        },
        computed: {},
        methods: {},
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
