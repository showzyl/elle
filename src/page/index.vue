<template>
  <div id="">
    <!-- <topNav /> -->
    <!--<indexNav title="首页" />-->
    <!--<catalogue />-->
    <commonNav title="首页" />
    <footBar />
  </div>
</template>
<script lang="babel">
    import {mapGetters} from 'vuex'
    import footBar from '../components/footBar.vue'
    import indexNav from '../components/indexNav.vue'
    import commonNav from '../components/commonNav.vue'
    import topNav from '../components/topNav.vue'
    import catalogue from '../components/catalogue.vue'
    //import commonNav from '../components/commonNav.vue'
    import { Toast, Cell, Checklist, Indicator } from 'mint-ui'
    //import test from '../assets/lib/util.js'
    // console.log(test);
    //console.log(Toast, Cell, Checklist);

    import core from '../assets/lib/q.core.js'
    import store from '../assets/lib/q.store.js'
    // console.log(core)
    // console.log(store)

    export default {
        components: {
          footBar,
          indexNav,
          topNav,
          commonNav,
          catalogue
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

<style media="screen" scoped>

</style>

<style scoped>
  .main {
    height: 100%;
    position: relative;
    /*background: red;*/
  }
  
  .menu {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #000000;
    opacity: 0.3;
  }
</style>