<template>

    <div class="profile">
      <!--<commonNav title="梨子" />-->
      <!--<recommend title="为您优选商品" />-->
      props
    </div>
</template>

<script>
import { mapState } from 'vuex'
import commonNav from '../components/commonNav.vue'
import recommend from '../components/recommend.vue'


import { Toast, Indicator } from 'mint-ui'

export default {
  props: {

  },
  created(){
    console.log(this.$children)
  },
  components: {
    commonNav,
    recommend
  },
  data () {
    return {
      msg: 'profile',
      myform: {},
      model: {}
    }
  },
  methods: {
    onSubmit: function() {
      console.log(this.myform.$valid);
      if(this.myform.$valid==true)
          alert("提交成功");
    }
  }
}
</script>

<style media="screen" scoped>
  
</style>
