<template>
<div class="sidebar" @click='test'>
  sidebar
</div>
</template>

<style media="screen" scoped>
.side .sidebar{
  transform: translate3D(0,0,0);
}

.sidebar {
  width: 6.9rem;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  transform: translate3D(-7rem,0,0);
  -webkit-transition: -webkit-transform .2s cubic-bezier(.4,.01,.165,.99);
  transition: transform .2s cubic-bezier(.4,.01,.165,.99),-webkit-transform .2s cubic-bezier(.4,.01,.165,.99);
  background: red;
  z-index: 2147483646;
}

</style>

<script lang="babel">

import { TabContainer, TabContainerItem } from 'mint-ui';

//console.log(location.href)

export default {
  data() {
    return {

    }
  },
  components: {

  },
  computed: {

  },
  methods: {
    test(){
      alert(123);
    }
  },
  mounted() {

  },
  watch: {

  }
}
</script>
