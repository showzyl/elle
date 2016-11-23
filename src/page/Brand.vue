<template>
  <div class="brand">
    <commonNav :title="info.name" iconRight="" />
    <!--{{$route.params.id}}-->
    <div class="content0" v-if="tab === 'tab0'">
      <div class="brandBg"></div>
      <div class="brandBox">
        <img :src="info.app_image" alt="">
        <div class="wishBox" :class="{on: info.iswish}">
          <h3 class="tit">{{info.title}}</h3>
          <span class="collectIconGray"></span>
          <span class="count">{{info.wishcount}}</span>
        </div>
      </div>
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
    height: 178px;
  }

  .brand .brandBg{
    width: 100%;
    position: absolute;
    background: #000000;
    top: 1.5rem;
    opacity: .2;
    z-index: 2;
  }

  .brand .brandBox{
    position: relative;
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
    margin: .6rem 0;
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


</style>
<script lang="babel">
  // import Vue from 'vue'
  import commonNav from '../components/commonNav.vue'
  import { Toast } from 'mint-ui'

  // Vue.component(Swipe.name, Swipe);
  // Vue.component(SwipeItem.name, SwipeItem);

  let buyData = {};

  export default {
    data() {
      return {
        info: {},
        headImage: null,
        tab: 'tab1'
      }
    },
    created(){
      const me = this;
      //console.log(me.$route.params.id);
      me.fetchData({
        manufacturer_id: me.$route.params.id, // 商品ID
        customer_id: '' // 用户ID
      }, function(res){
        console.log(res);
        me.info = res;
        //me.headImage = res.head_image;
        //document.querySelector('.headImag').style.backgroundImage = res.head_image;
        //console.log(res.head_image)
       // me.info.iswish = 1;
      });
    },
    components: {
      commonNav
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
          //   Toast('暂无数据, 请稍后刷新页面...')
          // }
        }, err => {
          console.log(err)
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
