<template>
  <div class="shopcar">
    <div class="shopcarTop">
        <img src="../assets/img/shopcart.png" alt="" class="shopcarImg"/>
        <h3 class="emptyTxt">
          您的购物车暂无商品
        </h3>
    </div>


  </div>
</template>

<script>
import { mapState } from 'vuex'
import { Toast, Indicator } from 'mint-ui'

export default {
  props: {

  },
  components: {

  },
  data () {
    return {
      msg: 'shopcar'
    }
  },
  methods: {
    test1(){


    }
  }
}
</script>

<style media="screen" scoped>
  .shopcar{

  }
  .shopcarTop{
    height: 6rem;
    text-align: center;
    vertical-align: middle;
    border-bottom: 1px solid #dddddd;
    /*display: flex;
    display: -webkit-flex;
    -webkit-align-items: center;
    align-items: center;
    -webkit-justify-content: center;
    justify-content: center;*/
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
</style>
