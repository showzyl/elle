<template>
<div class="addressDetail">
  
  addressDetail
  
  <!--<footBar pageName="classify" />-->
</div>
</template>
<style media="screen" scoped>
  
  .btnAddAds{
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    padding: .5rem 0;
    text-align: center;
    background-color: #000000;
    color: #fff;
    font-size: .45rem;
  }

</style>
<script lang="babel">

// import { Toast, Cell, Checklist, Indicator, TabContainer, TabContainerItem } from 'mint-ui'
// //import commonNav from '../components/commonNav.vue'
// import core from '../assets/lib/q.core.js'
import commonNav from '../components/commonNav.vue'
// import footBar from '../components/footBar.vue'


export default {
  data(){
    return {
      tab: null
    }
  },
  created(){ 
    var me = this
    // me.$route.query 获取参数
    console.log()
  },
  components: {
    commonNav
  },
  computed: {
    // 有缓存
    
  },
  methods: {
    // 没有缓存
    asyncData(id, cb){
      var me = this
      
    },
    addAds(){
      console.log('add')
    }

  },
  mounted() {

  },
  watch: {

  }
}
</script>
