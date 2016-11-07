<template>
  <div class="profile">
    <commonNav title="梨子" />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import commonNav from '../components/commonNav.vue'

import { Toast, Indicator } from 'mint-ui'

export default {
  props: {

  },
  components: {
    commonNav
  },
  data () {
    return {
      msg: 'profile'
    }
  },
  methods: {
    test1(){


    }
  }
}
</script>

<style media="screen" scoped>
  
</style>
