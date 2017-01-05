<template>
  <div >
    <div class="confirmOrder" v-if="tab ==='confirmOrder'">
      <commonNav title="确认订单" iconRight="" />

      <ul class="confirmList">

        <li class="confirmItem address" >

          <div v-if="!address">
            请选择您的收货地址
          </div>

          <div v-if="address && address.firstname">
            <h3>
              {{address.firstname}} {{address.custom_field[1]}}
            </h3>
            <p>
              <i class="iconAdd"></i>&nbsp;
              {{address.country}} {{address.zone}} {{address.city}}
            </p>
          </div>

          <i class="iconRight"></i>
        </li>


        <li class="confirmItem productImg">
          <ul class="productImgL">
            <li class="imgBox" v-for="item in products">
              <img :src="item.thumb">
            </li>
          </ul>
          <p class="productImgR">
            共{{products.length}}件
          </p>
          <i class="iconRight"></i>
        </li>

        <li class="confirmItem coupon none">
          <h3 class="confirmItemL">优惠券</h3>
          <p class="confirmItemR">选择优惠券</p>
          <i class="iconRight"></i>
        </li>

        <li class="confirmItem balance">
          <h3 class="confirmItemL">账户余额</h3>
          <p class="confirmItemR">¥ {{info.remaining_total}}</p>
        </li>

        <li class="confirmItem dispatchWay">
          <div class="dispatchWayT">
            <h3 class="dispatchWayL">配送方式</h3>
            <p class="dispatchWayR">顺丰快递</p>
          </div>
          <div class="dispatchWayB">
            <h3 class="dispatchWayL">配送时间</h3>
            <select class="dispatchWayR selectBox" v-model="selected">
              <option :value="item.value" v-for="item in delivery">{{item.name}}</option>
            </select>
          </div>
        </li>

        <li class="confirmItem invoice" @click="handleInvoice">
          <h3 class="confirmItemL">发票信息</h3>
          <p class="confirmItemR" v-if="!invoice">无发票</p>
          <p class="confirmItemR" v-if="invoice && invoice.invoice_type === '2' ">{{invoice.title}}</p>
          <p class="confirmItemR" v-if="invoice && invoice.invoice_type === '1' ">无发票</p>
          <i class="iconRight"></i>
        </li>

        <li class="confirmItem conclusion">
          <div class="conclusionBox">
            <h3 class="conclusionL">数量</h3>
            <p class="confirmItemR">1</p>
          </div>
          <div class="conclusionBox">
            <h3 class="conclusionL">合计</h3>
            <p class="confirmItemR">¥ {{info.shipping_totle_price}}</p>
          </div>
        </li>

      </ul>

      <div class="btn btnConfirmOrder" @click="handleConfirm">
          确认
      </div>

    </div>

    <div class="orderdetail" v-if="tab === 'orderdetail'">
      <commonNav title="订单详情" iconRight="" />
      <div class="section bbgray">
        <h3 class="userName">
          {{address.firstname}} {{address.custom_field[1]}}
        </h3>
        <div class="address">
          <i class="iconAdd"></i> &nbsp
          {{address.country}} {{address.zone}} {{address.city}}
        </div>
      </div>
      <ul class="section statusBox">
        <li class="status">
          订单状态: 等待付款
        </li>
        <!--<li class="detail">-->
          <!--<p>订单编号: 21111111111</p>-->
          <!--<p>订单创建时间: 21111111111</p>-->
        <!--</li>-->
        <li class="dispatch">
          <p>配送方式: <span>顺丰快递</span></p>
          <p>配送时间: <span>工作日</span></p>
          <p>发票名称: <span>个人</span></p>
        </li>
      </ul>

      <div class="section">
        <div class="titleBox">
          <span class="orderTit">订单商品</span>
          <span class="orderNum">共 {{products.length}} 件</span>
        </div>
        <ul class="list">

          <li class="orderMain" v-for="item in products">
            <div class="imgBox">
              <img :src="item.thumb">
            </div>
            <div class="contentBox">
              <p class="price">{{item.total}}</p>
              <p class="spec">{{item.name}}</p>
              <!--<p class="desc">我是描述我是描述</p>-->
              <p class="number">数量 {{item.quantity}}</p>
            </div>
          </li>

        </ul>
      </div>

      <ul class="section">
        <li class="orderDetailItem">
          <span class="name">商品合计</span>
          <span class="price">￥{{totals[0].text}}</span>
        </li>
        <li class="orderDetailItem">
          <span class="name">运费</span>
          <span class="price">￥{{totals[1].text}}</span>
        </li>
        <!--<li class="orderDetailItem">-->
          <!--<span class="name">优惠券</span>-->
          <!--<span class="price">￥10</span>-->
        <!--</li>-->
      </ul>

      <div class="section allPrice">￥{{totals[2].text}}</div>

      <div class="btn btnSubmitOrder" @click="submitOrder">提交订单</div>
    </div>
  </div>
