
<template>
<div class="coupon">
  优惠券
</div>
</template>
<style media="screen" lang="scss" scoped>
  .coupon{
    color: red;
  }
</style>
<script lang="babel">
  import { Toast, Indicator } from 'mint-ui'
  export default {
    data(){
      return {
        
      }
    },
    created(){
      const me = this;

      me.fetchCouponData({}, res => {
        console.log(res);
      })

    },
    components: {

    },
    computed: {

    },
    methods: {
      fetchCouponData(data, cb){
        const me = this;
        data.route = 'mapi/coupon'; // 可领取
        // mapi/coupon/get  领取
        // mapi/coupon/getList 个人优惠券列表接口
        data.format = 'jsonp';

        this.$http.jsonp(
          window.q.interfaceHost +'index.php?',
          {
            params: data
          }
        ).then( res => {
          let data = res.body;
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


      },
      addAds(){
        console.log('add')
      }

    },
    mounted() {

    },
    watch: {

    }
  }
</script>
