<template>
  <div class="download">
    <div class="dl">
      <img class="buyer-logo" src="../assets/img/logo.png" @click="download">
    </div>
    <div class="dm">
      <h3 class="tit">下载`ELLEshop`查看更多独家内幕</h3>
      <p>已有<span class="red">6866800</span>人下载
      </p>
    </div>
    <div class="dr">
      <div class="btn-down" @click="download"></div>
    </div>
  </div>

</template>

<style media="screen" lang="scss" scoped>

  .download{
    width: 100%;
    position: fixed;
    left: 0;
    bottom: 0;
    background-color: #dddddd;
    overflow: hidden;
  }

  .dl, .dm{
    float: left;
  }

  .dr{
    float: right;
    .btn-down{
      margin: .5rem .2rem .2rem;
      width: 1rem;
      height: 1rem;
      background-image: url(../assets/img/downloadN.png);
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
    }
  }

  .dl{
    width: 1.6rem;
    margin: .2rem;
  }

  .dm{
    margin-top: .2rem;
    color: #666666;
    font-family: '苹方';
    .tit{
      font-size: .43rem;
      font-weight: normal;
      margin: .2rem 0;
    }
    .red{
      color: #e14f39;
    }
  }



</style>

<script lang="babel">

  import { TabContainer, TabContainerItem } from 'mint-ui'
  import util from '../assets/lib/q.util.js'

  export default {
    data() {
      return {

      }
    },
    created(){

    },
    components: {

    },
    computed: {

    },
    methods: {
      download(){
        util.download();
      },
      rmDownload(){
        util.getEl('.buyer-head').style.display = 'none';
      }
    },
    mounted() {

    },
    watch: {

    }
  }
</script>