<template>
  <div class="invoiceDetail">
    <commonNav title="新建发票" iconRight="" />
    <div class="addBottom">

        <label class="mint-checklist-label">
          <span class="mint-checkbox">
            <input type="radio" class="mint-checkbox-input" name="name" value="1" v-model="checkType"> 
            <span class="mint-checkbox-core"></span>
          </span>
          <span class="mint-checkbox-label">单位</span>
        </label>

        <label class="mint-checklist-label">
          <span class="mint-checkbox">
            <input type="radio" class="mint-checkbox-input" name="name" value="2" v-model="checkType"> 
            <span class="mint-checkbox-core"></span>
          </span> 
          <span class="mint-checkbox-label">个人</span>
        </label>

        <div v-if="checkType === '1'" class="unitDetail">
          <span class="unitName">单位名称</span>
          <div class="unitBox">
            <input type="text" v-model="unitTitle" class="unitInput" placeholder="请输入单位名称">
          </div>
        </div>

        <div class="btn btnSaveInvoice" @click="handleClick">
          保存
        </div>

      </div>
  </div>
</template>

<style media="screen" scoped>
  .invoiceDetail{

  }

  .addBottom{
    margin-top: 1.5rem;
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
    width: 70%;
    margin-left: 3%;

  }

  .unitInput{
    width: 100%;
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
        checkType: '1',
        unitTitle: null
      }
    },
    created(){ 
      var me = this
      console.log(me.checkType)
    },
    components: {
      commonNav,
    },
    computed: {
      // 有缓存
      
      
    },
    methods: {
      addInvoice(data, cb){
        const me = this;
        data.route = 'mapi/category/getallcategory';
        data.format = 'jsonp';
        this.$http.jsonp(
            window.q.interfaceHost +'index.php?',
          {params: data})
          .then(res => {
          //console.log(res)
          let data = res.body;
          console.log(data.data);

          if(data.data.list){
            cb && cb(data.data);
          }else{
            Toast('暂无数据...')
          }
        }, err => {
          console.log(err)
          Toast('网络错误...')
        })

      },
      handleClick(){
        console.log('handleClick')

      }

    },
    mounted() {

    },
    watch: {

    }
  }

</script>
