<template>
<div class="">

  <div class="indexNav">
    <div class="navTab">
      <a @click.prevent="active = 'tab-container1'" v-bind:class="[active == 'tab-container1' ? 'on' : '']">女士</a>
      <a @click.prevent="active = 'tab-container2'" v-bind:class="[active == 'tab-container2' ? 'on' : '']">男士</a>
      <a @click.prevent="active = 'tab-container3'" v-bind:class="[active == 'tab-container3' ? 'on' : '']">生活</a>
      <i class="iconMenu" @click="menuToggle"></i>
    </div>
  </div>
  <div class="page-tab-container">
    <mt-tab-container class="page-tabbar-tab-container" v-model="active" swipeable>
      <mt-tab-container-item id="tab-container1">
        content1
      </mt-tab-container-item>
      <mt-tab-container-item id="tab-container2">
        content2
      </mt-tab-container-item>
      <mt-tab-container-item id="tab-container3">
        content3
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
  <sideBar/>
</div>
</template>

<style media="screen" scoped>


.iconMenu{
  position: absolute;
  display: block;
  background-image: url(../assets/img/menubtn.png);
  background-size: cover;
  height: 0.7rem;
  width: 0.7rem;
  right: 0.6rem;
  bottom: 0.4rem;
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

import { TabContainer, TabContainerItem } from 'mint-ui';
import sideBar from '../components/sideBar.vue';

//console.log(location.href)

export default {
  data() {
    return {
      active: 'tab-container1',
      //bMenuToggle: false
    }
  },
  components: {
    TabContainer,
    TabContainerItem,
    sideBar
  },
  computed: {

  },
  methods: {
    menuToggle(){
      document.body.className += 'side'
      document.querySelector('.mask').style.display = 'block'
      // this.bMenuToggle = !this.bMenuToggle
      // if(this.bMenuToggle){
      //   console.log(1);
      //   document.body.className += 'side'
      //   document.querySelector('.mask').style.display = 'block'
      // }
      // else{
      //   console.log(2)
      //   document.body.className = ''
      //   document.querySelector('.mask').style.display = 'none'
      // }
    }
  },
  mounted() {

  },
  watch: {

  }
}
</script>
