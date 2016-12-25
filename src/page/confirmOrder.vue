<template>
  <div class="confirmOrder">


  </div>
</template>

<style media="screen" lang="scss" scoped>



</style>

<script lang="babel">

  import commonNav from '../components/commonNav.vue'
  import { Toast, Indicator } from 'mint-ui'
  import store from '../assets/lib/q.store.js'

  const customer_id = store.get('customer_id')
  const mobile_token = store.get('mobile_token')

  export default {
    data() {
      return {
        content: 'main',
        aTab: ['全部订单','待付款','待发货','待收货'],
        tabIndex: 0,
        list0: [],
        list1: [],
        list2: [],
        list3: [],
        datailData: {}
      }
    },
    created(){
      const me = this;
      if(me.$route.query.tab){
        me.tabIndex = Number(me.$route.query.tab);
      }

      Indicator.open({
        text: '加载中...',
        spinnerType: 'fading-circle'
      });

      // type 空 为全部订单
      // 1 unpaid 待付款 2 unshipped 待发货 3 shipped 待收货

      me.fetchData({
        customer_id,
        mobile_token
      }, res => {
        me.list0 = res.orders;
      })

      setTimeout( ()=> {
        [1,2,3].forEach(item => {
          let type = '';

          switch (item){
            case 1:
              type = 'unpaid';
              break;
            case 2:
              type = 'unshipped';
              break;
            case 3:
              type = 'shipped';
              break;
          }

          me.fetchData({
            customer_id,
            mobile_token,
            type
          }, res => {
            console.log(res);
            me['list' + item] = res.orders;
          })

        })
      }, 200)



    },
    components: {
      commonNav
    },
    computed: {

    },
    methods: {
      fetchData(data, cb){
        const me = this;
        data.route = 'mapi/order';
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
          Indicator.close();
        }, err => {
          Indicator.close();
          Toast('网络错误...')
        })
      },
      checkTab(index){
        console.log(index);
        this.tabIndex = index;
      },
      checkDetail(info){
        const me = this;
        document.body.scrollTop = 0;
        me.content = 'detail';
        me.datailData = info.infos;
      }

    },
    mounted() {

    },
    watch: {

    }
  }
</script>
