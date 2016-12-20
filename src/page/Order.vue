<template>
  <div class="order">
    <div class="" v-if="content === 'main' ">
      <commonNav title="全部订单" iconRight="" />
      <ul class="orderTab">
        <li class="orderTabLi" :class="{on: tabIndex === i}" v-for="(item,i) in aTab" @click="checkTab(i)">
          <a href="javascript:;">{{item}}</a>
        </li>
      </ul>
      <div class="orderContent">

        <ul class="orderList" v-if="tabIndex === 0">
          <li class="orderItem" v-for="(item,i) in list0" @click="content='detail'">
            <div class="titleBox">
              <span class="orderNum">订单号: {{item.order_id}}</span>
              <h3 class="orderStatus" v-if="item.order_status === 'unpaid'">待支付</h3>
              <h3 class="orderStatus" v-if="item.order_status === 'canceled'">已取消</h3>
              <h3 class="orderStatus" v-if="item.order_status === 'unshipped'">待发货</h3>
            </div>
            <ul class="orderMain">
              <li class="orderMainLi" v-for="product in item.infos.products">
                <div class="imgBox">
                  <img :src="product.image" alt="">
                </div>
                <div class="contentBox">
                  <p class="price">{{product.total}}</p>
                  <p class="spec">{{product.name}}</p>
                  <p class="desc">颜色[{{product.color}}]尺码[{{product.option[0]['value']}}]</p>
                  <p class="number">数量 {{product.quantity}}</p>
                </div>
              </li>
            </ul>

            <div class="checkBox">
              <p class="price">{{item.total}}</p>
              <p class="number">共 {{item.products}} 件</p>
              <div class="btnCheckDetail">
                查看详情
              </div>
            </div>

          </li>
        </ul>

        <ul class="orderList" v-if="tabIndex === 1">
          <li class="orderItem" v-for="(item,i) in list1">
            <div class="titleBox">
              <span class="orderNum">订单号: {{item.order_id}}</span>
              <h3 class="orderStatus" v-if="item.order_status === 'unpaid'">待支付</h3>
              <h3 class="orderStatus" v-if="item.order_status === 'canceled'">已取消</h3>
              <h3 class="orderStatus" v-if="item.order_status === 'unshipped'">待发货</h3>
            </div>
            <ul class="orderMain">
              <li class="orderMainLi" v-for="product in item.infos.products">
                <div class="imgBox">
                  <img :src="product.image" alt="">
                </div>
                <div class="contentBox">
                  <p class="price">{{product.total}}</p>
                  <p class="spec">{{product.name}}</p>
                  <p class="desc">颜色[{{product.color}}]尺码[{{product.option[0]['value']}}]</p>
                  <p class="number">数量 {{product.quantity}}</p>
                </div>
              </li>
            </ul>

            <div class="checkBox">
              <p class="price">{{item.total}}</p>
              <p class="number">共 {{item.products}} 件</p>
              <div class="btnCheckDetail">
                查看详情
              </div>
            </div>

          </li>
        </ul>

        <ul class="orderList" v-if="tabIndex === 2">
          <li class="orderItem" v-for="(item,i) in list2">
            <div class="titleBox">
              <span class="orderNum">订单号: {{item.order_id}}</span>
              <h3 class="orderStatus" v-if="item.order_status === 'unpaid'">待支付</h3>
              <h3 class="orderStatus" v-if="item.order_status === 'canceled'">已取消</h3>
              <h3 class="orderStatus" v-if="item.order_status === 'unshipped'">待发货</h3>
            </div>
            <ul class="orderMain">
              <li class="orderMainLi" v-for="product in item.infos.products">
                <div class="imgBox">
                  <img :src="product.image" alt="">
                </div>
                <div class="contentBox">
                  <p class="price">{{product.total}}</p>
                  <p class="spec">{{product.name}}</p>
                  <p class="desc">颜色[{{product.color}}]尺码[{{product.option[0]['value']}}]</p>
                  <p class="number">数量 {{product.quantity}}</p>
                </div>
              </li>
            </ul>

            <div class="checkBox">
              <p class="price">{{item.total}}</p>
              <p class="number">共 {{item.products}} 件</p>
              <div class="btnCheckDetail">
                查看详情
              </div>
            </div>

          </li>
        </ul>

        <ul class="orderList" v-if="tabIndex === 3">
          <li class="orderItem" v-for="(item,i) in list3">
            <div class="titleBox">
              <span class="orderNum">订单号: {{item.order_id}}</span>
              <h3 class="orderStatus" v-if="item.order_status === 'unpaid'">待支付</h3>
              <h3 class="orderStatus" v-if="item.order_status === 'canceled'">已取消</h3>
              <h3 class="orderStatus" v-if="item.order_status === 'unshipped'">待发货</h3>
            </div>
            <ul class="orderMain">
              <li class="orderMainLi" v-for="product in item.infos.products">
                <div class="imgBox">
                  <img :src="product.image" alt="">
                </div>
                <div class="contentBox">
                  <p class="price">{{product.total}}</p>
                  <p class="spec">{{product.name}}</p>
                  <p class="desc">颜色[{{product.color}}]尺码[{{product.option[0]['value']}}]</p>
                  <p class="number">数量 {{product.quantity}}</p>
                </div>
              </li>
            </ul>

            <div class="checkBox">
              <p class="price">{{item.total}}</p>
              <p class="number">共 {{item.products}} 件</p>
              <div class="btnCheckDetail">
                查看详情
              </div>
            </div>

          </li>
        </ul>

      </div>
    </div>

    <div class="orderdetail" v-if="content === 'detail'">
      <commonNav title="订单详情" iconRight="" />
      <div class="section bbgray">
        <h3 class="userName">
          梨子 &nbsp
          18512299394
        </h3>
        <div class="address">
          <i class="iconAdd"></i> &nbsp
          北京市西城区前门西大街
        </div>
      </div>
      <ul class="section statusBox">
        <li class="status">
          订单状态: 已取消
        </li>
        <li class="detail">
          <p>订单编号: 21111111111</p>
          <p>订单创建时间: 21111111111</p>
        </li>
        <li class="dispatch">
          <p>配送方式: 21111111111</p>
          <p>配送时间: 21111111111</p>
          <p>发票名称: 个人</p>
        </li>
      </ul>

      <div class="section">
        <div class="titleBox">
          <span class="orderTit">订单商品</span>
          <span class="orderNum">共 1 件</span>
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
      </div>

      <ul class="section">
        <li class="orderDetailItem">
          <span class="name">商品合计</span>
          <span class="price">￥128</span>
        </li>
        <li class="orderDetailItem">
          <span class="name">商品运费</span>
          <span class="price">￥1</span>
        </li>
        <li class="orderDetailItem">
          <span class="name">优惠券</span>
          <span class="price">￥10</span>
        </li>
      </ul>

      <div class="section allPrice">￥105</div>


    </div>

  </div>
