<template>
  <div class="invoiceDetail">
    <form action="/test" >
      <div class="addBottom">

        <label class="mint-checklist-label">
          <span class="mint-checkbox">
            <input type="radio" class="mint-checkbox-input" name="name" value="unit" v-model="checkname"> 
            <span class="mint-checkbox-core"></span>
          </span>
          <span class="mint-checkbox-label">单位</span>
        </label>

         <label class="mint-checklist-label">
          <span class="mint-checkbox">
            <input type="radio" class="mint-checkbox-input" name="name" value="person" v-model="checkname"> 
            <span class="mint-checkbox-core"></span>
          </span> 
          <span class="mint-checkbox-label">个人</span>
        </label>

        <div v-if="checkname === 'unit'">
          <span class="unitName">单位名称</span>
          <input type="text" name="unitname">
        </div>

      </div>
    </form>
    <!--<footBar pageName="classify" />-->
  </div>
</template>

<style media="screen" scoped>
  .invoiceDetail{

  }

  .addBottom .mint-checklist-label{
    float: none;
    font-size: .4rem;
    margin: .4rem;
  }

</style>

<script lang="babel">

  import { Toast, Cell, Checklist, Indicator, TabContainer, TabContainerItem } from 'mint-ui'
  // //import commonNav from '../components/commonNav.vue'
  // import core from '../assets/lib/q.core.js'
  import commonNav from '../components/commonNav.vue'

  export default {
    data(){
      return {
        checkname: 'person'
      }
    },
    created(){ 
      var me = this
      console.log(me.checkname)
    },
    components: {
      commonNav,
      Checklist
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
