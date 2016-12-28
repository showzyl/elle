<template>
  <div class="orderdetail">
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
</template>
<style media="screen" lang="scss" scoped>

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


  


  

</style>
<script lang="babel">
import commonNav from '../components/commonNav.vue'

export default {
  components: {
    commonNav
  },
  computed: {

  },
  methods: {

  },
  mounted() {

  },
  watch: {

  }
}
</script>
