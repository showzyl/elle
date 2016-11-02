<template>
<div class="login">
  <commonNav/>
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
    <li class="inputBox">
      <input type="password" name="pass" value="" placeholder="验证码" class="inputTxt">
    </li>
    <li class="mailReg">
      <span>您还可以使用<a href="#"> 邮箱注册</a></span>
    </li>

  </ul>

  <div class="regBtnGroup" >
    <div class="btn btn-black">
      <span class="txt">
        注册
      </span>
    </div>
  </div>


</div>
</template>
<style media="screen" scoped>

.regBtnGroup{
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
}

.mailReg{
  padding: .4rem 0 .4rem .4rem;
  font-size: .2rem;
}

.mailReg span{
  color: #dddddd;
}

.mailReg a{
  color: black;
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
