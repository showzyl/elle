<template>
  <div class="brand">
    <download />
    <commonNav :title="info.name" iconRight="" />
    <!--{{$route.params.id}}-->
    <div class="content0" v-if="tab === 'tab0'">
      <div class="brandBox">
        <div class="brandBg"></div>
        <img :src="info.app_image">
        <div class="wishBox" :class="{on: info.iswish}">
          <h3 class="tit">{{info.title}}</h3>
          <span class="collectIconGray"></span>
          <span class="count">{{info.wishcount}}</span>
        </div>
      </div>

      <recomendItem :products="products" />

    </div>

    <div class="content1" v-else>
      <!--<div class="headImag" :style="{ 'background-image': 'url('+ info.head_image +')' }"></div>-->
      <!--<img :src="info.head_image" alt="">-->
      <!--{{info.head_image}}-->
      
      <div class="headImag h1" :style="{backgroundImage: 'url('+ info.head_image +')' }"></div>
      <p class="detail">
      {{info.detail}}
      </p>

      <p class="introduce">
      {{info.introduce}}
      </p>
      
    </div>
    
    <ul class="tab">
   
      <li @click.prevent="tab = 'tab0'" :class="[tab == 'tab0' ? 'on' : '']">
        <span class="activeIcon"></span>
      </li>
      <li @click.prevent="tab = 'tab1'" :class="[tab == 'tab1' ? 'on' : '']">
        <span class="bIcon"></span>
      </li>

      <div class="tabborder"></div>
    </ul>
  </div>
</template>
<style media="screen" scoped>
  .brand{
    position: relative;
  }

  .brand .brandBg, .brand .brandBox{
    height: 100%;
  }

  .brand .brandBg{
    width: 100%;
    position: absolute;
    background: #000000;
    opacity: .5;
    z-index: 2;
    height: 100%;
  }

  .brand .brandBox{
    position: relative;
    margin-bottom: .5rem;
  }

  .brandBox .wishBox{
    position: absolute;
    left: 50%;
    top: 30%;
    color: #fff;
    z-index: 3;
  }

  .wishBox .tit{
    font-size: .45rem;
    margin: .6rem 0 .6rem -2.5rem;
    width: 5rem;
    text-align: center;
  }

  .wishBox .collectIconGray{
    margin: 0 .2rem 0 -.3rem;
  }

  .on .collectIconGray{
    background-image: url(../assets/img/recomend/collection_h@3x.png);
  }

  .on .count{
    color: #ca4848;
  }

  .wishBox .count{
    font-size: .4rem
  }

  .brand .tab{
    display: -webkit-box;
    position: fixed;
    bottom: 0;
    width: 100%;
    background: #000000;
  }

  .tabborder {
    border-right: 1px solid #d7d7d5;
    margin-left: 1px;
    height: .8rem;
    position: absolute;
    left: 50%;
    top: .3rem;
    
  }

  .tab li{
    display: block;
    -webkit-box-flex: 1;
    text-align: center;
    padding: .3rem;
  }

  .activeIcon, .bIcon{
    display: inline-block;
    background-size: cover;
  }

  .on .activeIcon{
    background-image: url(../assets/img/recomend/activity_h@3x.png);
  }

  .on .bIcon{
    background-image: url(../assets/img/recomend/b_h@3x.png);
  }

  .activeIcon{
    width: 28px;
    height: 20px;
    background-image: url(../assets/img/recomend/activity@3x.png);
  }

  .bIcon{
    width: 26px;
    height: 25px;
    background-image: url(../assets/img/recomend/b@3x.png);
  }
  
  .headImag{
    background-size: cover;
    height: 10rem;
  }

  .detail, .introduce{
    margin: .2rem .2rem;
    padding: .2rem 0;
    line-height: .5rem;
    font-size: .35rem;
  }

  .detail{
    border-bottom: 1px solid #d7d7d5;
  }

  .introduce{
    margin-bottom: 1.5rem;
  }

  .content0{
    margin-top: 1.5rem;
  }

  .content0 .recommendList{
    padding: 0 0 1.5rem 0;
  }


</style>
<script lang="babel">
  // import Vue from 'vue'
  import commonNav from '../components/commonNav.vue'
  import recomendItem from '../components/recommendItem.vue'
  import { Toast } from 'mint-ui'
  import util from '../assets/lib/q.util.js'
  import download from '../components/download.vue'

  // Vue.component(Swipe.name, Swipe);
  // Vue.component(SwipeItem.name, SwipeItem);

  let buyData = {};

  export default {
    data() {
      return {
        info: {},
        products: [],
        headImage: null,
        tab: 'tab0',
        bLoadData: true,
        pageNo: 1
      }
    },
    created(){
      const me = this;

      me.fetchData({
        manufacturer_id: me.$route.params.id, // 商品ID
        customer_id: '' // 用户ID
      }, function(res){
        //console.log(res);
        var reg = /\s/gi;
        if( reg.test(res.head_image) ){
          res.head_image = res.head_image.replace(reg, '%20')
        }
        me.info = res;
      });

      me.fetchProductData({
        manufacturer_id: me.$route.params.id,
        page_id: me.pageNo
      }, res => {
        console.log(res);
        me.products = me.products.concat(res);
      })

      window.onscroll = function(e){
        if( !(/brand/.test(me.$route.path)) ) return;
        if (util.getScrollHeight() <= (util.getWindowHeight() + util.getDocumentTop() + 300)) {
          if (util.scrollFunc() == 'down' && me['bLoadData']) {
            // 下拉
            me['bLoadData'] = false;
            me.pageNo++;

            me.fetchProductData({
              manufacturer_id: me.$route.params.id,
              page_id: me.pageNo
            }, res => {
              me['bLoadData'] = true;
              me.products = me.products.concat(res);
            })
            
          }
        }
      }

      util.scrollToggleCommonNav(function(){
        if( !(/brand/.test(me.$route.path)) ) return;
        return ( /brand/.test(me.$route.path) && me.tab === 'tab0' )
      })

    },
    components: {
      commonNav,
      recomendItem,
      download
    },
    computed: {

    },
    methods: {
      fetchData(data, cb){
        var me = this;
        data.route = 'mapi/manufacturer/detail';
        data.format = 'jsonp';
        this.$http.jsonp(
          window.q.interfaceHost +'index.php?',
          {params: data})
        .then(res => {
          //console.log(res)
          let data = res.body;
          cb && cb(data.data);

          // if(data.code+'' === '0'){
            
          // }else{
          //   Toast('暂无数据...')
          // }
        }, err => {
          console.log(err)
        })
      },
      fetchProductData(data, cb){
        var me = this;
        // console.log(me.$route.params.id)
        // manufacturer/products
        data.format = 'jsonp';
        this.$http.jsonp(
          window.q.interfaceHost +'index.php?route=mapi/manufacturer/products',
          {params: data})
        .then(res => {
          let data = res.body;
          console.log(data);
          if(data.data.product_list.length){
            cb && cb(data.data.product_list);
          } else {
            Toast('暂无数据...')
          }
        }, err => {
          Toast('网络错误...')
        })

      },
      clickBuy(){
        console.log(buyData);
        //return
        location.href = '/#/test?options=' + JSON.stringify(this.options);
      }

    },
    mounted() {

    },
    watch: {

    }
  }
</script>
