<template>
<div class="login">
  <commonNav title="注册"/>
  <ul class="inputGroup">
    <li class="inputBox">
      <input type="tel" name="user" value="" placeholder="手机号" class="inputTxt">
    </li>
    <li class="inputBox">
      <input type="password" name="pass" value="" placeholder="请输入6-16位字符密码" class="inputTxt">
    </li>
    <li class="inputBox">
      <input type="password" name="pass" value="" placeholder="确认密码" class="inputTxt">
    </li>
    <li class="inputBox verifycode">
      <input type="password" name="pass" value="" placeholder="验证码" class="inputTxt">
      <span class="getCode" @click='getCode'>www</span>
    </li>
    <li class="mailReg">
      <span>您还可以使用 <a href="#"> 邮箱注册</a></span>
    </li>
  </ul>

  <ul class="choseGroup">
    <li class="choseGroupLi">
      <!-- <mt-checklist
      v-model="value"
      :options="['梨子', '香蕉']" /> -->
      <!-- <mt-cell title="标题文字"></mt-cell> -->
      <span class="choseIcon choseIconChose"></span>
      <span class="choseTxt">同意服务条款</span>
    </li>
    <li class="choseGroupLi">
      <span class="choseIcon choseIconChose"></span>
      <span class="choseTxt">本人在18岁以上</span>
    </li>
    <li class="choseGroupLi">
      <span class="choseIcon choseIconChose"></span>
      <span class="choseTxt">同意接收电子邮件</span>
    </li>
  </ul>

  <div class="regBtnGroup" >
    <div class="btn btn-black" @click='fnReg'>
      <span class="txt">
        √
      </span>
    </div>
  </div>


</div>
</template>
<script lang="babel">
import commonNav from '../components/commonNav.vue'
import { Checklist, Cell } from 'mint-ui';
//let nCount = 5

export default {
  data () {
    return {
      nCount: 123,
      value: ['梨子', '香蕉']
    }
  },
  components: {
    commonNav,
    Checklist
  },
  computed: {

  },
  methods: {
    getCode(){
      // let timmer = setInterval(function(){
      //   if(nCount <= 1){
      //     clearInterval(timmer)
      //   }
      //   nCount--
      //   console.log(nCount)
      // }, 1000)
    },
    fnReg(){
      //alert('dianjizhuce')
    },
  },
  mounted() {

  },
  watch: {

  }
}
</script>

<style media="screen" scoped>

.regBtnGroup{
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
}

.mailReg{
  padding: .4rem 0 .4rem 0;
  font-size: .2rem;
}

.mailReg span{
  color: #dddddd;
}

.mailReg a{
  color: black;
}

.verifycode{
  position: relative;
}

.getCode{
  position: absolute;
  right: .5rem;
  top: .5rem;
  font-size: .4rem;
}

.choseIcon{
  display: inline-block;
  width: .54rem;
  height: .6rem;
  background-image: url(../assets/img/choseIcon.png);
  background-size: cover;
  vertical-align: middle;
}

.choseIconChose{
  background-position: -.54rem 0;
}

.choseGroup{

}

.choseGroupLi{
  padding: 0 0 0 .5rem;
  margin-bottom: .2rem;
}

.choseTxt{
  margin-left: .5rem;
  font-size: .35rem;
}

</style>
