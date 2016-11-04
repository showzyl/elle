<template>
    <div id="">
        <commonNav title="首页" />
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
    //import test from '../assets/lib/util.js'
    // console.log(test);
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
            //Indicator.open();
          }
        },
        mounted() {

        },
        watch: {}
    }
</script>

<style>

 html, body{
   height: 100%;
 }

 body{
   padding-bottom: 1.5rem;
 }

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
