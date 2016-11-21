<template>
<div class="login">
  <commonNav title="登录"/>
  <ul class="inputGroup">
    <li class="inputBox">
      <input v-model.number="phone" name="phone" class="inputTxt" type="number" placeholder="手机号 / 邮箱" v-model.trim="phone">
    </li>
    <li class="inputBox">
      <input type="password" name="pass" value="" placeholder="密码" class="inputTxt">
    </li>
  </ul>

  <div class="btnGroup">
    <div class="btn btn-black" @click="clickLogin">
      <span class="txt">
        登录
      </span>
    </div>
  </div>

  <div class="regGroup">
    <a href="#">忘记密码 </a> | <a href="#"> 注册</a>
  </div>


</div>
</template>
<style media="screen">

  .inputGroup{
    padding: 3rem .5rem .5rem;
  }

  .inputBox{
    border-bottom: 1px solid #666666;
  }

  .inputTxt{
    width: 100%;
    padding: .4rem 0 .4rem 0;
    font-size: .5rem;
  }

  .btnGroup{
    margin: .2rem .4rem;
  }


  /*.btn-black{
    background: black;
    color: white;
  }*/

  .regGroup{
    text-align: center;
    margin-top: .8rem;
  }

  .regGroup a{
    color: black;
  }

</style>
<script lang="babel">
import commonNav from '../components/commonNav.vue'
import util from '../assets/lib/q.util.js'
import { Toast } from 'mint-ui'


export default {
  data(){
    return {
      phone: null,
      pass: ''
    }
  },
  components: {
    commonNav
  },
  created(){
    // login
    
    
  },
  computed: {

  },
  methods: {
    fnLogin(data){
      // alert(1)
      // data.route = 'mapi/register'; // 注册
      // data.route = 'mapi/register/tel'; // 验证码
      
      data.route = 'mapi/login';
      data.format = 'jsonp';
      
      util.jsonp({
        url : window.q.interfaceHost +'index.php',
        data: data,
        callback : function(res) {
          if(res.code+'' === '0'){
            // login success
            
            
          }else{
            // login error
            Toast({
              message: res.msg,
              position: 'bottom',
              duration: 3000
            })
          }
        }
      }, 'callback')
      
    },
    clickLogin(){
      if(!this.pass || !this.phone){
        Toast({
          message: '手机号或者密码不能为空...',
          position: 'bottom',
          duration: 3000
        })
        return;
      }
      this.fnLogin({
        password: this.pass,
        tel: this.phone
      });
    }
  },
  mounted() {

  },
  watch: {
    phone(val, old){
      var me = this;
      console.log(val, old);
      if((val+'').length >= 11){
        me.phone = (val+'').substr(0, 11);
      }
    },
    pass(val, old){

    }

  }
}
</script>
