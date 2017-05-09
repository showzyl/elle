<template>
  <div class="recommend">
    <h3 class="title">{{ title }}</h3>
    <recomendItem :products="products"></recomenditem>
  </div>
</template>

<style media="screen" scoped>
  .recommend {
    overflow: auto;
    background: #ffffff;
    padding-bottom: .2rem;
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
//      console.log(this.props)
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