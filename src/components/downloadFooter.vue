<template>
  <div class="download">
    <div class="dl">
      <img class="buyer-logo" src="../assets/img/logo.png" @click="download">
    </div>
    <div class="dm" @click="download">
      <h3 class="tit">{{ title }}</h3>
      <p>已有<span class="red">{{ frequence }}</span>人下载
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
      margin: .5rem .4rem .2rem;
      width: 1rem;
      height: 1rem;
      background-image: url(../assets/img/downloadN.png);
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
    }
  }

  .dl{
    width: 1rem;
    margin: .4rem .3rem;
  }

  .dm{
    margin-top: .2rem;
    color: #666666;
    font-family: "微软雅黑","Microsoft yahei",Tahoma,Verdana,Arial,sans-serif;
    .tit{
      font-size: .4rem;
      font-weight: normal;
      margin: .2rem 0 0;
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
    props: {
      title: {
        type: String,
        default: '明星的时尚顾问 你的私人买手'
      }
    },
    data() {
      return {
        frequence: ((new Date).getTime() + '').substr(6, 10)
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
      }
    },
    mounted() {

    },
    watch: {

    }
  }
</script>