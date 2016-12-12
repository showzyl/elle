<template>
  <div class="product">
    <div class="productDetail" v-if="content === 'productDetail'">
      <commonNav :title="productInfo.manufacturer" iconRight="" />
      <!--{{$route.params.id}}-->
      <div class="swipe">
        <mt-swipe :auto="4000">
          <mt-swipe-item v-for="item in images">
            <img :src="item.popup" alt="">
          </mt-swipe-item>
        </mt-swipe>
      </div>

      <ul class="recomentList none">
        <li class="recomentItem">
          <span class="collectLove" :class="{ on: is_wish }"></span> <br>
          <span class="txt">收藏</span>
        </li>
      </ul>

      <div class="productInfo">
        <h4>{{productInfo.name}}</h4>
        <p class="price">￥{{productInfo.price}}</p>
      </div>

      <div class="productBox">
        <img :src="productInfo.manufacturer_img" alt="">
        <div class="txtBox">
          <h3>{{productInfo.manufacturer}}</h3>
          <p></p>
        </div>
      </div>

      <ul class="imgBox">
        <li class="" v-for="item in description">
          <img :src="item" alt="">
        </li>
      </ul>

      <div class="btn btnBuy" @click="content = 'detailOption'">
          加入购物车
      </div>

      <div class="" style="margin-bottom:.8rem;">
        <recommendItem :products="recommands">
      </div>

    </div>

    <div class="detailOption" v-else>

      <i class="closebtnBlack" @click="content = 'productDetail'"></i>

      <div class="imgBox">
        <img :src="thumbImg" alt="">
      </div>

      <h2 class="title">
        {{productInfo.name}}
      </h2>

      <div class="selectBox">

        <div class="main">
          <div class="selectMain" v-if="sizes.length > 1">
            <select v-model="cartInfo.size">
              <option v-for="size in sizes" :value="size.product_option_id + ',' +size.product_option_value_id">{{size.ovdname}}</option>
            </select>
          </div>
          <p class="selectMain" style="color: #d7d7d5;" v-else>
            <span v-for="size in sizes">{{size.ovdname}}</span>
          </p>
          <span class="iconArrowBottom iconArrowBottom1" :class=" {iconArrowGray: sizes.length < 2} "></span>
        </div>


        <div class="tabborder"></div>

        <div class="main">
          <div class="selectMain" v-if="colors.length > 1">
            <select v-model="cartInfo.color">
              <option v-for="color in colors" :value="color.product_id+','+color.color" >{{color.color}}</option>
            </select>
          </div>
          <p class="selectMain" style="color: #d7d7d5;" v-else>
            <span v-for="color in colors">{{color.color}}</span>
          </p>
          <span class="iconArrowBottom iconArrowBottom2" :class=" {iconArrowGray: colors.length <= 1} "></span>
        </div>

      </div>

      <div class="numberBox">
        <span class="minus" @click="minus"></span>
        <span class="num">{{number}}</span>
        <span class="add" @click="add"></span>
      </div>


      <div class="btn btnAddCart" @click="addToCart">确定</div>

    </div>

  </div>
</template>

