<template>
<div class="login">
  <download />
  <commonNav title="登录" iconRight="" />
  <ul class="inputGroup">
    <li class="inputBox">
      <input v-model.number="phone" name="phone" class="inputTxt" type="number" placeholder="手机号 / 邮箱" v-model.trim="phone">
    </li>
    <li class="inputBox">
      <input type="password" v-model.trim="pass" placeholder="密码" class="inputTxt">
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
    <!--<a href="#">忘记密码 </a> | -->
    <a href="/#/reg"> 注册</a>
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
import store from '../assets/lib/q.store.js'
import download from '../components/download.vue'

import { Toast, Indicator } from 'mint-ui'


export default {
  data(){
    return {
      phone: null,
      pass: ''
    }
  },
  components: {
    commonNav,
    download
  },
  created(){
    // login
    
  },
  computed: {

  },
  methods: {
    fnLogin(data, cb){
      const me = this;
      data.route = 'mapi/login';
      data.format = 'jsonp';

      this.$http.jsonp(
        window.q.interfaceHost +'index.php',
        {
          params: data
        }
      ).then( res => {
        let data = res.body;
        if(data.code === 0){
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
      
    },
    clickLogin(){
      if(!this.pass || !this.phone){
        Toast({
          message: '手机号或者密码不能为空...',
          position: 'bottom',
          duration: 3000
        });
        return;
      }
      this.fnLogin({
        account: this.phone,
        password: this.pass
      }, (res) => {
        console.log(res);
        store.set('customer_id', res.id);
        store.set('mobile_token', res.mobile_token);
        setTimeout( ()=>{
          location.href = '/#/profile';
        }, 500)
      })
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
