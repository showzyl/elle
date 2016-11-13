<template>
<div class="address">
  <!--<commonNav title="地址管理" iconRight="" />-->
  <ul class="addressItems">
    <li class="addressItem">
      <h3>
        梨子&nbsp&nbsp
        18511368463
      </h3>
      <div class="addMid">
        <i class="iconAdd"></i>&nbsp
        北京市西城区前门西大街
      </div>
      
      <div class="addBottom">
        <label class="mint-checklist-label">
          <span class="mint-checkbox">
            <input type="radio" class="mint-checkbox-input" value="" name="addname"> 
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

    <li class="addressItem">
      <h3>
        梨子&nbsp&nbsp
        18511368463
      </h3>
      <div class="addMid">
        <i class="iconAdd"></i>&nbsp
        北京市西城区前门西大街
      </div>
      
      <div class="addBottom">
        <label class="mint-checklist-label">
          <span class="mint-checkbox">
            <input type="radio" class="mint-checkbox-input" value="" name="addname"> 
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
  <div class="btn btnAddAds" @click="addAds">
    <router-link to="/adddetail">
      + 新建地址
    </router-link>
  </div>
  <!--<footBar pageName="classify" />-->
</div>
</template>
<style media="screen">
  .address{
    
  }

  .addressItems{
    margin: .8rem .4rem;
  }

  .addressItem{
    padding: .4rem 0;
    border-bottom: 1px solid;
  }

  .addressItem h3{
    font-size: .45rem;
    padding-bottom: .2rem;
  }

  .btnAddAds{
    position: fixed;
    left: 0;
    bottom: 0;
  }

  .addMid{
    /*padding: .2rem 0;*/
    padding: 0 0 .2rem 0;
  }

  .addBottom{
    overflow: hidden;
  }

  .iconList{
    float: right;
    padding: 0 .2rem 0 0;
  }

  .iconAdd{
    display: inline-block;
    width: .28rem;
    height: .4rem;
    margin: .2rem 0 0;
    /*background-color: red;*/
    background-size: cover;
    background-image: url('../assets/img/address/address@3x.png');

  }

  .iconList i{
    display: inline-block;
    width: .58rem;
    height: .6rem;
    /*margin-right: .2rem;*/
    margin-left: .6rem;
    /*background-color: red;*/
    background-size: cover;
  }

  .iconPen{
    background-image: url('../assets/img/address/pen@3x.png');
  }

  .iconGarbage{
    background-image: url('../assets/img/address/trash@3x.png');

  }

</style>
<script lang="babel">

import { Toast, Cell, Checklist, Indicator, TabContainer, TabContainerItem } from 'mint-ui'
// //import commonNav from '../components/commonNav.vue'
// import core from '../assets/lib/q.core.js'
import commonNav from '../components/commonNav.vue'
// import footBar from '../components/footBar.vue'


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
