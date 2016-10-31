<template>

<div class="footBar">
  <ul class="footBarItems">

    <li class="footBarItem on">
      <a href="#" class="footBarHref">
        <i class="iconHome"/></i>
        <h3 class="footBarTxt">首页</h3>
      </a>
    </li>

    <li class="footBarItem">
      <a href="#" class="footBarHref">
        <i class="iconCatalogue"/></i>
        <h3 class="footBarTxt">登录</h3>
      </a>
    </li>

    <li class="footBarItem">
      <a href="#" class="footBarHref">
        <i class="iconLook"/></i>
        <h3 class="footBarTxt">Look</h3>
      </a>
    </li>

    <li class="footBarItem">
      <a href="#" class="footBarHref">
        <i class="iconShopinglist"/></i>
        <h3 class="footBarTxt">购物车</h3>
      </a>
    </li>

    <li class="footBarItem">
      <a href="#" class="footBarHref">
        <i class="iconProfile"/></i>
        <h3 class="footBarTxt">购物车</h3>
      </a>
    </li>

  </ul>
</div>


</template>
<style media="screen">

.footBar{
  position: fixed;
  left: 0;
  bottom: 0;
  height: 1.2rem;
  width: 100%;
  /*line-height: 1rem;*/
}

.footBarItems{
  display: -webkit-box;
  padding: 0 .4rem;
  text-align: center;
}

.footBarItems .on a{
  color: #000;
}


.footBarItem{
  -webkit-box-flex: 1;
}

.footBarHref{
  display: block;
}

.footBarIcon{
  width: 0.6rem;
  height: 0.6rem;
}

.footBarTxt{
  font-size: 0.1rem;
  margin: 0;
}

.iconHome, .iconCatalogue, .iconLook, .iconShopinglist, .iconProfile{
  background: url(/static/img/foot_bar_icons.png) no-repeat;
  display: inline-block;
  width: 0.5rem;
  height: 0.5rem;
}

.iconHome{
  background-size: .7rem;
}

.iconCatalogue{
  background-size: .7rem;
  background-position: 0 -.7rem;
}

.iconLook{
  background-size: .7rem;
  background-position: 0 -1.3rem;
}

.iconShopinglist{
  background-size: .5rem;
  background-position: 0 -1.4rem;
}

.iconProfile{
  background-size: .6rem;
  background-position: 0 -2.5rem;
}


</style>
<script lang="babel">
export default {
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
