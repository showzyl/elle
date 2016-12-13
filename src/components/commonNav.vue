<template>

<div class="commonNav">
  <i class="iconBack" @click="clickBack"></i>
  <h2 class="title">
    {{ title }}
  </h2>
  <i class="iconMenu" @click="clickMenu" v-if="iconRight"></i>
  <!--<i class="iconChoseAll">√</i>
  <i class="iconClearAll"></i>-->
</div>

</template>

<style media="screen" scoped>
.iconChoseAll{
  
}

.iconBack{
  position: absolute;
  display: block;
  background-image: url(../assets/img/backbtn.png);
  background-repeat: no-repeat;
  background-size: contain;
  height: 0.6rem;
  width: 0.8rem;
  top: 33%;
  left: 3%;
}

.iconMenu{
  position: absolute;
  display: block;
  background-image: url(../assets/img/menubtn.png);
  background-size: cover;
  height: 0.8rem;
  width: 0.7rem;
  right: 0.6rem;
  bottom: 0.3rem;
}

.commonNav{
  position: fixed;
  top: 0;
  height: 1.5rem;
  line-height: 1.5rem;
  background-color: #ffffff;
  opacity: .8;
  width: 100%;
  z-index: 4;
}

.title{
  width: 70%;
  margin: 0 auto;
  text-align: center;
  font-size: .5rem;
}

</style>

<script lang="babel">

export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    iconRight: {
      type: String,
      default: 'has'
    }
  },
  components: {

  },
  computed: {

  },
  methods: {
    clickBack(){
      //alert('back');
      history.back()
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
