<template>
  <ul class="recommendList">
    <li class="recommendItem" v-for="product in products">
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
    padding: 0 .3rem;
    box-sizing: border-box;
    float: left;
  }

  .priceBoxLeft{
    float: left;
    line-height: .5rem;
  }

  .iconCarShop{
    float: right;
    display: inline-block;
    width: .54rem;
    height: .5rem;
    /*margin-top: .5rem;*/
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

  .oldprice{
    text-decoration: line-through;
    /*margin-bottom: .2rem;*/
  }

  .colorRed{
    color: red;
  }

  .recommendName{
    margin-top: .5rem;
  }

  

</style>

<script lang="babel">

  import { TabContainer, TabContainerItem } from 'mint-ui';

  //console.log(location.href)

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