</template>

<style media="screen" lang="scss" scoped>

  .btnSubmitOrder{
    position: fixed;
    bottom: 0;

  }

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
      line-height: 4.4rem;
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

  .orderdetail {
    .commonNav{
      position: relative;
    }
    .section{
      margin: .4rem .4rem 0;
      padding: .2rem;
    }
    .userName{
      font-size: .45rem;
    }
    .address{
      font-size: .35rem;
    }
    .statusBox{
      font-size: .35rem;
      li{
        border-bottom: 1px solid;
      }
      li.dispatch{
        border-bottom: 1px solid #d7d7d5;
      }
      .status{
        padding: 0 0 .5rem 0;
      }
      .dispatch{
        padding: .5rem 0;
        span{
          font-weight: bold;
        }
      }
      .detail{
        padding: .3rem 0;
        p{
          padding: .1rem 0;
        }
      }
    }

  }

  .orderTit{
    float: left;
    font-size: .45rem;
  }

  .orderNum{
    float: right;
    font-size: .35rem;
  }

  .orderDetailItem{
    padding: .1rem 0;
    font-size: .35rem;
    .price{
      width: 30%;
    }
  }


  .orderdetail .allPrice{
    text-align: right;
    font-size: .45rem;
    color: red;
    padding: 0 .5rem 2rem 0;
  }

  .orderDetailItem span{
    display: inline-block;
  }

  .orderMain:last-child{
    border-top: 0 none;
  }



</style>

<script lang="babel">

  import commonNav from '../components/commonNav.vue'
  import { Toast, Indicator } from 'mint-ui'
  import store from '../assets/lib/q.store.js'
  import util from '../assets/lib/q.util.js'

  const customer_id = store.get('customer_id');
  const mobile_token = store.get('mobile_token');


  export default {
    data() {
      return {
        tab: 'confirmOrder',
        products: [],
        totals: [],
        address: {},
        invoice: {},
        info: {},
        delivery: [{
          name: '工作日',
          value: 0
        }, {
          name: '周末',
          value: 1
        }, {
          name: '工作日/周末',
          value: 2
        }],
        selected: 0,
        choseAddress: null
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
        me.totals = res.totals;
        me.info = {
          remaining_total: res.remaining_total,
          shipping_totle_price: res.shipping_totle_price
        };
        if(res.address && res.address.address_id){
          me.choseAddress = res.address.address_id;
        }

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
        const me = this;
        if(!me.choseAddress){
          //Toast('请选择收货地址');
          location.href = '/#/adddetail?source=confirmorder';
          return;
        }
        me.tab = 'orderdetail';
      },
      handleInvoice(){

      },
      submitOrder(){
        const me = this;
        util.fetchInterface(me, 0, {
          route: 'mapi/checkoutconfirm',
          mobile_token,
          customer_id
        }, res =>{
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
          location.href = '/#/pay?orderid=';
          console.log(res);
        })
      },

    },
    mounted() {

    },
    watch: {
      selected(val, old){
        console.log(val, old)
      },
    }
  }
</script>
