<template>
  <div class="invoiceDetail">
    <form action="/test" >
      <commonNav title="新建发票" iconRight="" />
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

        <div v-if="checkname === 'unit'" class="unitDetail">
          <span class="unitName">单位名称</span>
          <div class="unitBox">
            <input type="text" name="unitname" class="unitInput" placeholder="请输入单位名称">
          </div>
        </div>

        <div class="btn btnSaveInvoice">
          保存
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

  .unitDetail{
    font-size: .4rem;
  }

  .unitName{
    display: inline-block;
    width: 20%;
    text-align: right;
    
  }

  .unitBox{
    display: inline-block;
    border-bottom: 1px solid;
    width: 75%;
    margin-left: 3%;

  }

  .unitInput{
    padding: .2rem 0;
    font-size: .4rem;
  }

  .btnSaveInvoice{
    position: fixed;
    left: 0;
    bottom: 0;
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
