<template>
  <div class="conpomentLoadMore">
    <div class="loadmore" :style="{ bottom: bottom  }" style="border-top-color: rgb(204, 204, 204);border-left-color: rgb(204, 204, 204);border-bottom-color: rgb(204, 204, 204);height: 28px;width: 28px;" v-show="loading"></div>
  </div>
</template>

<style scoped>

  .loadmore{
    position: fixed;
    bottom: 60px;
    left: 0;
    left: 50%;
    margin-left: -14px;
    -webkit-animation: mint-spinner-rotate .8s infinite linear;
    animation: mint-spinner-rotate .8s infinite linear;
    border: 4px solid transparent;
    border-radius: 50%;
  }

  .mint-spinner-snake {
    -webkit-animation: mint-spinner-rotate 0.8s infinite linear;
            animation: mint-spinner-rotate 0.8s infinite linear;
    border: 4px solid transparent;
    border-radius: 50%;
  }

  @-webkit-keyframes mint-spinner-rotate {
    0% {
        -webkit-transform: rotate(0deg);
                transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(360deg);
                transform: rotate(360deg);
    }
    }
    @keyframes mint-spinner-rotate {
    0% {
        -webkit-transform: rotate(0deg);
                transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(360deg);
                transform: rotate(360deg);
    }
  }
  

</style>

<script lang="babel">

  export default {
    props: {
      loading: {
        type: Boolean,
        default: false
      },
      bottom: {
        type: String,
        default: '60px'
      },
    },
    data() {
      return {
        //active: 'tab-container1'
      }
    },
    created(){
      //console.log(this.props)
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