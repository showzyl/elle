
<template>
<div class="test">
  <h2>
    test page
  </h2>
</div>
</template>
<style media="screen" lang="scss">
  .test{
    width: 100px;
    height: 100px;
    border: 1px solid;
    h2{
      line-height: 100px;
      color: red;
    }
  }
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
      fetchData(id, cb){
        const me = this;

        
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
