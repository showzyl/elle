<template>
  <div class="confirmOrder">
    <ul>
      <li v-for="item in confirmData.products" style="font-size: 22px;">
        {{item.name}}
        <span style="color: red;">{{item.quantity}}</span>
      </li>
    </ul>

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
        confirmData: {}
      }
    },
    created(){
      const me = this;

      Indicator.open({
        text: '加载中...',
        spinnerType: 'fading-circle'
      });

      me.confirm({
        mobile_token,
        customer_id
      }, res => {
        me.confirmData = res;
      })



    },
    components: {
      commonNav
    },
    computed: {

    },
    methods: {
      confirm(data, cb){
        const me = this;
        data.route = 'mapi/cart/confirm';
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
