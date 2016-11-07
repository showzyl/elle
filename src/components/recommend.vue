<template>
  <div class="recommend">
    <h3 class="title">{{ title }}</h3>
    <ul class="recommendList">
      <li class="recommendItem">
        <div class="imgBox">
          <img src="https://img.alicdn.com/imgextra/i3/186560311066996759/TB2.kRJbbaI.eBjy1XdXXcoqXXa_!!0-saturn_solar.jpg_180x180.jpg_.webp" alt="">
        </div>
        <div class="priceBox">
          <div class="priceBoxLeft">
            <p class="oldprice">$1234</p>
            <p class="newprice">$2</p>            
          </div>
          <span class="iconCarShop"></span>
        </div>
        <div class="recommendName">
          商品名字
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
  }

  .priceBoxLeft{
    float: left;

  }

  .iconCarShop{
    float: right;
    display: inline-block;
    width: .5rem;
    height: .5rem;
    margin-top: .5rem;
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
    color: red;
  }

  .recommendName{
    margin-top: .5rem;
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
    }
  },
  data() {
    return {
      active: 'tab-container1'
    }
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