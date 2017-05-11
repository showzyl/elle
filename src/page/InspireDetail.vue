<template>
<div class="inspireDetail">
  <!--<download />-->
  <commonNav :title="name" iconRight="" />
  <p v-for="item in items" class="imgList">
    <router-link :to=" '/product/' + item.object_id " v-if="item.object_id != 0">
      <img :src="item.image" alt="">
    </router-link>
    <img :src="item.image" alt="" v-else>
  </p>
  <recommend :products="products" />

  <downloadFooter />

</div>
</template>

<style media="screen" scoped>

  .commonNav{
    position: relative;
    top: 0;
  }

  .inspireNav{
    display: -webkit-box;
    margin-bottom: .3rem;
  }

  .inspireNav a{
    display: block;
    -webkit-box-flex: 1;
    text-align: center;
    font-size: 0.45rem;
    line-height: 1rem;
    margin: 0 .4rem;
  }

   .inspireNav a.on{
     border-bottom: 1px solid black;
   }

</style>

<script lang="babel">

  import { Toast, Cell, Checklist, Indicator } from 'mint-ui'
  import commonNav from '../components/commonNav.vue'
  import core from '../assets/lib/q.core.js'
  import store from '../assets/lib/q.store.js'
  import util from '../assets/lib/q.util.js'
  import recommend from '../components/recommend.vue'
  import downloadFooter from '../components/downloadFooter.vue'

  export default {
    data(){
      return {
        items: [],
        products: [],
        name: ''
      }
    },
    created(){
      const me = this;

      Indicator.open({
        text: '加载中...',
        spinnerType: 'fading-circle'
      });

      util.fetchInterface(me, 0, {
        event_id: me.$route.params.id,
        route: 'mapi/event'
      }, function (res) {
        Indicator.close();

        if(res === 'notMatch'){
          Toast({
            message: '暂无数据...',
            duration: 3000
          });
          return;
        }

        if(res === 'notMatch'){
          Toast('网络错误...');
          return;
        }

        if(res.app.length){
          me.items = res.app;
          me.name = res.name;
          if(res.products){
            res.products.forEach(function(item) {
              item.isRed = false
            });
            me.products = res.products
          }
        }
      })

    },
    components: {
      commonNav,
      recommend,
      downloadFooter
    },
    computed: {
      // 有缓存

    },
    methods: {
      // 没有缓存

    },
    mounted() {

    },
    watch: {
      '$route' (to, from) {
        // 对路由变化作出响应...
        console.log(to, from)
      }
    }
  }
</script>
