<template>
  <div class="priceRange">
    <h3 class="tit">PRIVDQW DWQDWQ</h3>
    <div class="" >
      <span class="title">价格： </span>
      <div style="">
        <mt-range v-model="rangeValue" :min="3000" :max="30000">
          <div slot="start" class="start">￥3000</div>
          <div slot="end" class="end">￥30000</div>
        </mt-range>
      </div>
    </div>

    <div slot="money" class="money">￥{{rangeValue}}</div>
    
  </div>
</template>

<style media="screen">
  .priceRange{
    margin: .5rem;
  }

  .priceRange .title{
    float: left;
    padding-top: .2rem;
    font-size: .35rem;
  }

  .priceRange .tit{
    margin: 0 0 1rem 0;
    font-weight: bold;
  }

  .priceRange .mt-range{
    /*margin-right: 30px;*/
  }

  .priceRange .mt-range-runway{
    right: -20px;
  }

  .priceRange .mt-range-content{
    /*margin-right: 0;*/
  }

  .priceRange .mt-range .start, .priceRange .mt-range .end{
    position: absolute;
    top: -25px;
  }

  .priceRange .mt-range .start{
    /*padding-right: .2rem;*/
    left: 0;
    
  }
  .priceRange .mt-range .end{
    /*padding-left: .2rem;*/
    right: 0;
  }

  .priceRange .mt-range-thumb{
    top: 5px;
    width: 20px;
    height: 20px;
    background-color: #000000;
  }

  .priceRange .mt-range-progress{
    background-color: #000000;
  }

  .priceRange .money{
    text-align: center;
  }

</style>

<script lang="babel">
  import { TabContainer, TabContainerItem, Range } from 'mint-ui';
  export default {
    data() {
      return {
        rangeValue: 3001
      }
    },
    components: {

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