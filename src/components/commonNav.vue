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
  height: 0.8rem;
  width: 0.8rem;
  margin-left: .6rem;
  margin-top: .5rem;
}

.iconMenu{
  position: absolute;
  display: block;
  background-image: url(../assets/img/menubtn.png);
  background-size: cover;
  height: 0.8rem;
  width: 0.8rem;
  right: 0.6rem;
  bottom: 0.3rem;
}

.commonNav{
  position: relative;
  height: 1.5rem;
  line-height: 1.5rem;
}

.title{
  width: 70%;
  margin: 0 auto;
  text-align: center;
  font-size: .6rem;
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