<style media="screen" scoped>

  .numberBox{
    height: 1.2rem;
    line-height: 1.2rem;
    border-bottom: 1px solid #d7d7d5;
    position: relative;
  }

  .add,.minus,.num{
    display: inline-block;
    font-size: .5rem;
  }

  .add,.minus{
    width: 15px;
    height: 15px;
    background-size: cover;
    position: absolute;
    top: .4rem;
  }

  .add{
    right: 0;
    margin-right: .4rem;
    background-image: url(../assets/img/recomend/jia03@2x.png);
  }

  .minus{
    top: .6rem;
    left: 0;
    height: 4px;
    margin-left: .4rem;
    background-image: url(../assets/img/recomend/jian01@3x.png);
  }

  .num{
    width: 100%;
    text-align: center;
  }

  .main{
    position: relative;
  }

  .selectMain{
    width: 50%;
    float: left;
    font-size: .5rem;
    box-sizing: border-box;
    height: 1.2rem;
    line-height: 1.2rem;
    padding-left: .3rem;
  }

  .iconArrowBottom{
    width: 12px;
    height: 7px;
    position: absolute;
    top: .5rem;
    z-index: -1;
    background-image: url(../assets/img/recomend/arrow-bottom@3x.png);
    background-size: cover;
  }

  .iconArrowBottom1{
    right: 54%;
  }

  .iconArrowBottom2{
    right: 4%;
  }

  .selectMain select{
    width: 100%;
    height: 100%;
    font-size: .5rem;
  }

  .selectBox{
    border: 1px solid #d7d7d5;
    border-left: 0 none;
    border-right: 0 none;
    overflow: hidden;
    position: relative;
  }

  .closebtnBlack{
    position: fixed;
    top: 0;
    right: 0;
    margin: .5rem;
  }

  .detailOption .imgBox{
    height: 8rem;
    margin: 2rem auto 2.5rem;
  }

  .product{

  }

  .product .swipe{
    margin-top: 1.5rem;
  }

  .product .swipe, .product .mint-swipe, .product .mint-swipe-item{
    height: 12rem;
  }

  .recomentList{
    display: -webkit-box;
  }

  .recomentItem{
    -webkit-box-flex: 1;
    text-align: center;
    font-size: 0.3rem;
    padding: .4rem 0;
    border: 1px solid #d7d7d5;
    border-left: 0 none;
    border-right: 0 none;
  }

  .recomentItem .collectLove, .recomentItem .txt{
    display: inline-block;
  }

  .recomentItem .txt{
    padding: .3rem 0 0;
    margin-right: .1rem;
  }

  .collectLove{
    background-image: url(../assets/img/recomend/collection@3x.png);
    width: 18px;
    height: 17px;
    background-size: cover;
  }

  .recomentItem .on{
    background-image: url(../assets/img/recomend/collection_h@3x.png);
  }

  .productInfo{
    font-size: .35rem;
  }

  .productInfo, .productBox{
    padding: .4rem;
    border-bottom: 1px solid #d7d7d5;
    overflow: hidden;
  }

  .productInfo .price{
    padding: .2rem 0 0;
  }

  .productBox {

  }

  .productBox img{
    float: left;
    width: 40%;
  }

  .productBox .txtBox{
    float: left;
    margin: .5rem 0 0 .5rem;
  }

  .txtBox p{
    margin: .2rem 0 0;
  }

  .btnBuy{
    position: fixed;
    bottom: 0;
  }

  .imgBox{
    margin-bottom: 1.5rem;
  }

  .btnAddCart{
    position: fixed;
    bottom: 0;
    margin-left: -.5rem;

  }

  .detailOption{
    margin: .5rem .5rem 0;
    position: relative;
  }

  .detailOption .title{
    margin: .6rem 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .tabborder{
    border-right: 1px solid #d7d7d5;
    margin-left: 1px;
    height: .6rem;
    position: absolute;
    left: 50%;
    top: .3rem;
  }

  .iconArrowGray{
    background-image: url(../assets/img/recomend/arrow02@2x.png);
  }



</style>

<script lang="babel">
  import Vue from 'vue'
  import commonNav from '../components/commonNav.vue'
  import recommendItem from '../components/recommendItem.vue'
  import { Swipe, SwipeItem, Toast } from 'mint-ui'
  import util from '../assets/lib/q.util.js'
  import { mapMutations, mapGetters, mapState, mapActions } from 'vuex'
  // mutations 必须是同步 commit
  // actions 异步处理 dispatch

  Vue.component(Swipe.name, Swipe);
  Vue.component(SwipeItem.name, SwipeItem);

  export default {
    data() {
      return {
        content: 'productDetail',
        images: [],
        description: [],
        is_wish: null,
        productInfo: {},
        options: [],
        sizes: [],
        colors: [],
        recommands: [],
        thumbImg: null,
        number: 1,
        inventory: null,
        cartInfo: {

        }
      }
    },
    created(){
      const me = this;

      me.fetchOption({
        product_id: me.$route.params.id, // 商品ID
      }, res => {
        //console.log(res);
        me.sizes = res.Size;
        me.colors = res.color;
        me.cartInfo.size = this.sizes[0].product_option_id + ',' + this.sizes[0].product_option_value_id;
        me.cartInfo.color = this.colors[0].product_id+','+this.colors[0].color;
      })

      me.fetchData({
        product_id: me.$route.params.id, // 商品ID
        customer_id: '' // 用户ID
      }, function(res){
        me.images = res.images;
        me.description = res.description;
        me.is_wish = res.is_wish;
        me.thumbImg = res.thumb;
        me.recommands = res.product_recommand;

        me.productInfo = {
          name: res.name,
          price: res.price,
          manufacturer_img: res.manufacturer_img,
          manufacturer: res.manufacturer
        };

        me.options = res.options;

      });


      util.scrollToggleCommonNav(function(){
        return ( /\/product\//.test(me.$route.path) && me.content === 'productDetail' )
      })

    },
    components: {
      Swipe,
      SwipeItem,
      commonNav,
      recommendItem
    },
    computed: {

    },
    methods: {
      fetchData(data, cb){
        var me = this;
        data.route = 'mapi/product';
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
            Toast('暂无数据...')
          }
        }, err => {
          Toast('网络错误...')
        })
      },
      fetchOption(data, cb){
        var me = this;
        data.route = 'mapi/product/getoption';
        data.format = 'jsonp';
        this.$http.jsonp(
          window.q.interfaceHost +'index.php?',
          {params: data})
        .then(res => {
          let data = res.body;
          if(data.code+'' === '0'){
            cb && cb(data.data);
          }else{
            Toast('暂无数据...')
          }
        }, err => {
          console.log(err)
          Toast('网络错误...')
        })
      },
      addToCart(e){
        const me = this;
        const aTmp = me.cartInfo.color.split(',');

        let item = {
         id: aTmp[0],
         size: me.cartInfo.size,
         color: aTmp[1],
         quantity: me.number
        };

        console.log(item);
        // this.$store.commit('ADD_TO_CART', {item})

        this.$http.jsonp(
          window.q.interfaceHost +'index.php?',
          {params: {
            route: 'mapi/cart/add'
          }})
          .then(res => {
          //console.log(res)
          let data = res.body;
          if(data.code+'' === '0'){
            cb && cb(data.data);
          }else{
            Toast('暂无数据...')
          }
        }, err => {
            Toast('网络错误...')
        })
      },
      add(){
        if(this.number <= 98){
          this.number++
        }
      },
      minus(){
        if(this.number >= 2){
          this.number--
        }
      }

    },
    mounted() {

    },
    watch: {

    }
  }
</script>
