<template>
  <ul class="topnav">
    <li>品类</li>
    <li>品牌</li>
  </ul>
</template>
<script lang="babel">
    import {mapGetters} from 'vuex'
    //import 'normalize.css'
    import footBar from '../components/footBar.vue'
    //import indexNav from '../components/indexNav.vue'
    //import commonNav from '../components/commonNav.vue'
    import { Toast, Cell, Checklist, Indicator } from 'mint-ui'
    //import test from '../assets/lib/util.js'
    // console.log(test);
    //console.log(Toast, Cell, Checklist);

    export default {
        components: {
          footBar
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
  .topnav {}
</style>

<style>

</style>