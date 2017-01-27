
<template>
<div class="test">
  <download />
  <!--<ul>-->
    <!--<li>-->
      <!--<a href="https://www.baidu.com">-->
        <!--<div class="img" style=""></div>-->
        <!--<p>我是下面的内容</p>-->
      <!--</a>-->
    <!--</li>-->
    <!--<li>-->
      <!--<a href="https://www.baidu.com">-->
        <!--<div class="img" style=""></div>-->
        <!--<p>我是下面的内容</p>-->
      <!--</a>-->
    <!--</li>-->
  <!--</ul>-->
  <!--<div class="btn">我是按钮</div>-->
</div>
</template>


<style media="screen" lang="scss" scoped>

  /*ul{*/
    /*overflow: hidden;*/
  /*}*/

  /*ul li {*/
    /*width: 50%;*/
    /*height: 100%;*/
    /*float: left;*/
    /*!*background-size: cover;*!*/
  /*}*/

  /*ul li .img{*/
    /*padding-top: 100%;*/
    /*width: 100%;*/
    /*background-size: cover;*/
    /*!*background-image: url("http://img.elleshop.com.cn/catalog/app/app分类页用图/new2/nv/美妆.jpg?imageView2/1/w/320/h/320/format/jpg/interlace/1/q/80/");*!*/
  /*}*/

  /*ul li p{*/
    /*text-align: center;*/
    /*margin: .3rem 0;*/
  /*}*/
</style>
<script lang="babel">
  import { Toast, Cell, Checklist, Indicator, TabContainer, TabContainerItem } from 'mint-ui'
  import download from '../components/download.vue';
  export default {
    data(){
      return {
        
      }
    },
    created(){ 
      var me = this

    },
    components: {
      download
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
