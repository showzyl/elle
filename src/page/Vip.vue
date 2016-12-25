<template>
<div class="qa">
  <commonNav title="会员等级" iconRight="" />

  会员等级页面

  <!--<footBar pageName="classify" />-->
</div>
</template>
<style media="screen" lang="scss">


</style>
<script lang="babel">

  import { Toast, Checklist, Indicator, MessageBox } from 'mint-ui'
  import core from '../assets/lib/q.core.js'
  import store from '../assets/lib/q.store.js'
  import commonNav from '../components/commonNav.vue'

  const customer_id = store.get('customer_id');
  const mobile_token = store.get('mobile_token');

  export default {
    data(){
      return {
        subject: null,
        enquiry: null
      }
    },
    created(){
      const me = this;


    },
    components: {
      commonNav
    },
    computed: {


    },
    methods: {
      postData(data, cb){
        const me = this;
        data.route = 'mapi/account/level';
        data.format = 'jsonp';
        this.$http.jsonp(
          window.q.interfaceHost +'index.php?',
          {
            params: data
          }
        ).then( res => {
          let data = res.body;
          console.log(data);
          if(data.code+'' === '0'){
            cb && cb(data.data);
          }else{
            Toast({
              message: '暂无数据...',
              position: 'bottom',
              duration: 3000
            })
          }
          Indicator.close();
        }, err => {
          Indicator.close();
          Toast('网络错误...')
        })
      }
    },
    mounted() {

    },
    watch: {

    }
  }
</script>
