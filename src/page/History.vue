<template>
<div class="history">
  <commonNav title="浏览历史" iconRight=""/>

  <ul class="hisoryList" >
    <li class="item" v-for="product in products">
      <div class="imgBox">
        <img :src="product.image">
      </div>
      <div class="content">
        <p class="price">{{product.price}}</p>
        <p class="name">{{product.name}}</p>
      </div>
    </li>
  </ul>

</div>
</template>

<script lang="babel">
  import commonNav from '../components/commonNav.vue'
  import { Toast, Indicator } from 'mint-ui'
  import store from '../assets/lib/q.store.js'
  import util from '../assets/lib/q.util.js'

  const customer_id = store.get('customer_id')
  const mobile_token = store.get('mobile_token')

  export default {
    data () {
      return {
        products: [],
      }
    },
    components: {
      commonNav
    },
    created(){
      const me = this;

      Indicator.open({
        text: '加载中...',
        spinnerType: 'fading-circle'
      });

      util.fetchInterface(me, 0, {
        customer_id,
        mobile_token,
        route: 'mapi/account/history'
      }, res => {
        Indicator.close();
        if(res === 'notMatch'){
          Toast({
            message: '暂无数据...',
            position: 'bottom',
            duration: 3000
          });
          return;
        }

        if(res === 'notMatch'){
          Toast('网络错误...');
          return;
        }

        me.products = res.history.product_list;

      })

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

<style media="screen" lang="scss" scoped>

  .history{
    .commonNav{
      position: relative;
    }
  }

  .item{
    float: left;
    margin: .4rem;
    .imgBox{
      float: left;
      width: 40%;
    }
    .content{
      float: left;
      margin-left: .3rem;
      width: 55%;
      p{
        margin-top: 1.2rem;
      }
    }
  }


</style>
