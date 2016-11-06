<template>
  <div class="catalogue">
    <div class="close">关闭</div>
    <ul class="orderList">
      <li class="orderItem">
        综合排序
      </li>
      <li class="orderItem">
        价格从低到高
      </li>
      <li class="orderItem">
        价格从高到低
      </li>
      <li class="orderItem">
        销量
      </li>
    </ul>
  </div>
</template>

<style media="screen" scoped>
  .catalogue{
    position: fixed;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    background: #fff;
    z-index: 2147483646;
  }

  .close{
    position: absolute;
    top: .2rem;
    right: .2rem;

  }

  .orderList{
    padding: 3rem 0;
    text-align: center;
  }

  .orderItem{
    padding: .5rem 0;
  }

</style>

<script lang="babel">

import { TabContainer, TabContainerItem } from 'mint-ui';

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
    
  },
  mounted() {

  },
  watch: {

  }
}
</script>