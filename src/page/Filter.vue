<template>
<div class="filter">
  我是筛选页

  <!--<footBar pageName="classify" />-->
</div>
</template>

<style media="screen" scoped>
  .classify{
    
  }


  .header li{
    font-size: 0.5rem;
    border-bottom: 1px solid #d7d7d5;
    /*border-right: 1px solid;*/
  }

  .header li.on{
    color: #000000;
    border-bottom: 1px solid #000000;
  }

  .header li a{
    height: .5rem;
    line-height: .5rem;
  }

  .subBar a{
    color: #d7d7d5;
    font-size: .4rem;
    
  }


</style>

<script lang="babel">

  import { Toast } from 'mint-ui'
  import footBar from '../components/footBar.vue'
  import util from '../assets/lib/q.util.js'

  export default {
    data(){
      return {
        active1: 'tab-container0',
        active2: 'tab-container0',      
        tab: 'category',
        brandItems0: [],
        brandItems1: [],
        brandItems2: [],
        categoryItems0: [],
        categoryItems1: [],
        categoryItems2: []
      }
    },
    created(){
      const me = this;

    },
    components: {
      footBar
    },
    computed: {

    },
    methods: {
      fetchData(data, cb){
        var me = this;

        data.route = 'mapi/product_category';
        data.format = 'jsonp';

        this.$http.jsonp(
          window.q.interfaceHost +'index.php?',
          {params: data})
        .then(res => {
          //console.log(res)
          let data = res.body;
          if(data.code+'' === '0'){
            cb && cb(data.data);
          }else{
            Toast('暂无数据, 请稍后刷新页面...')
          }
        }, err => {
          console.log(err)
          Toast('网络错误...')
        })

      },
      fetchCategoryData(data, cb){
        var me = this;

        data.route = 'mapi/category/getallcategory';
        data.format = 'jsonp';

        this.$http.jsonp(
          window.q.interfaceHost +'index.php?',
          {params: data})
        .then(res => {
          //console.log(res)
          let data = res.body;
          console.log(data.data)
          if(data.data.list){
            cb && cb(data.data);
          }else{
            Toast('暂无数据, 请稍后刷新页面...')
          }
        }, err => {
          console.log(err)
        })

      }
    },
    mounted() {

    },
    watch: {

    }
  }
</script>
