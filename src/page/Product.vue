<template>
  <div class="product">
    <commonNav title="商品详情" iconRight="" />
    <!--{{$route.params.id}}-->
    <div class="swipe">
      <mt-swipe :auto="4000">
        <mt-swipe-item v-for="item in images">
          <div class="" style="height:200px;">
            <img :src="item.popup" alt="">
          </div>
        </mt-swipe-item>
      </mt-swipe>
    </div>

  </div>
</template>
<style media="screen" scoped>
  .product{

  }

  .product .swipe{
    height: 500px;
  }

  .product .mint-swipe{
    height: 500px;
  }

  .product .mint-swipe-item{
    height: 500px;
  }

  .mint-swipe-item img{
    height: 500px;
  }

  

</style>
<script lang="babel">
  import Vue from 'vue'
  import commonNav from '../components/commonNav.vue'
  import { Swipe, SwipeItem, Toast } from 'mint-ui'

  Vue.component(Swipe.name, Swipe);
  Vue.component(SwipeItem.name, SwipeItem);

  export default {
    data() {
      return {
        arr: [0,1,2,3],
        images: []
      }
    },
    created(){
      const me = this;

      console.log();

      // me.$route.query.id

      me.fetchData({
        product_id: 1639, // 商品ID
        customer_id: '' // 用户ID
      }, function(res){
        me.images = res.images;
      });
    },
    components: {
      commonNav,
      Swipe,
      SwipeItem
    },
    computed: {

    },
    methods: {
      fetchData(data, cb){
        var me = this;
        data.route = 'mapi/product';
        data.format = 'jsonp';
        this.$http.jsonp(
          window.q.interfaceHost +'index.php?',
          {params: data})
        .then(res => {
          //console.log(res)
          let data = res.body;
          if(data.code+'' === '0'){
            cb && cb(data.data);
          }else{
            Toast('暂无数据, 请稍后刷新页面...')
          }
        }, err => {
          console.log(err)
        })
      }

    },
    mounted() {

    },
    watch: {

    }
  }
</script>
