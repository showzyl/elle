<template>
  <div class="order">
    <commonNav title="订单" iconRight="" />
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
</template>
<style media="screen" scoped>
  .order{
    background-color: #e5e5e5;
    min-height: 100%;
  }

  .orderList{
    background-color: #fff;
    margin: .3rem .2rem;
    min-height: 100%;
    padding-top: 1.5rem;
  }

  .orderItem{
    padding: .2rem;
  }

  

  .orderList .checkBox{
    position: relative;
    padding: .3rem 0;
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