</template>

<style media="screen" lang="scss" scoped>

  .commonNav{
    position: absolute;
  }

  .orderTab{
    display: -webkit-box;
    margin-top: 1.5rem;
    background-color: #ffffff;
    .orderTabLi{
      -webkit-box-flex: 1;
      text-align: center;
      font-size: .4rem;
      a{
        display: inline-block;
        line-height: 1.2rem;
      }
    }
    .orderTabLi.on{
      a{
        border-bottom: 1px solid #000000;
      }
    }
  }

  .orderMain{
    padding: 0;
  }

  .order{
    background-color: #e5e5e5;
    min-height: 100%;
  }

  .orderContent{
    margin: 0 .3rem;
    padding-top: .3rem;
  }

  .orderList{
    padding-bottom: .3rem;
    min-height: 100%;
    .checkBox{
      position: relative;
      padding: .3rem 0;
    }
  }

  .orderItem{
    padding: .2rem;
    margin-bottom: .3rem;
    background-color: #fff;
  }

  .orderMain{
    .orderMainLi{
      border-bottom: 1px solid ;
      padding: .3rem 0;
      overflow: hidden;
    }
    .orderMainLi:last-child{
      border-bottom: 0 none;
    }
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

  .orderdetail {
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
      }
      .detail{
        padding: .3rem 0;
        p{
          padding: .1rem 0;
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
        content: 'main',
        aTab: ['全部订单','待付款','待发货','待收货'],
        tabIndex: 0,
        list0: [],
        list1: [],
        list2: [],
        list3: []

      }
    },
    created(){
      const me = this;
      if(me.$route.query.tab){
        me.tabIndex = Number(me.$route.query.tab);
      }

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
        me.list0 = res.orders;
      })

      setTimeout( ()=> {
        [1,2,3].forEach(item => {
          let type = '';

          switch (item){
            case 1:
              type = 'unpaid';
              break;
            case 2:
              type = 'unshipped';
              break;
            case 3:
              type = 'shipped';
              break;
          }

          me.fetchData({
            customer_id,
            mobile_token,
            type
          }, res => {
            console.log(res);
            me['list' + item] = res.orders;
          })

        })
      }, 200)



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
//          console.log(data);
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
      checkTab(index){
        console.log(index);
        this.tabIndex = index;
      }

    },
    mounted() {

    },
    watch: {

    }
  }
</script>
