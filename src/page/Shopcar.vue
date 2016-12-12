<template>
  <div class="shopcar">
    <div class="shopcarTop none">
        <img src="../assets/img/shopcart.png" alt="" class="shopcarImg"/>
        <h3 class="emptyTxt">
          您的购物车暂无商品
        </h3>
    </div>

    <ul class="shopcarList">
      <li class="shopcarItem">
        <a href="/#">
          <h3 class="tit">
            我是标题
          </h3>
          <div class="shopcarItemMain">
            <div class="shopcarItemT">
              <div class="imgBox">
                <img src="http://p5.qhimg.com/t01272aeeb0365c41dd.png" alt="">
              </div>
              <div class="moneyBox">
                <p class="money">$789</p>
                <p class="des">wdqqqqqqqq</p>
              </div>
              <div class="addBottom">
                <label class="mint-checklist-label">
                  <span class="mint-checkbox">
                    <input type="checkbox" class="mint-checkbox-input" value=""> 
                    <span class="mint-checkbox-core"></span>
                  </span> 
                </label>
              </div>
            </div>
            <div class="shopcarItemM">
              <div class="numBox">
                <p>
                  颜色[黑色]/尺码[均码]
                </p>
                <p>
                  数量 1
                </p>
              </div>
              <a href="" class="change">修改</a>
            </div>
            <div class="shopcarItemB">
              <h3 class="price">$323213</h3>
              <div class="iconList">
                <i class="iconLove"></i>
                <i class="iconGarbage"></i>
              </div>
            </div>
          </div>
        </a>
      </li>
    </ul>

    <div class="settlement">
      总计: ￥23321（4 件）
      <div class="settlementBtn">结算</div>
    </div>

    <footBar pageName="shopcar"/>
  </div>
</template>


<style media="screen" scoped>
  .shopcar{
    background-color: #e5e5e5;
    min-height: 100%;
  }
  .shopcarTop{
    height: 6rem;
    text-align: center;
    vertical-align: middle;
    border-bottom: 1px solid #dddddd;
    background-color: #fff;
  }
  .shopcarImg{
    width: 4rem;
    height: 4rem;
    padding-top: .6rem;
  }
  .emptyTxt{
    text-align: center;
    color: #dddddd;
    padding: .3rem;
    font-size: .36rem;
  }
  .shopcarItem{
    padding: .2rem;
    overflow: auto;

  }
  .shopcarItem .tit{
    /*padding: .3rem;*/
    margin-bottom: .2rem;
    font-size: .4rem;
  }
  .shopcarItemMain{
    background-color: #fff;
    /*padding: .3rem;*/

  }
  .shopcarItemT{
    overflow: auto;
    padding: .3rem;
    position: relative;
    border-bottom: 1px solid #d7d7d5;
  }
  .shopcarItemT .imgBox{
    width: 25%;
    float: left;
  }
  .shopcarItemT .moneyBox{
    float: left;

  }
  .shopcarItemT p{
    padding: .4rem 0 0 .2rem;
  }
  .shopcarItemT .money{
    font-size: .5rem;
  }
  .shopcarItemT .mint-checklist-label{
    position: absolute;
    right: 0;
    top: 0;
  }

  .shopcarItemM{
    overflow: hidden;
    padding: .2rem .2rem 0;

  }

  .shopcarItemM .numBox{
    float: left;

  }

  .shopcarItemM p{
    margin: 0 0 .2rem 0;
  }

  .shopcarItemM .change{
    float: right;
    font-size: .4rem;

  }

  .shopcarItemB{
    overflow: hidden;
    padding: .2rem 0;
  }

  .shopcarItemB .iconList i {
    display: inline-block;
    width: 22px;
    height: 20px;
    margin-left: .6rem;
    background-size: cover;
  }

  .shopcarItemB .price{
    float: left;
    font-size: .5rem;
    padding-left: .2rem;
  }


  .iconLove{
    background-image: url(../assets/img/recomend/collection@3x.png);
  }

  .shopcarItemB .iconList i.iconGarbage{
    height: 23px;
  }

  .shopcar .settlement{
    text-align: center;
    position: fixed;
    bottom: 1.2rem;
    left: 0;
    width: 100%;
    background-color: #fff;
    color: red;
    height: 1.2rem;
    line-height: 1.2rem;
    font-size: .4rem;
  }

  .settlement .settlementBtn{
    position: absolute;
    right: 0;
    top: 0;
    width: 1.8rem;
    height: .6rem;
    line-height: .6rem;
    background: red;
    color: #fff;
    top: 50%;
    margin-top: -.3rem;
    margin-right: .3rem;
    border-radius: 5px;
  }


</style>

<script>
  import { mapState } from 'vuex'
  import footBar from '../components/footBar.vue'
  import { Toast, Indicator } from 'mint-ui'
  import util from '../assets/lib/q.util.js'
  import store from '../assets/lib/q.store.js'

  export default {
    data() {
      return {
        loading: false
      }
    },
    created(){
      const me = this;

      Indicator.open({
        text: '加载中...',
        spinnerType: 'fading-circle'
      });
      const mobile_token = store.get('mobile_token');
      me.fetchCartData({
        customer_id: 280944,
        mobile_token: mobile_token
      }, res => {
//        cons
      })

    },
    components: {
      footBar
    },
    data () {
      return {
        msg: 'shopcar'
      }
    },
    methods: {
      fetchCartData(data, cb){
        var me = this;
        data.route = 'mapi/cart';
        data.format = 'jsonp';
        this.$http.jsonp(
          window.q.interfaceHost +'index.php',
          {
            params: data
          }
        ).then( res => {
          let data = res.body;
          if(data.code === 0){
            cb && cb(data.data);
          }else{
            Toast('暂无数据...');
          }
          me.loading = false;
          Indicator.close();
        }, err => {
          Indicator.close();
          me.loading = false;
          //console.log(res)
          Toast('网络错误...')
        })

      },
      deleteCartItem(data, cb){
        // cart_id: xxxx
        var me = this;
        data.route = 'mapi/cart/delete';
        data.format = 'jsonp';
        this.$http.jsonp(
          window.q.interfaceHost +'index.php',
          {
            params: data
          }
        ).then( res => {
          let data = res.body;
          if(data.code === 0){
            cb && cb(data.data);
          }else{
            Toast('暂无数据...');
          }
          me.loading = false;
          Indicator.close();
        }, err => {
          Indicator.close();
          me.loading = false;
          //console.log(res)
          Toast('网络错误...')
        })
      }
    }
  }
</script>

