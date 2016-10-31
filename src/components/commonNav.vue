<template>

<div class="commonNav">
  <i class="iconBack" @click="clickBack"></i>
  <h2 class="title">
    首页
  </h2>
  <i class="iconMenu" @click="clickMenu"></i>
</div>

</template>

<style media="screen" scoped>
.iconBack{
  position: absolute;
  display: block;
  background: url(/static/img/backbtn.png) no-repeat;
  background-size: contain;
  height: 0.8rem;
  width: 0.8rem;
  left: 0.6rem;
  bottom: 0.3rem;
}

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

.commonNav{
  position: relative;
  height: 1.5rem;
  line-height: 1.5rem;
  /*float: left;*/
}

.title{
  width: 70%;
  margin: 0 auto;
  text-align: center;
  font-size: .6rem;
}

</style>

<script lang="babel">

console.log();

export default {
  components: {

  },
  computed: {

  },
  methods: {
    clickBack(){
      alert('back');
    },
    clickMenu(){
      alert('menu');
    }
  },
  mounted() {

  },
  watch: {

  }
}
</script>
