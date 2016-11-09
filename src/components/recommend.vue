<template>
  <div class="recommend">
    <h3 class="title">{{ title }}</h3>
    <ul class="recommendList">
      <li class="recommendItem" v-for="product in products">
        <div class="imgBox">
          <img :src="product.image" alt="">
        </div>
        <div class="priceBox">
          <div class="priceBoxLeft">
            <p class="oldprice"></p>
            <p class="newprice">¥{{product.price}}</p>            
          </div>
          <span class="iconCarShop"></span>
        </div>
        <div class="recommendName">
          {{product.name}}
        </div>
      </li>
    </ul>
  </div>
</template>

<style media="screen" scoped>
  .recommend {
   
  }
  .title{
    padding: .4rem;
    text-align: center;
    font-size: .5rem;
  }

  .recommendItem{
    width: 50%;
    padding: 0 .3rem;
    box-sizing: border-box;
    float: left;
  }

  .priceBoxLeft{
    float: left;
  }

  .iconCarShop{
    float: right;
    display: inline-block;
    width: .5rem;
    height: .5rem;
    /*margin-top: .5rem;*/
    margin: 0 .2rem 0 0;
    background-color: blue;
  }

  .priceBox{
    font-size: .4rem;
    margin-top: .5rem;
    overflow: hidden;
  }

  .oldprice{
    text-decoration: line-through;
    margin-bottom: .2rem;
  }
  .newprice{
    /*color: red;*/
  }

  .recommendName{
    margin-top: .5rem;
  }

  .iconCarShop{

  }
</style>

<script lang="babel">

import { TabContainer, TabContainerItem } from 'mint-ui';
import sideBar from '../components/sideBar.vue';

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