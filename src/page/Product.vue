<template>
  <div class="product">
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

    <div class="btn btnBuy none" @click="clickBuy">
      <!--<a :href="'/#/test?options='+options">
        
      </a>-->
      加入购物车
    </div>

  </div>
</template>
<style media="screen" scoped>
  .product{

  }

  .product .swipe{
    height: 500px;
  }

  .product .mint-swipe{
    height: 500px;
  }

  .product .mint-swipe-item{
    height: 500px;
  }

  .mint-swipe-item img{
    height: 500px;
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

  

</style>
<script lang="babel">
  import Vue from 'vue'
  import commonNav from '../components/commonNav.vue'
  import { Swipe, SwipeItem, Toast } from 'mint-ui'

  Vue.component(Swipe.name, Swipe);
  Vue.component(SwipeItem.name, SwipeItem);


  export default {
    data() {
      return {
        arr: [0,1,2,3],
        images: [],
        description: [],
        is_wish: null,
        productInfo: {},
        options: []
      }
    },
    created(){
      const me = this;
      //console.log(me.$route);
      me.fetchData({
        product_id: me.$route.params.id, // 商品ID
        customer_id: '' // 用户ID
      }, function(res){
        //me.data = res;
        me.images = res.images;
        me.description = res.description;
        //res.is_wish = 1;
        me.is_wish = res.is_wish;

        me.productInfo = {
          name: res.name,
          price: res.price,
          manufacturer_img: res.manufacturer_img,
          manufacturer: res.manufacturer
        }

        me.options = res.options;

      });
    },
    components: {
      commonNav,
      Swipe,
      SwipeItem
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
            Toast('暂无数据, 请稍后刷新页面...')
          }
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
