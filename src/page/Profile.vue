<template>

    <div class="profile">
      <!--<commonNav title="梨子" />-->
      <div class="header">

      </div>
      <!-- 背景图做高斯模糊 -->
      <!--<div class="profileTopBg" style="background-image: url('http://p5.qhimg.com/t01272aeeb0365c41dd.png')"></div>-->

      <div class="profileTop ">
        <div class="headImg">
          <router-link to="/personal">
            <img alt="headImg" src="../assets/img/profile/touxiang.png">
          </router-link>
        </div>

        <h3 class="userName">梨子o</h3>

        <div class="member">
          <span class="memberIcon blueMemberIcon"></span>
          <div class="memberTxt blueMember">
            BlueMember <br>
            蓝色会员
          </div>
        </div>

      </div>

      <div class="collectBox ">
        <router-link to="/collect">
          <span class="loveIcon"></span><br>
          我的收藏
        </router-link>

        <a href="">
          <span class="txt">1212121</span><br>
          浏览记录
        </a>
      </div>

      <div class="orderBox ">
        <h3 class="tit">我的订单</h3>
        <span class="orderCheck">
          <router-link to="/order">
            查看全部订单
            <i class="iconRight"></i>
          </router-link>
        </span>
      </div>

      <ul class="hotBox none">
        <li class="hotItem">
          <i class="hotIcon obligationIcon"></i>
          <h3 class="txt">待付款</h3>
          <span class="num">12</span>
        </li>
        <li class="hotItem">
          <i class="hotIcon orderIcon"></i>
          <h3 class="txt">待发货</h3>
        </li>
        <li class="hotItem">
          <i class="hotIcon receivedIcon"></i>
          <h3 class="txt">待发货</h3>
        </li>
        <li class="hotItem">
          <i class="hotIcon evaluationIcon"></i>
          <h3 class="txt">待评价</h3>
        </li>
        <li class="hotItem">
          <i class="hotIcon refundIcon"></i>
          <h3 class="txt">退款</h3>
        </li>
      </ul>

      <div class="bgGray"></div>

      <div class="property">
        <h3 class="title">
          我的资产
        </h3>

        <div class="account">
          <div class="accountLeft">
            <p class="tit">账户余额</p>
            <span class="num">￥1000</span>
          </div>
          
          <div class="accountRight">
            <ul class="cheapList">
              <li class="cheapItem">
                <router-link to="/">
                  <i class="cheapicon couponsIcon"></i>
                  <span class="txt">优惠券</span>
                </router-link>
              </li>
              <li class="cheapItem">
                <router-link to="/">
                  <i class="cheapicon giftCardIcon"></i>
                  <span class="txt">礼品卡</span>
                </router-link>
              </li>
            </ul>
          </div>
        </div>
        
      </div>

      <div class="bgGray"></div>

      <ul class="manageList">
        <li class="manageItem">
          <router-link to="/qa">
            <h3 class="tit">MY Q&A</h3>
            <i class="iconRight"></i>
          </router-link>
        </li>

        <li class="manageItem">
          <router-link to="/address">
            <h3 class="tit">地址</h3>
            <i class="iconRight"></i>
          </router-link>
        </li>

        <li class="manageItem">
          <router-link to="/invoice">
            <h3 class="tit">发票</h3>
            <i class="iconRight"></i>
          </router-link>
        </li>

      </ul>

      <footBar pageName="profile" />



    </div>
</template>

