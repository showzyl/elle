<template>
<div class="classify">
  <ul class="header">
   
    <li @click.prevent="tab = 'category'" :class="[tab == 'category' ? 'on' : '']">
      <a href="javascript:;">品类</a>
    </li>
     <li @click.prevent="tab = 'brand'" :class="[tab == 'brand' ? 'on' : '']">
      <a href="javascript:;" >品牌</a>
    </li>

    <div class="tabborder"></div>
  </ul>

  <div class="content" v-if="tab === 'category'">
    <div class="subBar">
      <a @click.prevent="active1 = 'tab-container1'" :class="[active1 == 'tab-container1' ? 'on' : '']">女士</a>
      <a @click.prevent="active1 = 'tab-container2'" :class="[active1 == 'tab-container2' ? 'on' : '']">男士</a>
      <a @click.prevent="active1 = 'tab-container3'" :class="[active1 == 'tab-container3' ? 'on' : '']">生活</a>
    </div>

     <div class="page-tab-container">
      <mt-tab-container class="page-tabbar-tab-container" v-model="active1" swipeable>
        <mt-tab-container-item id="tab-container1">
          <ul class="shopList">
            <li class="shopItem">
              <div class="shopImg">
                <img src="http://p5.qhimg.com/t01272aeeb0365c41dd.png" alt="">
              </div>
              <h3 class="tit">呵呵呵</h3>
            </li>
            <li class="shopItem">
              <div class="shopImg">
                <img src="http://p5.qhimg.com/t01272aeeb0365c41dd.png" alt="">
              </div>
              <h3 class="tit">呵呵呵</h3>
            </li>
          </ul>
        </mt-tab-container-item>
        <mt-tab-container-item id="tab-container2">
          pinpai content2
        </mt-tab-container-item>
        <mt-tab-container-item id="tab-container3">
          pinpai content3
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
    
  </div>

  <div class="content" v-else>
    <div class="subBar">
      <a @click.prevent="active2 = 'tab-container1'" :class="[active2 == 'tab-container1' ? 'on' : '']">女士</a>
      <a @click.prevent="active2 = 'tab-container2'" :class="[active2 == 'tab-container2' ? 'on' : '']">男士</a>
      <a @click.prevent="active2 = 'tab-container3'" :class="[active2 == 'tab-container3' ? 'on' : '']">生活</a>
    </div>

     <div class="page-tab-container">
      <mt-tab-container class="page-tabbar-tab-container" v-model="active2" swipeable>
        <mt-tab-container-item id="tab-container1">
          <ul class="brandList">
            <li v-for="item in brandItems0" class="brandItem">
              <img :src="item.app_image" alt="">
              <h3 class="title">{{item.title}}</h3>
              <div class="collectTime">
                <span class="loveIcon"></span>
                <span class="count">{{item.wishcount}}</span>
              </div>
              <div class="brandItemBg"></div>
            </li>
          </ul>
        </mt-tab-container-item>
        <mt-tab-container-item id="tab-container2">
          category content2
        </mt-tab-container-item>
        <mt-tab-container-item id="tab-container3">
          category content3
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
    
  </div>

  <footBar pageName="classify" />
</div>
</template>

<style media="screen" scoped>
  .classify{
    
  }

  .header, .subBar{
    /*height: 1rem;
    line-height: 1rem;*/
    display: -webkit-box;
  }

  .header li, .subBar a{
    display: block;
    -webkit-box-flex: 1;
    text-align: center;
    padding: .4rem;
    /*margin: .5rem;*/
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
    
  }

  .subBar a.on{
    color: #000000;
  }

  .shopList{
    margin: .2rem;

  }
  
  .shopItem{
    float: left;
    width: 50%;
    box-sizing: border-box;
  }

  .shopImg{
    margin: .2rem;
  }

  .tit{
    margin: .2rem;
    text-align: center;
  }

  .tabborder{
    border-right: 1px solid #d7d7d5;
    margin-left: 1px;
    height: .8rem;
    position: absolute;
    left: 50%;
    top: .3rem;
  }

  .brandList{

  }

  .brandItem{
    position: relative;
    height: 200px;
    color: #fff;
  }

  .brandItem img{
    height: 200px;
  }

  .brandItemBg{
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 200px;
    background: #000000;
    opacity: .8;
  }

  .brandItem .title{
    position: absolute;
    left: 10%;
    z-index: 2;
    top: 45%;
    font-size: .45rem;
  }

  .brandItem .collectTime{
    position: absolute;
    right: 10%;
    top: 45%;
    z-index: 2;
    color: #fff;
    font-size: .45rem;
  }

  .collectTime .count{

  }

  .collectTime .loveIcon{
    background-image: url(../assets/img/profile/icon_fucus@3x.png);
    background-size: cover;
    width: 18px;
    height: 16px;
    display: inline-block;
  }



</style>

<script lang="babel">
//import commonNav from '../components/commonNav.vue'
// import core from '../assets/lib/q.core.js'
// import store from '../assets/lib/q.store.js'
  import { Toast } from 'mint-ui'
  import footBar from '../components/footBar.vue'
  import util from '../assets/lib/q.util.js'

  export default {
    data(){
      return {
        active1: 'tab-container1',
        active2: 'tab-container1',      
        tab: 'brand',
        brandItems0: [],
        brandItems1: [],
        brandItems2: []
      }
    },
    created(){
      const me = this;

      this.fetchBrandData({
        type_id: 4
      }, res => {
        me.brandItems0 = me.brandItems0.concat(res);
        //me.brandItems0
      })

    },
    components: {
      footBar
    },
    computed: {

    },
    methods: {
      fetchBrandData(data, cb){
        var me = this;

        data.route = 'mapi/manufacturer';
        data.format = 'jsonp';

        util.jsonp({
          url : window.q.interfaceHost +'index.php',
          data: data,
          callback : function(res) {
            if(res.code+'' === '0'){
              let data = res.data;
              cb && cb(data);
            }else{
              Toast('暂无数据, 请稍后刷新页面...')
            }
          }
        }, 'callback')

      }
    },
    mounted() {

    },
    watch: {

    }
  }
</script>
