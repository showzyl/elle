<template>
  <div class="container">
    <div class="buyer-head clearfloat" >
    <div class="fl">
      <!--<img class="buyer-close" id="buyer_close" src="//www.elleshop.com.cn/catalog/view/theme/mobile/image/buyer-close.jpg">-->
    </div>
    <div class="fl buyer-head-main">
      <div class="clearfloat">
        <div class="fl">
          <img class="buyer-logo" src="../assets/img/logo.png">
        </div>
        <div class="fl">
          <p>ELLESHOP - 我的私人买手</p>
          <p class="elleshop">ELLESHOP</p>
          <p class="buyer-star-w"><img class="buyer-star" src="//www.elleshop.com.cn/catalog/view/theme/mobile/image/buyer-star.jpg"></p>
          <p class="elleshop">获取 - App</p>
        </div>
      </div>
    </div>
    <div class="fr">
      <p class="head-xs" id="iphoneBtn" @click="download"><a href="javascript:;">下载APP</a></p>
    </div>
  </div>
  </div>
</template>

<style media="screen" scoped>
  .container{
    position: fixed;
    top: 0;
    left: 0;
    background-color: #ffffff;
    width: 100%;
    z-index: 999999999;
  }
  .buyer-head {
    /*padding: .20129rem .44283rem .20129rem .20129rem;*/
    padding: .20129rem .44283rem;
    border-bottom: 1px solid #d7d7d5;
    overflow: hidden;
  }

  .clearfloat {
    zoom: 1;
  }

  .buyer-head>div:first-child {
    height: 1.61031rem;
    line-height: 1.61031rem;
  }

  .buyer-close {
    width: .2818rem;
    height: .2818rem;
    margin-right: .24155rem;
    cursor: pointer;
  }

  .buyer-logo {
    width: 1.61031rem;
    height: 1.61031rem;
    margin-right: .12077rem;
  }

  .fl {
    float: left;
  }

  .fr {
    float: right;
  }
  .buyer-head-main p {
    font-family: "PingFangSC Medium", "微软雅黑","Microsoft Yahei";
    font-size: .28986rem;
  }

  .head-xs a {
    font-family: "PingFangSC Medium", "微软雅黑","Microsoft Yahei";
    font-size: .43478rem;
    color: #1f1f1f;
    font-weight: bold;
    height: 1.61031rem;
    line-height: 1.61031rem;
    /*border: 1px solid;*/
    /*border-radius: 50%;*/
    /*padding: .3rem;*/
  }

  .buyer-star {
    width: 1.24799rem;
    height: .24155rem;
  }


</style>

<script lang="babel">

  import { TabContainer, TabContainerItem } from 'mint-ui'
  import util from '../assets/lib/q.util.js'

  export default {
    data() {
      return {

      }
    },
    created(){

    },
    components: {

    },
    computed: {

    },
    methods: {
      download(){
        util.download();
      },
      rmDownload(){
        util.getEl('.buyer-head').style.display = 'none';
      }
    },
    mounted() {

    },
    watch: {

    }
  }
</script>