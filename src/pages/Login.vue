<template>
<div class="login">
  <commonNav/>
  <ul class="inputGroup">
    <li class="inputBox">
      <input type="text" name="user" value="" placeholder="手机号 / 邮箱" class="inputTxt">
    </li>
    <li class="inputBox">
      <input type="password" name="pass" value="" placeholder="密码" class="inputTxt">
    </li>
  </ul>

  <div class="btnGroup">
    <div class="btn btn-black">
      <span class="txt">
        登录
      </span>
    </div>
  </div>


</div>
</template>
<style media="screen" scoped>

  .inputGroup{
    padding: 4rem .5rem .5rem;
  }
  .inputBox{
    border-bottom: 1px solid #666666;
  }
  .inputTxt{
    width: 100%;
    padding: .4rem 0 .4rem .4rem;
    font-size: .5rem;
  }

  .btnGroup{
    margin: .2rem .4rem;
  }

  .btn{
    text-align: center;
    padding: .5rem;
    font-size: .5rem;
  }

  .btn-black{
    background: black;
    color: white;
  }

</style>
<script lang="babel">
import commonNav from '../components/commonNav'

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
