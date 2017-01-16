<template>
  <ul class="recommendList">
    <li class="recommendItem" v-for="product in products">
      <router-link :to=" '/product/'+ product.product_id ">
        <div class="imgBox">
          <img :src="product.image" alt="">
        </div>
        <div class="priceBox">
          <div class="priceBoxLeft">
            <p class="oldprice" v-if="product.special">¥{{product.price}}</p>
            <p class="newprice" v-else="product.price">¥{{product.price}}</p>
            <p class="newprice" :class="{ colorRed: product.special }" v-if="product.special">¥{{product.special}}</p>
          </div>
          <span class="iconCarShop" :class="{ colorRed: product.is_wish }"></span>
        </div>
        <div class="recommendName">
          {{product.name}}
        </div>
      </router-link>
    </li>
  </ul>
</template>

<style scoped>

  .recommendList{
    padding-bottom: .4rem;
    overflow: auto;
  }

  .recommendItem{
    width: 50%;
    padding: 0 3%;
    box-sizing: border-box;
    float: left;
  }

  .recommendItem:nth-child(odd){
    padding-right: 1.5%;
  }

  .recommendItem:nth-child(even){
    padding-left: 1.5%;
  }

  .priceBoxLeft{
    float: left;
    line-height: .5rem;
  }

  .iconCarShop{
    float: right;
    display: inline-block;
    width: 20px;
    height: 18px;
    margin: 0 .2rem 0 0;
    background-image: url('../assets/img/recomend/collection@3x.png');
    background-size: cover;
  }

  .collectRed{
     background-image: url('../assets/img/recomend/collection_h@3x.png');
  }

  .priceBox{
    font-size: .4rem;
    margin-top: .5rem;
    overflow: hidden;
  }

  .imgBox{
    height: 5.8rem;
  }

  .oldprice{
    text-decoration: line-through;
    /*margin-bottom: .2rem;*/
  }

  .colorRed{
    color: red;
  }

  .recommendName{
    margin: .5rem 0;
    height: .8rem;
    font-size: .3rem;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    word-break: break-all;
  }

  

</style>

<script lang="babel">

  import { TabContainer, TabContainerItem } from 'mint-ui';

  export default {
    props: {
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
     // console.log(this.props)
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