<template>
  <div class="confirmOrder">
    <commonNav title="确认订单" iconRight="" />

    <ul class="confirmList">
      <li class="confirmItem address">
        <h3>
          梨子 18544444444
        </h3>
        <p>
          <i class="iconAdd"></i>
          四川省成都市雁江区 xxxx
        </p>
        <i class="iconRight"></i>
      </li>

      <li class="confirmItem productImg">
        <ul class="productImgL">
          <li class="imgBox">
            <img src="http://img.elleshop.com.cn/catalog/Operation/fenmojidai/1-12.jpg?imageView2/1/w/307/h/390/format/jpg/interlace/1/q/80/" alt="">
          </li>
          <li class="imgBox">
            <img src="http://img.elleshop.com.cn/catalog/Operation/fenmojidai/1-12.jpg?imageView2/1/w/307/h/390/format/jpg/interlace/1/q/80/" alt="">
          </li>
          <li class="imgBox">
            <img src="http://img.elleshop.com.cn/catalog/Operation/fenmojidai/1-12.jpg?imageView2/1/w/307/h/390/format/jpg/interlace/1/q/80/" alt="">
          </li>
          <li class="imgBox">
            <img src="http://img.elleshop.com.cn/catalog/Operation/fenmojidai/1-12.jpg?imageView2/1/w/307/h/390/format/jpg/interlace/1/q/80/" alt="">
          </li>
          <li class="imgBox">
            <img src="http://img.elleshop.com.cn/catalog/Operation/fenmojidai/1-12.jpg?imageView2/1/w/307/h/390/format/jpg/interlace/1/q/80/" alt="">
          </li>
        </ul>
        <p class="productImgR">
          共8件
        </p>
        <i class="iconRight"></i>
      </li>

      <li class="confirmItem coupon">
        <h3 class="confirmItemL">优惠券</h3>
        <p class="confirmItemR">选择优惠券</p>
        <i class="iconRight"></i>
      </li>

      <li class="confirmItem balance">
        <h3 class="confirmItemL">账户余额</h3>
        <p class="confirmItemR">¥ 0.00</p>
      </li>

      <li class="confirmItem dispatchWay">
        <div class="dispatchWayT">
          <h3 class="dispatchWayL">配送方式</h3>
          <p class="dispatchWayR">顺丰快递</p>
        </div>
        <div class="dispatchWayB">
          <h3 class="dispatchWayL">配送时间</h3>
          <select class="dispatchWayR selectBox">
            <option value="1">工作日</option>
            <option value="2">周六周日</option>
          </select>
        </div>
      </li>

      <li class="confirmItem invoice">
        <h3 class="confirmItemL">发票信息</h3>
        <p class="confirmItemR">无发票</p>
        <i class="iconRight"></i>
      </li>

      <li class="confirmItem conclusion">
        <div class="conclusionBox">
          <h3 class="conclusionL">数量</h3>
          <p class="confirmItemR">1</p>
        </div>
        <div class="conclusionBox">
          <h3 class="conclusionL">合计</h3>
          <p class="confirmItemR">¥ 1111</p>
        </div>
      </li>
      
    </ul>
    
    <div class="btn btnConfirmOrder">
      <router-link to="/ordertail">
        确认
      </router-link>
    </div>
    <!--<div class="address">-->
      <!--<h3>-->
        <!--梨子 18544444444-->
      <!--</h3>-->
      <!--<p>-->
        <!--<i class="iconAdd"></i>-->
        <!--四川省成都市雁江区 xxxx-->
      <!--</p>-->
      <!--<i data-v-ec05f8e2="" class="iconRight"></i>-->
    <!--</div>-->



    <!--<ul>-->
      <!--<li v-for="item in products" style="font-size: 22px;">-->
        <!--{{item.name}}-->
        <!--<span style="color: red;">{{item.quantity}}</span>-->
      <!--</li>-->
    <!--</ul>-->

  </div>
</template>

<style media="screen" lang="scss" scoped>

  .confirmOrder {
    .commonNav{
      position: relative;
    }
    .iconRight{
      position: absolute;
      right: .2rem;
      top: 50%;
      margin-top: -.2rem;
      width: .4rem;
      height: .4rem;
    }
  }

  .confirmItem{
    font-size: .35rem;
    position: relative;
    padding: .4rem;
    overflow: hidden;
    border-top: 1px solid #d7d7d5;
    /*border-bottom: 1px solid #d7d7d5;*/
    .confirmItemL{
      float: left;
      /*display: inline-block;*/
    }
    .confirmItemR{
      float: right;
      margin-right: .2rem;
    }
  }

  .address{
    font-size: .35rem;
    position: relative;
    p{
      font-style: bold;
    }
  }

  .coupon{
    padding: .4rem;
  }

  .productImg{
    height: 3.6rem;
    padding: .4rem 0;
    .productImgL{
      width: 8rem;
      white-space: nowrap;
      overflow: hidden;
      overflow-x: scroll; /* 1 */
      -webkit-backface-visibility: hidden;
      -webkit-perspective: 1000;
      -webkit-overflow-scrolling: touch; /* 2 */
      .imgBox{
        display: inline-block;
        width: 2.8rem;
        padding: 0 0 0 .4rem;
      }
    }
    .productImgR{
      position: absolute;
      right: .65rem;
      top: 0;
      line-height: 4rem;
      font-size: .4rem;
    }
  }

  .dispatchWay{

    .dispatchWayT{
      overflow: hidden;
      padding-bottom: .8rem;
    }

    .dispatchWayL{
      float: left;
    }

    .dispatchWayR{
      float: right;
    }

    .selectBox{
      width: 60%;
      height: .8rem;
      border: 1px solid #d7d7d5;
    }

  }

  .conclusionBox{
    padding-bottom: .4rem;
    overflow: hidden;
    .conclusionL{
      float: left;
    }
    .conclusionR{
      float: right;
    }
  }

  .btnConfirmOrder{
    position: fixed;
    bottom: 0;
  }




</style>

<script lang="babel">

  import commonNav from '../components/commonNav.vue'
  import { Toast, Indicator } from 'mint-ui'
  import store from '../assets/lib/q.store.js'
  import util from '../assets/lib/q.util.js'

  const customer_id = store.get('customer_id')
  const mobile_token = store.get('mobile_token')

  export default {
    data() {
      return {
        products: [],
        address: {},
        invoice: {}
      }
    },
    created(){
      const me = this;

      Indicator.open({
        text: '加载中...',
        spinnerType: 'fading-circle'
      });

      util.fetchInterface(me, 0, {
        route: 'mapi/cart/confirm',
        mobile_token,
        customer_id
      }, res => {
        Indicator.close();
        if(res === 'notMatch'){
          Toast({
            message: '暂无数据...',
            position: 'bottom',
            duration: 3000
          });
          return;
        }

        if(res === 'notMatch'){
          Toast('网络错误...');
          return;
        }

        me.products = res.products;
        me.address = res.address;
        me.invoice = res.invoice;

      })



    },
    components: {
      commonNav
    },
    computed: {

    },
    methods: {
      checkTab(index){
        console.log(index);
        this.tabIndex = index;
      },
      checkDetail(info){
        const me = this;
        document.body.scrollTop = 0;
        me.content = 'detail';
        me.datailData = info.infos;
      },
      handleConfirm(){

        // location.href = '/#/ordertail';
      }

    },
    mounted() {

    },
    watch: {

    }
  }
</script>
