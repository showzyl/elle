<template>

    <div class="profile">
      <!--<commonNav title="梨子" />-->
      <!--<recommend title="为您优选商品" />-->
      <div class="header">
        
      </div>
      <!-- 背景图做高斯模糊 -->

      <!--<div class="profileTopBg" style="background-image: url('http://p5.qhimg.com/t01272aeeb0365c41dd.png')"></div>-->

      <div class="profileTop">
        <div class="headImg">
          <img alt="" src="../assets/img/profile/touxiang.png">
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
      
      <div class="collectBox">
        <a href="">
          <span class="loveIcon"></span><br>
          我的收藏
        </a>
        <a href="">
          <span class="txt">1212121</span><br>
          浏览记录
        </a>
      </div>

      <div class="orderBox">
        <h3 class="tit">我的订单</h3>
        <span class="orderCheck">
          查看全部订单
          <i></i>
        </span>
      </div>


    </div>
</template>

<style media="screen" scoped>

  .profile{
    
  }
  .header{

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
    height: .46rem;
    display: inline-block;
  }

  .orderBox{
    overflow: hidden;
    height: 1rem;
    line-height: 1rem;
  }

  .orderBox .tit{
    float: left;
    font-size: .45rem;
    margin-left: .2rem;
  }
  .orderBox .orderCheck{
    float: right;
    margin-right: .2rem;
    
  }

</style>

<script>
  import { mapState } from 'vuex'
  import commonNav from '../components/commonNav.vue'
  import recommend from '../components/recommend.vue'


  import { Toast, Indicator } from 'mint-ui'

  export default {
    props: {

    },
    created(){
      
    },
    components: {
      commonNav,
      recommend
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


