
<template>
  <div class="pay">
    <commonNav title="选择支付方式" iconRight="" />
    <h2 class="payTit">选择支付方式</h2>

    <ul class="addBottom">
      <li class="payWay ali" :class="{on: tab==='ali'}">
        <label class="mint-checklist-label">
          <span class="name">支付宝</span>
          <input type="radio" class="mint-checkbox-input" v-if="tab==='ali'" checked name="t" >
          <input type="radio" class="mint-checkbox-input" v-else name="t" >
          <span class="mint-checkbox-core"></span>
        </label>
      </li>
      <li class="payWay weixin" :class="{on: tab==='weixin'}">
        <label class="mint-checklist-label">
          <span class="name">微信</span>
          <input type="radio" class="mint-checkbox-input" v-if="tab==='weixin'" checked name="t" >
          <input type="radio" class="mint-checkbox-input" v-else name="t" >
          <span class="mint-checkbox-core"></span>
        </label>
      </li>
    </ul>
    
    <div class="countBox">
      <div class="iconLock">
        <img src="" alt="">
      </div>
      <h3 class="tit colerRed">29分29秒</h3>
      <p class="desc">
        您的订单已提交,请您在30分钟之内完成支付,超时订单将自动取消.
      </p>
    </div>


    <ul class="btnGroup">
      <li class="btn btnCancel">取消订单</li>
      <li class="btn btnPay colerRed">付款</li>
    </ul>

  </div>
</template>
<style media="screen" lang="scss" scoped>

  .pay{
    .commonNav{
      position: relative;
    }
    .payTit{
      background-color: #d7d7d5;
      color: #7b7b7b;
      font-size: .45rem;
      padding: .2rem 0 .2rem .4rem;
    }
    .addBottom {
      .mint-checklist-label{
        width: 100%;
      }
      .mint-checkbox-core{
        float: right;
        margin: 0 1rem 0 0;
        width: 20px;
        height: 20px;
      }
      .mint-checkbox-core::after{
        top: 3px;
        left: 6px;
      }
    }
  }

  .payWay{
    width: 100%;
    padding: .4rem 0;
    font-size: .45rem;
    border-bottom: 1px solid #d7d7d5;
    overflow: hidden;
  }

  .payWay.on{
    font-weight: bold;
  }

  .colerRed{
    color: red;
  }

  .countBox{
    margin: 4rem 0 1rem 0;
    text-align: center;
    .tit{
      font-size: .6rem;
      margin: .4rem 0;
    }
    .desc{
      font-size: .35rem;
    }

  }

  .btnGroup{
    display: -webkit-box;
    .btn{
      -webkit-box-flex: 1;
      margin: 0 .2rem;
    }
  }

</style>
<script lang="babel">
  import { Toast, Indicator } from 'mint-ui'
  import commonNav from '../components/commonNav.vue'

  export default {
    data(){
      return {
        tab: 'ali'
      }
    },
    created(){
      const me = this;

      me.fetchCouponData({}, res => {
        console.log(res);
      })

    },
    components: {
      commonNav
    },
    computed: {

    },
    methods: {
      fetchCouponData(data, cb){
        const me = this;
        data.route = 'mapi/coupon'; // 可领取
        // mapi/coupon/get  领取
        // mapi/coupon/getList 个人优惠券列表接口
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
