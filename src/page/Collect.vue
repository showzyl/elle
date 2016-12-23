<template>
<div class="collect">
  <commonNav title="收藏" iconRight="" />
  <div class="collectTab">
    <a href="javascript:;" @click.prevent="tab = 'tab0'" class="tab" :class="[tab == 'tab0' ? 'on' : '']">商品</a>
    <a href="javascript:;" @click.prevent="tab = 'tab1'" class="tab" :class="[tab == 'tab1' ? 'on' : '']">品牌</a>
    <div class="tabborder"></div>
  </div>

  <ul class="collList" v-if="tab === 'tab0'">
    <li class="collItem" v-for="product in products">
      <div class="imgBox">
        <img :src="product.thumb">
      </div>
      <div class="content">
        <p class="price">{{product.price}}</p>
        <p class="name">{{product.name}}</p>
      </div>
    </li>
  </ul>

  <ul class="brandList" v-if="tab === 'tab1'">
    <ul class="brandList">
      <li v-for="item in brands" class="brandItem">
        <a :href="'/#/brand/' + item.manufacturer_id">
          <div class="brandContent">
            <img :src="item.app_image" alt="">
            <h3 class="title">{{item.name}}</h3>
            <div class="desiger">{{item.desiger}}</div>
            <div class="collectTime" :class="{ on: item.iswish }">
              <span class="loveIcon"></span>
              <span class="count">{{item.wishcount}}</span>
            </div>
          </div>
          <div class="brandItemBg"></div>
        </a>
      </li>
    </ul>
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
    margin-top: 1.5rem;
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
    width: 55%;
  }

  .content p{
    margin-top: 1.2rem;
  }



  .brandItem{
    position: relative;
    /*height: 200px;*/
    color: #fff;
  }

  .brandContent .title, .brandContent .desiger{
    color: #fff;
  }

  .brandItem img{
    height: 196px;
  }

  .brandItemBg{
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: #000000;
    opacity: .8;
  }

  .brandItem .title, .brandItem .desiger{
    position: absolute;
    left: 10%;
    z-index: 2;

  }

  .brandItem .title{
    top: 40%;
    font-size: .45rem;
  }

  .brandItem .desiger{
    top: 55%;
    font-size: .35rem;
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

  .on .loveIcon{
    background-image: url('../assets/img/recomend/collection_h@3x.png');
  }

  .on .count{
    color: #ca4848;
  }


</style>

<script lang="babel">

  import { Toast, Indicator } from 'mint-ui'
  import commonNav from '../components/commonNav.vue'
  import store from '../assets/lib/q.store.js'

  const customer_id = store.get('customer_id');
  const mobile_token = store.get('mobile_token');

  export default {
    data(){
      return {
        tab: 'tab0',
        products: [],
        brands: []
      }
    },
    components: {
      commonNav
    },
    computed: {
      // 有缓存


    },
    created(){
      const me = this;
      Indicator.open({
        text: '加载中...',
        spinnerType: 'fading-circle'
      });

      me.fetchData({
        customer_id,
        mobile_token,
        type_id: 1
      }, res => {
  //      console.log(res);
        me.products = res.products;

      })

      me.fetchData({
        customer_id,
        mobile_token,
        type_id: 2
      }, res => {
  //      console.log(res);
        me.brands = res.manufacturers;
      })



    },
    methods: {
      // 没有缓存
      fetchData(data, cb){
        const me = this;
        data.route = 'mapi/wishlist';
        data.format = 'jsonp';

        this.$http.jsonp(
          window.q.interfaceHost +'index.php?',
          {
            params: data
          }
        ).then( res => {
          let data = res.body;
          if(data.code+'' === '0'){
            cb && cb(data.data);
          }else{
            Toast({
              message: '暂无数据...',
              position: 'bottom',
              duration: 3000
            })
          }
          Indicator.close();
        }, err => {
          Indicator.close();
          Toast('网络错误...')
        })

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
