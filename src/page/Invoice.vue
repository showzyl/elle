<template>
  <div class="invoice">
    <commonNav title="发票" iconRight="" />

    <div class="btn btnAddInvoice" @click="addAds">
      <router-link to="/invdetail">
      + 新建发票
      </router-link>
    </div>

    <ul class="addressItems">
      <li class="addressItem">
        <h3>
          个人
        </h3>
        <div class="addMid">
          北京市西城区前门西大街
        </div>
        
        <div class="addBottom">
          <label class="mint-checklist-label">
            <span class="mint-checkbox">
              <input type="checkbox" class="mint-checkbox-input" value=""> 
              <span class="mint-checkbox-core"></span>
            </span> 
            <span class="mint-checkbox-label">设为默认</span>
          </label>

          <div class="iconList">
            <router-link to="/">
              <i class="iconPen"></i>
            </router-link>
            <router-link to="/">
              <i class="iconGarbage"></i>
            </router-link>
          </div>
        </div>

        
      </li>
    </ul>

    <!--<footBar pageName="classify" />-->

  </div>
</template>

<style media="screen" scoped>
  .invoice{

  }

  .btnAddInvoice{
    position: fixed;
    bottom: 0;
    left: 0;
  }

</style>

<script lang="babel">

  import { Toast, Cell, Checklist, Indicator, TabContainer, TabContainerItem } from 'mint-ui'
  // //import commonNav from '../components/commonNav.vue'
  // import core from '../assets/lib/q.core.js'
  import commonNav from '../components/commonNav.vue'
  import priceRange from '../components/priceRange.vue'

  export default {
    data(){
      return {

      }
    },
    created(){ 
      var me = this

    },
    components: {
      commonNav,
      Checklist,
      priceRange
    },
    computed: {
      // 有缓存
      
      
    },
    methods: {
      // 没有缓存
      asyncData(id, cb){
        var me = this
        
      },
      addAds(){
        console.log('add')
      }

    },
    mounted() {

    },
    watch: {

    }
  }

</script>
