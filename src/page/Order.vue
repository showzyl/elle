<template>
  <div class="order">

    <div class="orderdetail" v-if="content === 'detail'">
      <div class="detailNav">
        <i class="iconBack" @click="content = 'main'"></i>
        <h2 class="title">
          订单详情
        </h2>
      </div>
      <div class="section bbgray">
        <h3 class="userName">
          {{datailData.shipping_firstname}} &nbsp
          {{datailData.shipping_telephone}}
        </h3>
        <div class="address">
          <i class="iconAdd"></i> &nbsp
          {{datailData.shipping_address}}
        </div>
      </div>
      <ul class="section statusBox">
        <li class="status" v-if="datailData.order_status === 'unpaid'">
          订单状态: 待支付
        </li>
        <li class="status" v-if="datailData.order_status === 'canceled'">
          订单状态: 已取消
        </li>
        <li class="status" v-if="datailData.order_status === 'unshipped'">
          订单状态: 待发货
        </li>
        <li class="detail">
          <p>订单编号: {{datailData.order_id}}</p>
          <p>订单创建时间: {{datailData.date_added}}</p>
        </li>
        <li class="dispatch">
          <p>配送方式: {{datailData.shipping_method}}</p>
          <p>配送时间: 工作日</p>
          <p>发票名称: 个人</p>
        </li>
      </ul>

      <div class="section">
        <div class="titleBox">
          <span class="orderTit">订单商品</span>
          <span class="orderNum">共 1 件</span>
        </div>
        <ul class="orderMain">
          <li class="orderMainLi" v-for="product in datailData.products">
            <div class="imgBox">
              <img :src="product.image">
            </div>
            <div class="contentBox">
              <p class="price">¥{{product.total}}</p>
              <p class="spec">{{product.name}}</p>
              <p class="desc">颜色[{{product.color}}] 尺码[{{product.option.value}}]</p>
              <p class="number">数量 {{product.quantity}}</p>
            </div>
          </li>
        </ul>
      </div>

      <ul class="section">
        <li class="orderDetailItem">
          <span class="name">商品合计</span>
          <span class="price">￥{{datailData.shipping_totle_price}}</span>
        </li>
        <li class="orderDetailItem">
          <span class="name">商品运费</span>
          <span class="price">￥{{datailData.shipping_price}}</span>
        </li>
        <!--<li class="orderDetailItem">-->
        <!--<span class="name">优惠券</span>-->
        <!--<span class="price">￥10</span>-->
        <!--</li>-->
      </ul>

      <div class="section allPrice">￥{{datailData.shipping_totle_price}}</div>


    </div>

    <div class="" v-if="content === 'main'">
      <commonNav title="全部订单" iconRight="" />
      <ul class="orderTab">
        <li class="orderTabLi" :class="{on: tabIndex === i}" v-for="(item,i) in aTab" @click="checkTab(i)">
          <a href="javascript:;">{{item}}</a>
        </li>
      </ul>
      <div class="orderContent">
        <ul class="orderList" v-if="tabIndex === 0">
          <li class="orderItem" v-for="(item,i) in list0">
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
              <div class="btnCheckDetail" v-if="item.order_status === 'unpaid'" style="margin-right: 2.4rem;">
                取消订单
              </div>
              <div class="btnCheckDetail" v-if="item.order_status === 'unpaid'">
                付款
              </div>
              <div class="btnCheckDetail" @click="checkDetail(item)" v-else>
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
              <div class="btnCheckDetail" v-if="item.order_status === 'unpaid'" style="margin-right: 2.4rem;">
                取消订单
              </div>
              <div class="btnCheckDetail" v-if="item.order_status === 'unpaid'">
                付款
              </div>
              <div class="btnCheckDetail" @click="checkDetail(item)" v-else>
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

  </div>
</template>

<style media="screen" lang="scss" scoped>

  .commonNav{
    position: absolute;
  }

  .orderdetail{
    background-color: #ffffff;
  }

  .detailNav{
    height: 1.2rem;
    line-height: 1.2rem;
    text-align: center;
    border: 1px solid #d7d7d5;
    border-right: 0 none;
    border-left: 0 none;
    position: relative;
    .iconBack{
      position: absolute;
      display: block;
      background-image: url(../assets/img/backbtn.png);
      background-repeat: no-repeat;
      background-size: contain;
      height: 25px;
      width: 28px;
      margin: .4rem;
    }
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

  .orderMainLi{
    padding: .3rem 0;
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
  import util from '../assets/lib/q.util.js'

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
        list3: [],
        datailData: {}
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


      util.fetchInterface(me, 0, {
        customer_id,
        mobile_token,
        route: 'mapi/order'
      }, function (res) {
        if(res === 'notMatch'){
          Toast({
            message: '暂无数据...',
            duration: 3000
          });
          return;
        }
        if(res === 'notMatch'){
          Toast('网络错误...');
          return;
        }
        me.list0 = res.orders;
      });

      setTimeout(function() {
        [1,2,3].forEach(function(item){
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

          util.fetchInterface(me, 0, {
            customer_id,
            mobile_token,
            type,
            route: 'mapi/order'
          }, function (res) {
            if(res === 'notMatch'){
              Toast({
                message: '暂无数据...',
                duration: 3000
              });
              return;
            }
            if(res === 'notMatch'){
              Toast('网络错误...');
              return;
            }
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
      checkTab(index){
        console.log(index);
        this.tabIndex = index;
      },
      checkDetail(info){
        const me = this;
        document.body.scrollTop = 0;
        me.content = 'detail';
        me.datailData = info.infos;
      }

    },
    mounted() {

    },
    watch: {

    }
  }
</script>