<style media="screen" scoped>

  .profile{

  }

  .header{

  }

  .fl{
    float: left;
  }
  .fr{
    float: right;
  }

  .blueMember{
    color: #3998e1;
  }

  .profileTopBg{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 5.5rem;
    /*background: #fff;
    opacity: .2;*/
    -webkit-filter: blur(10px); /* Chrome, Opera */
       -moz-filter: blur(10px);
        -ms-filter: blur(10px);
            filter: blur(10px);
    filter: progid:DXImageTransform.Microsoft.Blur(PixelRadius=10, MakeShadow=false); /* IE6~IE9 */
  }
  .profileTop{
    background-image: url('../assets/img/profileBg1.jpg');
    height: 5.5rem;
    background-size: cover;
    overflow: hidden;
    position: relative;
  }
  .headImg{
    width: 2.6rem;
    height: 2.6rem;
    border-radius: 50%;
    background-color: #fff;
    float: left;
    margin: 1.3rem .5rem;
  }
  .headImg img{
    /*padding: .2rem;*/
    /*margin: .2rem;*/
    border-radius: 50%;
  }
  .userName{
    float: left;
    margin-top: 2.3rem;
    font-size: .5rem;
  }

  .member{
    position: absolute;
    right: .4rem;
    bottom: 1rem;
    overflow: auto;
  }

  .memberIcon{
    display: inline-block;
    width: .85rem;
    height: 1rem;
    background-size: cover;
    float: left;
    margin-right: .2rem;
  }

  .blueMemberIcon{
    background-image: url('../assets/img/profile/grade_01@3x.png');
  }

  .grayMemberIcon{
    background-image: url('../assets/img/profile/grade_02@3x.png');
  }

  .yellowMemberIcon{
    background-image: url('../assets/img/profile/grade_03@3x.png');
  }

  .memberTxt{
    float: right;
    line-height: .5rem;
    font-size: .36rem;
  }

  /*.collectBoxBg{
    position: absolute;
    top: 5.5rem;
    width: 100%;
    height: 1rem;
    background-color: #000000;
    z-index: -1;
  }*/

  .collectBox{
    display: -webkit-box;
    background-color: #000000;
  }

  .collectBox a{
    display: block;
    -webkit-box-flex: 1;
    text-align: center;
    color: #fff;
    font-size: .36rem;
    padding: .2rem;
    line-height: .5rem;
  }

  .collectBox span{
    /*display: block;*/
  }

  .collectBox .txt{
    display: inline-block;
    height: .55rem;
  }

  .loveIcon{
    background-image: url(../assets/img/profile/icon_fucus@3x.png);
    background-size: cover;
    width: .5rem;
    height: .42rem;
    display: inline-block;
  }

  .orderBox{
    overflow: hidden;
    height: 1rem;
    line-height: 1rem;
    border-bottom: 1px solid #d7d7d5;
  }

  .orderBox .tit{
    float: left;
    font-size: .45rem;
    margin-left: .6rem;
  }

  .orderBox .orderCheck{
    float: right;
    margin-right: .6rem;
    color: #9c9c9b;
  }

  .iconRight{
    display: inline-block;
    width: .3rem;
    height: .3rem;
    background-size: cover;
    background-image: url('../assets/img/profile/mine_right@3x.png');
  }

  .hotBox{
    display: -webkit-box;
    margin: .3rem;
  } 

  .hotItem{
    -webkit-box-flex: 1;
    text-align: center;
    position: relative;
  }

  .hotItem .num{
    line-height: .5rem;
    width: .5rem;
    height: .5rem;
    border-radius: 50%;
    display: inline-block;
    position: absolute;
    top: 1%;
    right: 50%;
    margin-right: -.6rem;
    background-color: red;
    color: #fff;
    font-size: 12px;
  }

  .hotIcon{
    display: block;
    width: .58rem;
    height: .5rem;
    /*background-color: red;*/
    margin: .26rem auto .2rem;
    background-size: cover;
  }

  .obligationIcon{
    background-image: url('../assets/img/profile/mine_wait1@3x.png');
  }

  .orderIcon{
    background-image: url('../assets/img/profile/mine_wait2@3x.png');
  }

  .receivedIcon{
    background-image: url('../assets/img/profile/mine_wait3@3x.png');
  }
  
  .evaluationIcon{
    background-image: url('../assets/img/profile/mine_wait4@3x.png');
  }

  .refundIcon{
    background-image: url('../assets/img/profile/mine_wait4@3x.png');
  }

  .bgGray{
    height: .2rem;
    background-color: #d7d7d5;
  }

  .property{
    overflow: auto;
    margin-bottom: .2rem;
  }

  .property .title{
    font-size: .4rem;
    font-weight: 400;
    height: 1rem;
    line-height: 1rem;
    padding-left: .6rem;
    border-bottom: 1px solid #d7d7d5;
  }

  .account .tie{
    font-size: .1rem;
  }

  .accountLeft .num{
    font-size: .45rem;
  }

  .accountLeft .tit{
    text-align: center;
    margin: .2rem 0 .2rem 0;
  }

  .accountLeft{
    float: left;
    margin: .2rem 0 0 .6rem;
  }

  .accountRight{
    float: right;
    /*position: absolute;
    right: 0;
    top: 50%;*/
  }

  .cheapList{
    display: -webkit-box;
  }

  .cheapItem{
    -webkit-box-flex: 1;
    text-align: center;
    margin: 0 .5rem 0 0;
  }

  .cheapicon{
    display: block;
    width: .8rem;
    height: .56rem;
    /*background-color: red;*/
    margin: .26rem auto .2rem;
    background-size: cover;
  }

  .couponsIcon{
    background-image: url('../assets/img/profile/mine_couponsN@3x.png');
  }

  .giftCardIcon{
    background-image: url('../assets/img/profile/mine_giftcard@3x.png');
  }

  .manageList{
    /*border-bottom: 1px solid #d7d7d5;  */
    
  }

  .manageItem{
    /*padding: .4rem .6rem;*/
    overflow: hidden;
    border-bottom: 1px solid #d7d7d5;
    position: relative;
  }

  .manageItem a{
    display: inline-block;
    width: 100%;
    height: 100%;
    padding: .4rem .6rem;
  }

  .manageList .tit{
    float: left;
  }

  .account .iconRight{
    float: right;
  }

  .manageList .iconRight{
    right: .5rem;
    position: absolute;
  }





</style>

<script>
  import { mapState } from 'vuex'
  import commonNav from '../components/commonNav.vue'
  import recommend from '../components/recommend.vue'
  import footBar from '../components/footBar.vue'
  


  import { Toast, Indicator } from 'mint-ui'

  export default {
    props: {

    },
    created(){

    },
    components: {
      commonNav,
      recommend,
      footBar
    },
    data () {
      return {
        msg: 'profile',
        myform: {},
        model: {}
      }
    },
    methods: {
      onSubmit: function() {
        console.log(this.myform.$valid);
        if(this.myform.$valid==true)
            alert("提交成功");
      }
    }
  }
</script>
