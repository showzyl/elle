<template>
<div class="login">
  <download />
  <commonNav title="注册" iconRight=""/>
  <ul class="inputGroup">
    <li class="inputBox">
      <input v-model.number="phone" name="phone" type="number" placeholder="手机号" v-model.trim="phone" class="inputTxt" >
    </li>
    <li class="inputBox">
      <input type="password" name="pass" v-model="pass" placeholder="请输入6-16位字符密码" class="inputTxt">
    </li>
    <li class="inputBox">
      <input type="password" name="confirmpass" v-model="confirmpass" placeholder="确认密码" class="inputTxt">
    </li>
    <li class="inputBox verifycode">
      <input type="password" name="pass" v-model="verifycode" placeholder="验证码" class="inputTxt">
      <span class="getCode" @click='getCode' >{{btnTxt}}</span>
    </li>
    <!--<li class="mailReg">
      <span>您还可以使用 <a href="#"> 邮箱注册</a></span>
    </li>-->
  </ul>

  <ul class="choseGroup">
    <li class="choseGroupLi">
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
    <div class="btn btn-black" @click='fnTelReg'>
      <span class="txt">
        注册
      </span>
    </div>
  </div>


</div>
</template>
<script lang="babel">
	import download from '../components/download.vue'
  import commonNav from '../components/commonNav.vue'
  import { Checklist, Cell, Toast } from 'mint-ui';

  export default {
    data () {
      return {
        nCount: 123,
        phone: null,
        pass: '',
        confirmpass: '',
        verifycode: null,
        btnTxt: '获取验证码',
        bLockVerifi: false,
        count: 5
      }
    },
    components: {
      commonNav,
      Checklist,
			download
    },
    computed: {

    },
    methods: {
      getCode(){
        var me = this;

        if(!me.fnTestPhone(me.phone)){
          Toast('请输入正确的手机号...');
          return;
        }

        if(me.bLockVerifi) return;
        me.bLockVerifi = true;
        var timer = null;
        if(me.count === 5){
          me.fnSendCode({
            tel: me.phone
          }, (res) => {
            // 
            Toast(res);
            
          })
          timer = setInterval(function(){
            me.count--;
            console.log(me.count)
            if(me.count === 0){
              me.btnTxt = '获取验证码';
              clearInterval(timer);
              me.count = 5;
              me.bLockVerifi = false;
              return;
            }
            me.btnTxt = me.count + '秒后重新获取';
          }, 1000)
        }else{

        }

      },
      fnTelReg(data){
        const me = this;
        
        if(!me.fnTestPhone(me.phone)){
          Toast('请输入正确的手机号...');
          return;
        }

        if(!me.phone || !me.pass || !me.confirmpass){
          Toast('手机号或者密码不能为空...');
          return;
        }

				if(me.pass.length < 6){
					Toast('密码最少6位');
					return;
				}

        if(me.pass !== me.confirmpass){
          Toast('请两次输入的密码保持一致...');
          return;
        }

        if(!me.verifycode){
          Toast('验证码不能为空...');
          return;
        }

        data.route = 'mapi/register';
        data.format = 'jsonp';

        this.$http.jsonp(
          window.q.interfaceHost +'index.php',
          {
            params: data
          }
        ).then( res => {
          let data = res.body;

//          console.log(data);
//          return;
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
          Toast('网络错误...')
        })

      },
      fnSendCode(data, cb){
        data.route = 'mapi/register/tel'; // 验证码
        data.format = 'jsonp';

        this.$http.jsonp(
          window.q.interfaceHost +'index.php',
          {
            params: data
          }
        ).then( res => {
          let data = res.body;

          console.log(data);
          return;
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
      fnTestPhone(val){
        const reg = /1\d{10}/;
        return reg.test(val);
      }
    },
    mounted() {

    },
    watch: {
      phone(val, old){
        var me = this;
        //console.log(val, old);
        if((val+'').length >= 11){
          me.phone = (val+'').substr(0, 11);
        }
      }
    }
  }
</script>

<style media="screen" scoped>

  body{
    padding-bottom: 0;
  }

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

  .inputGroup{
    padding: 2rem .5rem .5rem;
  }

  .inputBox{
    border-bottom: 1px solid #666666;
  }

  .inputTxt{
    width: 100%;
    padding: .4rem 0 .4rem 0;
    font-size: .5rem;
  }

</style>
