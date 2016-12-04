<template>
  <div class="detail">
    <commonNav title="" iconRight="" />
    布局 && 加入购物车

    <div class="" v-if="sizes.length > 1">
      <select>
        <option v-for="size in sizes" :value="size.product_option_value_id" selected>{{size.ovdname}}</option>
      </select>
    </div>
    <div class="" v-else>
      {{sizes[0].ovdname}}
    </div>


    <div class="" v-if="colors.length > 1">
      <select>
        <option v-for="color in colors" :value="color.product_id" selected>{{color.color}}</option>
      </select>
    </div>
    <div class="" v-else>
      {{colors[0].color}}
    </div>

  </div>
</template>


<script lang="babel">
  import Vue from 'vue'
  import commonNav from '../components/commonNav.vue'
  import { Swipe, SwipeItem, Toast } from 'mint-ui'

  Vue.component(Swipe.name, Swipe);
  Vue.component(SwipeItem.name, SwipeItem);

  export default {
    data() {
      return {
        sizes: [],
        colors: []
      }
    },
    created(){
      const me = this;
      me.fetchOption({
        product_id: me.$route.params.id, // 商品ID
      }, res => {
        console.log(res);
        me.sizes = res.Size;
        me.colors = res.color;
      })

    },
    components: {
      commonNav
    },
    computed: {

    },
    methods: {
      fetchOption(data, cb){
        var me = this;
        data.route = 'mapi/product/getoption';
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
            Toast('暂无数据...')
          }
        }, err => {
          console.log(err)
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