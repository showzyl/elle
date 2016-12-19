<template>
  <div class="order">
    <commonNav title="订单" iconRight="" />

    <div class="orderContent">
      <ul class="orderList">
      <li class="orderItem">
        <div class="titleBox">
          <span class="orderNum">订单号: 5005788</span>
          <h3 class="orderStatus">已取消</h3>
        </div>
        <div class="orderMain">
          <div class="imgBox">
            <img src="http://p5.qhimg.com/t01272aeeb0365c41dd.png" alt="">
          </div>
          <div class="contentBox">
            <p class="price">129</p>
            <p class="spec">heheh</p>
            <p class="desc">我是描述我是描述</p>
            <p class="number">数量 1</p>
          </div>
        </div>

        <div class="checkBox">
          <p class="price">128</p>
          <p class="number">共 1 件</p>
          <div class="btnCheckDetail">
            查看详情
          </div>
        </div>
        
      </li>
    </ul>
    </div>
  </div>
</template>

<style media="screen" lang="scss" scoped>

  .commonNav{
    position: absolute;
  }

  .order{
    background-color: #e5e5e5;
    min-height: 100%;
  }

  .orderContent{
    margin-top: 1.5rem;
  }

  .orderList{
    background-color: #fff;
    /*margin: 1.8rem .2rem;*/
    min-height: 100%;
    /*padding-top: 1.5rem;*/
    .checkBox{
      position: relative;
      padding: .3rem 0;
    }
  }

  .orderItem{
    padding: .2rem;
  }

  .checkBox .price{
    font-size: .45rem;
    padding: .3rem .3rem 0;
  }
  
  .checkBox .number{
    padding: .2rem .3rem 0 ;
    font-size: .35rem;
  }

  .checkBox .btnCheckDetail{
    position: absolute;
    right: .4rem;
    bottom: .2rem;
    width: 2rem;
    height: .6rem;
    line-height: .6rem;
    text-align: center;
    font-size: .4rem;
    border: 1px solid #000000;
  }




</style>

<script lang="babel">

  import commonNav from '../components/commonNav.vue'
  import { Toast, Indicator } from 'mint-ui'
  import store from '../assets/lib/q.store.js'

  const customer_id = store.get('customer_id')
  const mobile_token = store.get('mobile_token')

  export default {
    data() {
      return {

      }
    },
    created(){
      const me = this;

      Indicator.open({
        text: '加载中...',
        spinnerType: 'fading-circle'
      });

      // type 空 为全部订单
      // 1 unpaid 待付款 2 unshipped 待发货 3 shipped 待收货

      me.fetchData({
        customer_id,
        mobile_token
      }, res => {
//        console.log(res);

      })

    },
    components: {
      commonNav
    },
    computed: {

    },
    methods: {
      fetchData(data, cb){
        const me = this;
        data.route = 'mapi/order';
        data.format = 'jsonp';

        this.$http.jsonp(
          window.q.interfaceHost +'index.php?',
          {
            params: data
          }
        ).then( res => {
          let data = res.body;
          console.log(data);
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


    },
    mounted() {

    },
    watch: {

    }
  }
</script>
