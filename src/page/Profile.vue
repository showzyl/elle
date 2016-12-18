<template>
  <div class="profile">

    <div class="main" v-if="tab === 'content'">
      <div class="profileTop">
        <!-- 背景图做高斯模糊 -->
        <div class="profileTopBg" :style="'background-image: url('+info.headimgurl+')'"></div>
        <div class="headImg">
          <a @click.prevent="tab = 'personal'">
            <img alt="headImg" :src="info.headimgurl" v-if="info.headimgurl">
            <img alt="headImg" src="../assets/img/profile/touxiang.png" v-else>
          </a>
        </div>

        <h3 class="userName">{{info.firstname}}</h3>

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
          <span class="txt" v-if="info.cart_count">{{info.cart_count}}</span>
          <span class="txt" v-else>0</span>
          <br>
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

      <ul class="hotBox ">
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
            <span class="num" v-if="info.remaining_total">￥{{info.remaining_total}}</span>
            <span class="num" v-else>暂无数据</span>
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

    <div class="personal" v-if="tab === 'personal'">
      <!--<commonNav title="个人资料" iconRight="" />-->

      <div class="personalNav">
        <i class="iconBack" @click="tab = 'content'"></i>
        <h2 class="title">个人资料</h2>
      </div>

      <div class="personalHead">
        <div class="headImg">
          <img :src="info.headimgurl" v-if="info.headimgurl" class="iconImg">
          <img src="../assets/img/profile/touxiang.png" v-else class="iconImg">
          <i class="iconRedPen"></i>
        </div>
      </div>

      <ul class="personalList">
        <li class="personItem">
          <a href="">
            <i class="iconUserName"></i>
            <span class="name">{{info.firstname}}</span>
          </a>
        </li>
        <li class="personItem">
          <a href="">
            <i class="iconTel"></i>
            <span class="name">{{info.telephone}}</span>
          </a>
        </li>
        <li class="personItem">
          <a href="">
            <i class="iconMail"></i>
            <span class="name">{{info.email}}</span>
          </a>
        </li>
      </ul>
    </div>


  </div>
</template>

<style media="screen" scoped>

  .profile{

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
    z-index: -1;
    /*background: #fff;
    opacity: .2;*/
    -webkit-filter: blur(10px); /* Chrome, Opera */
       -moz-filter: blur(10px);
        -ms-filter: blur(10px);
            filter: blur(10px);
    filter: progid:DXImageTransform.Microsoft.Blur(PixelRadius=10, MakeShadow=false); /* IE6~IE9 */
  }
  .profileTop{
    /*background-image: url('../assets/img/profileBg1.jpg');*/
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
    width: 22px;
    height: 20px;
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

  .personal .personalHead{
    /*margin-top: 1.5rem;*/
    position: relative;
    height: 4rem;
    border-top: 1px solid;
  }

  .personalHead .headImg{
    width: 2.6rem;
    height: 2.6rem;
    border-radius: 50%;
    background-color: #fff;
    position: absolute;
    left: 50%;
    margin: .4rem 0 .4rem -1.3rem;
  }

  .personalHead .iconImg{
    border-radius: 50%;
  }

  .iconRedPen{
    position: absolute;
    bottom: 0;
    right: 0;
    display: inline-block;
    background-image: url(../assets/img/profile/headpen@3x.png);
    background-size: cover;
    width: .3rem;
    height: .3rem;
  }

  .personalList{
    border-bottom: 1px solid #d7d7d5;
  }

  .personItem{
    padding: .3rem .8rem;
    font-size: .4rem;
  }

  .iconUserName, .iconTel, .iconMail{
    display: inline-block;
    width: .6rem;
    height: .6rem;
    background-size: cover;
    vertical-align: middle;
  }

  .iconUserName{
    background-image: url(../assets/img/profile/name@3x.png);
  }

  .iconTel{
    background-image: url(../assets/img/profile/phone@3x.png);
  }

  .iconMail{
    background-image: url(../assets/img/profile/email@3x.png);
  }

  .personItem .name{
    margin-left: .8rem;
  }

  .personalNav{
    height: 1.2rem;
    line-height: 1.2rem;
    text-align: center;
    border: 1px solid #d7d7d5;
    border-right: 0 none;
    border-left: 0 none;
    position: relative;
  }

  .iconBack{
    position: absolute;
    display: block;
    background-image: url(../assets/img/backbtn.png);
    background-repeat: no-repeat;
    background-size: contain;
    height: 0.6rem;
    width: 0.8rem;
    top: 33%;
    left: 3%;
  }

  .personItem a{
    display: block;
  }

</style>

<script>
//  import { mapState } from 'vuex'
  import commonNav from '../components/commonNav.vue'
  import recommend from '../components/recommend.vue'
  import footBar from '../components/footBar.vue'
  import { Toast, Indicator } from 'mint-ui'
  import store from '../assets/lib/q.store.js'

  const customer_id = store.get('customer_id');
  const mobile_token = store.get('mobile_token');

  export default {
    created(){
      const me = this;

      me.fetchData({
        customer_id
      }, res => {
        console.log(res);
        let info = res.info;
        info.cart_count = res.cart_count;
        info.remaining_total = res.remaining_total;
        me.info = info;
      })
    },
    components: {
      commonNav,
      recommend,
      footBar
    },
    data () {
      return {
        tab: 'personal',
        myform: {},
        info: {

        }
      }
    },
    methods: {
      onSubmit: function() {
//        console.log(this.myform.$valid);
//        if(this.myform.$valid==true)
//            alert("提交成功");
      },
      fetchData(data, cb){
        const me = this;
        data.route = 'mapi/account';
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
          me.loading = false;
          Indicator.close();
        }, err => {
          Indicator.close();
          me.loading = false;
          //console.log(res)
          Toast('网络错误...')
        })
      }
    }
  }
</script>
