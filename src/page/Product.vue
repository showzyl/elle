<template>
  <div class="product">
    <commonNav title="商品详情" iconRight="" />
    <!--{{$route.params.id}}-->
    <div class="swipe">
      <mt-swipe :auto="4000">
        <mt-swipe-item>1</mt-swipe-item>
        <mt-swipe-item>2</mt-swipe-item>
        <mt-swipe-item>3</mt-swipe-item>
      </mt-swipe>
    </div>

  </div>
</template>
<style media="screen" scoped>
  .product{

  }

  .product .swipe{
    height: 200px;
  }

</style>
<script lang="babel">
import commonNav from '../components/commonNav.vue'
import { Swipe, SwipeItem } from 'mint-ui'

export default {
  components: {
    commonNav,
    Swipe,
    SwipeItem
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
