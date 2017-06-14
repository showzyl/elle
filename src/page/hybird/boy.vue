<template>

<div class="index">

  <ul class="tabs">
    <li>
      <a href="">
        <div class="imgBox">
          <img src="../../assets/img/hybird/boy/icon-clothes1.png" alt="">
        </div>
        <p class="txt">
          编辑推荐
        </p>
      </a>
    </li>
    <li>
      <a href="">
        <div class="imgBox">
          <img src="../../assets/img/hybird/boy/icon-pencil.png" alt="">
        </div>
        <p class="txt">
          新品
        </p>
      </a>
    </li>
    <li>
      <a href="">
        <div class="imgBox">
          <img src="../../assets/img/hybird/boy/icon-new.png" alt="">
        </div>
        <p class="txt">
          折扣专区
        </p>
      </a>
    </li>
    <li>
      <a href="">
        <div class="imgBox">
          <img src="../../assets/img/hybird/boy/icon-bag.png" alt="">
        </div>
        <p class="txt">
          TA们都在买
        </p>
      </a>
    </li>
  </ul>

  <div class="focusImg">
    <a href="">
      <img src="../../assets/img/hybird/boy/father.jpg" alt="">
    </a>
  </div>

  <ul class="nav">
    <li>
      <a href="">
        <img src="../../assets/img/hybird/boy/row1-1.jpg" alt="">
      </a>
    </li>

    <li>
      <a href="">
        <img src="../../assets/img/hybird/boy/row1-2.jpg" alt="">
      </a>
    </li>

    <li>
      <a href="">
        <img src="../../assets/img/hybird/boy/row1-3.jpg" alt="">
      </a>
    </li>

    <li>
      <a href="">
        <img src="../../assets/img/hybird/boy/row1-4.jpg" alt="">
      </a>
    </li>

  </ul>

  <ul class="row">
    <li>
      <a href="">
        <img src="../../assets/img/hybird/boy/row2-1.jpg" alt="">
      </a>
    </li>

    <li>
      <a href="">
        <img src="../../assets/img/hybird/boy/row2-2.jpg" alt="">
      </a>
    </li>

    <li>
      <a href="">
        <img src="../../assets/img/hybird/boy/row2-3.jpg" alt="">
      </a>
    </li>
  </ul>

  <div class="lastRow">
    <div class="ll">
      <img src="../../assets/img/hybird/boy/row3-1.jpg" alt="">
    </div>
    <ul class="list">
      <li>
        <a href="">
          <img src="../../assets/img/hybird/boy/row3-2.jpg" alt="">
        </a>
      </li>
      <li>
        <a href="">
          <img src="../../assets/img/hybird/boy/row3-3.jpg" alt="">
        </a>
      </li>
      <li>
        <a href="">
          <img src="../../assets/img/hybird/boy/row3-4.jpg" alt="">
        </a>
      </li>
      <li>
        <a href="">
          <img src="../../assets/img/hybird/boy/row3-5.jpg" alt="">
        </a>
      </li>

      <li>
        <a href="">
          <img src="../../assets/img/hybird/boy/row3-6.jpg" alt="">
        </a>
      </li>

      <li>
        <a href="">
          <img src="../../assets/img/hybird/boy/row3-7.jpg" alt="">
        </a>
      </li>

    </ul>
  </div>


</div>

</template>

<style media="screen" lang="scss" scoped>
  .index{

  }
  .tabs{
    background: #ffffff;
    display: -webkit-box;
    padding: .3rem;
    li{
      -webkit-box-flex: 1;
      .imgBox{
        width: 1rem;
        margin: 0 auto;
      }
      .txt{
        text-align: center;
        padding: .2rem 0;
        font-size: .35rem;
      }
    }
  }

  .nav, .row{
    display: -webkit-box;
    li{
      -webkit-box-flex: 1;

    }
  }

  .nav{
    padding: .1rem;
    li{
      padding: .16rem;
    }
  }

  .row{
    padding: 0 .2rem .2rem;
    li{
      padding-right: .2rem;
    }
    li:last-child{
      padding-right: 0;
    }
  }

  .lastRow{
    overflow: hidden;
    .ll{
      width: 42%;
      height: 3rem;
      float: left;
      margin: 0 .2rem;
      overflow: hidden;
    }
    .list{
      width: 53%;
      float: left;
      li{
        width: 30%;
        float: left;
        padding: 0 5px .25rem 0;
      }
    }
  }


</style>

<script lang="babel">

  // import { Toast, Indicator } from 'mint-ui'
	// import util from '../../assets/lib/q.util.js'

  export default {
    data(){
      return {
      	
      }
    },
    created(){
      const me = this;

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
