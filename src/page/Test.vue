
<template>
<div class="test">
  test page
</div>
</template>
<style media="screen">
  
</style>
<script lang="babel">
  import { Toast, Cell, Checklist, Indicator, TabContainer, TabContainerItem } from 'mint-ui'
  export default {
    data(){
      return {
        
      }
    },
    created(){ 
      var me = this

    },
    components: {

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
