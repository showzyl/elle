<template>
<div class="addressDetail">
  <commonNav title="新建收货地址" iconRight="" />
  <ul class="addList">

    <li class="addItem">
      <span class="addItemTxt">收货人姓名</span> 
      <div class="addItemInputBox">
        <input type="text" name="unitname" placeholder="请输入姓名" class="addItemInput">
      </div>
    </li>

    <li class="addItem bb">
      <span class="addItemTxt"></span> 
      <div class="addBottom">

        <label class="mint-checklist-label">
          <span class="mint-checkbox">
            <input type="radio" class="mint-checkbox-input" name="name" value="boy" v-model="checkname"> 
            <span class="mint-checkbox-core"></span>
          </span>
          <span class="mint-checkbox-label">男士</span>
        </label>

        <label class="mint-checklist-label">
          <span class="mint-checkbox">
            <input type="radio" class="mint-checkbox-input" name="name" value="girl" v-model="checkname"> 
            <span class="mint-checkbox-core"></span>
          </span> 
          <span class="mint-checkbox-label">女士</span>
        </label>

      </div>

    </li>

    <li class="addItem bb">
      <span class="addItemTxt">手机号码</span> 
      <div class="addItemInputBox bbnone">
        <input type="text" name="unitname" placeholder="请输入姓名" class="addItemInput">
      </div>
    </li>

     <li class="addItem bb">
      <span class="addItemTxt">所在地区</span> 
      <div class="addItemInputBox bbnone">
        <div class="addItemInput choseArea">请选择地区</div>
      </div>
    </li>

    <li class="addItem">
      <span class="addItemTxt">详细地址</span> 
      <div class="addItemInputBox">
        <input type="text" name="unitname" placeholder="请输入详细地址" class="addItemInput">
      </div>
    </li>
  </ul>

  <div class="btn btnAddAds">添加地址</div>
  <!--<footBar pageName="classify" />-->
</div>
</template>
<style media="screen" scoped>

  .addItem{
    font-size: .4rem;
    padding: 0 2%;

  }
  .addItemTxt{
    display: inline-block;
    width: 23%;
    text-align: center;
  }
  .addItemInput{
    font-size: .4rem;
    
  }
  .addItem .addBottom{
    display: inline-block;
    padding: .4rem 0;
  }
  .addItemInputBox{
    display: inline-block;
    width: 72%;
    margin-left: 3%;
    padding: .4rem 0;
    border-bottom: 1px solid;
    
  }

  .bbnone{
    border-bottom: 0 none;
  }

  .bb{
    border-bottom: 1px solid;
  }
  
  .btnAddAds{
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    padding: .5rem 0;
    text-align: center;
    background-color: #000000;
    color: #fff;
    font-size: .45rem;
  }

  .choseArea{
    color: #a09f9f;
  }
  

</style>
<script lang="babel">

// import { Toast, Cell, Checklist, Indicator, TabContainer, TabContainerItem } from 'mint-ui'
// //import commonNav from '../components/commonNav.vue'
// import core from '../assets/lib/q.core.js'
import commonNav from '../components/commonNav.vue'
// import footBar from '../components/footBar.vue'


export default {
  data(){
    return {
      tab: null,
      checkname: 'boy'
    }
  },
  created(){ 
    var me = this
    // me.$route.query 获取参数
    console.log()
  },
  components: {
    commonNav
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
