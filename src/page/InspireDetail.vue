<template>
<div class="inspireDetail">
  <commonNav :title="name" iconRight="" />
  <p v-for="item in items" class="imgList">
    <img :src="item.image" alt="">
  </p>
  <recommend :products="products" />
</div>
</template>
<style media="screen" scoped>
  .imgList{
    /*margin-top: 1.5rem;*/
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

import { Toast, Cell, Checklist, Indicator, TabContainer, TabContainerItem } from 'mint-ui'
import commonNav from '../components/commonNav.vue'
import core from '../assets/lib/q.core.js'
import store from '../assets/lib/q.store.js'
import recommend from '../components/recommend.vue'

export default {
  data(){
    return {
      items: [],
      products: [],
      name: ''
    }
  },
  created(){ 
    var me = this;

    Indicator.open({
      text: '加载中...',
      spinnerType: 'fading-circle'
    })

    this.fetchData({
      event_id: me.$route.params.id
    });
  },
  components: {
    commonNav,
    recommend
  },
  computed: {
    // 有缓存
    
  },
  methods: {
    // 没有缓存
    fetchData(data, cb){
      var me = this;
      data.route = 'mapi/event';
      data.format = 'jsonp';
      this.$http.jsonp(
        window.q.interfaceHost +'index.php?',
        {params: data})
      .then(res => {
        Indicator.close()
        //console.log(res)
        let data = res.body;

        if(data.code+'' === '0' && data.data.app.length){
          me.items = data.data.app;
          me.items.forEach(item => {
            item.image = item.image + '?iopcmd=thumbnail&type=4&width=640|iopcmd=convert&dst=jpg&Q=60'
          })
          me.name = data.data.name;
          if(data.data.products){
            data.data.products.forEach(item => {
              item.isRed = false
            })
            me.products = data.data.products
          }
        }else{
          // 无数据
          Toast('暂无数据...')
        }
        cb && cb(data.data);

      }, err => {
        Toast('网络错误...');
      })

      // $.ajax({
      //   url: 'http://106.75.17.211:6603/index.php?route=mapi/event&format=jsonp',
      //   data: {
      //     event_id: me.$route.params.id
      //   },
      //   dataType: 'jsonp',
      //   jsonp: 'callback',
      //   crossDomain: true
      // }).done(function(res){
      //   //console.log(res)
      //   Indicator.close()
      //   if(res.code+'' === '0' && res.data.app.length){
      //     me.items = res.data.app
      //     me.items.forEach(item => {
      //       item.image = item.image + '?iopcmd=thumbnail&type=4&width=640|iopcmd=convert&dst=jpg&Q=60'
      //     })
      //     if(res.data.products){
      //       res.data.products.forEach(item => {
      //         item.isRed = false
      //       })
      //       me.products = res.data.products
      //     }
      //   }else{
      //     // 无数据
      //     Toast('暂无数据...')
      //   }
      // }).fail(function(err){
      //   console.log(err)
      //   Toast('网络错误...')
      // })
    }
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
