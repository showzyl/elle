<template>
  <div class="recommend">
    <h3 class="title">{{ title }}</h3>
    <!--<ul class="recommendList">-->
      <!--<li class="recommendItem" v-for="product in products">
        <div class="imgBox">
          <img :src="product.image" alt="">
        </div>
        <div class="priceBox">
          <div class="priceBoxLeft">
            <p class="oldprice">¥1233432</p>
            <p class="newprice" :class="{ colorRed: product.isRed }">¥{{product.price}}</p>            
          </div>
          <span class="iconCarShop collectRed"></span>
        </div>
        <div class="recommendName">
          {{product.name}}
        </div>
      </li>-->
    <recomendItem :products="products"></recomenditem>
    <!--</ul>-->
  </div>
</template>

<style media="screen" scoped>
  .recommend {
    overflow: auto;
  }
  
  .title{
    padding: .4rem;
    text-align: center;
    font-size: .5rem;
  }

</style>

<script lang="babel">
  import { TabContainer, TabContainerItem } from 'mint-ui'
  import recomendItem from './recommendItem.vue'
  

  //console.log(location.href)

  export default {
    props: {
      title: {
        type: String,
        default: ''
      },
      products: {
        type: Array,
        default: () => []
      }
    },
    data() {
      return {
        //active: 'tab-container1'
      }
    },
    created(){
      console.log(this.props)
    },
    components: {
      recomendItem
    },
    computed: {

    },
    methods: {
      menuToggle(){
        
      }
    },
    mounted() {

    },
    watch: {

    }
  }
</script>