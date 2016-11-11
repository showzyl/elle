<template>
  <div class="invoice">
   
    <div class="btn btnAddInvoice" @click="addAds">
      + 新建发票
    </div>
    <!--<footBar pageName="classify" />-->
  </div>
</template>

<style media="screen" scoped>
  .invoice{

  }

</style>

<script lang="babel">

  import { Toast, Cell, Checklist, Indicator, TabContainer, TabContainerItem } from 'mint-ui'
  // //import commonNav from '../components/commonNav.vue'
  // import core from '../assets/lib/q.core.js'
  import commonNav from '../components/commonNav.vue'

  export default {
    data(){
      return {

      }
    },
    created(){ 
      var me = this

    },
    components: {
      commonNav,
      Checklist
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
