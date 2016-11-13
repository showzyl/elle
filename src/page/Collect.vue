<template>
<div class="collect">
  <commonNav title="收藏" iconRight="" />
  <div class="collectTab">
    <a href="javascript:;" class="tab on">商品</a>
    <a href="javascript:;" class="tab">品牌</a>
    <div class="tabborder"></div>
  </div>

  <ul class="collList">
    <li class="collItem">
      <div class="imgBox">
        <img src="http://static.elleshop.com.cn/catalog/Operation/tokidoki/1_1-2.jpg?iopcmd=thumbnail&type=8&width=300&height=383|iopcmd=convert&q=60&dst=jpg" alt="">
      </div>
      <div class="content">
        <p class="price">138</p>
        <p class="name">NAMAS MIYO</p>
      </div>
    </li>
  </ul>

  <!--<footBar pageName="classify" />-->
</div>
</template>
<style media="screen" scoped>

  .collect{

  }
  .collectTab{
    display: -webkit-box;
    position: relative;
    border: 1px solid #d7d7d5;
    border-right: 0 none;
    border-left: 0 none; 
  }
  .collectTab .on{
    border-bottom: 2px solid;
  }
  .tabborder {
    border-right: 1px solid #d7d7d5;
    margin-left: 1px;
    height: .8rem;
    position: absolute;
    left: 50%;
    top: .3rem;
  }
  .tab{
    display: block;
    color: #000000;
    -webkit-box-flex: 1;
    text-align: center;
    font-size: .4rem;
    padding: .4rem 0;
    margin: 0 .2rem;
  }

  .collItem{
    /*width: 50%;*/
    float: left;
    margin: .4rem;
  }

  .imgBox{
    float: left;
    width: 40%;
  }

  .content{
    float: left;
    margin-left: .3rem;
  }

  .content p{
    margin-top: 1.2rem;
  }



</style>
<script lang="babel">

import { Toast, Cell, Checklist, Indicator, TabContainer, TabContainerItem } from 'mint-ui'
// //import commonNav from '../components/commonNav.vue'
// import core from '../assets/lib/q.core.js'
import commonNav from '../components/commonNav.vue'
// import footBar from '../components/footBar.vue'


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
