<template>

<div class="indexNav">
  <div class="navTab">
    <a href="#" class="on">女士</a>
    <a href="#" class="">男士</a>
    <a href="#" class="">生活</a>
  </div>
  <i class="iconMenu"></i>
</div>

</template>

<style media="screen" scoped>

.iconMenu{
  position: absolute;
  display: block;
  background: url(/static/img/menubtn.png) no-repeat;
  background-size: contain;
  height: 0.8rem;
  width: 0.8rem;
  right: 0.6rem;
  bottom: 0.3rem;
}

.indexNav{
  position: relative;
  height: 1.5rem;
  line-height: 1.5rem;
  background: green;
  /*float: left;*/
}

.navTab{
  width: 60%;
  display: -webkit-box;
}

.navTab a{
  display: block;
  color: #000000;
  -webkit-box-flex: 1;
  text-align: center;
  font-size: 0.5rem;
}

.navTab a.on{
  color: #fff;
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
