<template>
  <div class="invoiceDetail">
    <commonNav title="新建发票" iconRight="" />
    <div class="addBottom">

        <label class="mint-checklist-label">
          <span class="mint-checkbox">
            <input type="radio" class="mint-checkbox-input" name="name" value="2" v-model="checkType">
            <span class="mint-checkbox-core"></span>
          </span>
          <span class="mint-checkbox-label">单位</span>
        </label>

        <label class="mint-checklist-label">
          <span class="mint-checkbox">
            <input type="radio" class="mint-checkbox-input" name="name" value="1" v-model="checkType">
            <span class="mint-checkbox-core"></span>
          </span>
          <span class="mint-checkbox-label">个人</span>
        </label>

        <div v-if="checkType === '2'" class="unitDetail">
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
  import commonNav from '../components/commonNav.vue'
  import store from '../assets/lib/q.store.js'

  const customer_id = store.get('customer_id');
  const mobile_token = store.get('mobile_token');

  export default {
    data(){
      return {
        invoice_id: null,
        checkType: '2',
        unitTitle: null
      }
    },
    created(){
      const me = this;
      const {invoice_id, invoice_type, title} = me.$route.query;
      me.checkType = invoice_type;
      me.unitTitle = title;
      me.invoice_id = invoice_id;
    },
    components: {
      commonNav,
    },
    methods: {
      addInvoice(data, cb){
        const me = this;
        data.route = 'mapi/invoice/add/';
        data.format = 'jsonp';
        this.$http.jsonp(
            window.q.interfaceHost +'index.php?',
          {params: data})
          .then(res => {
          let data = res.body;
          console.log(data.code);
          if(data.code+'' === '0'){
            Toast('恭喜您添加成功')
          }else{
            Toast('暂无数据...')
          }
        }, err => {
          Toast('网络错误...')
        })

      },
      editInvoice(){
        const me = this;
        this.$http.jsonp(
            window.q.interfaceHost +'index.php?',
          {params: {
            route: 'mapi/invoice/edit',
            format: 'jsonp',
            invoice_type: me.checkType,
            title: me.unitTitle,
            invoice_id: me.invoice_id
          }})
          .then(res => {
          let data = res.body;
          console.log(data.code);
          if(data.code+'' === '0'){
            Toast('恭喜您修改成功')
          }else{
            Toast('修改失败,请重试')
          }
        }, err => {
          Toast('网络错误...')
        })

      },


      handleClick(){
        const me = this;
        console.log(me.$route.query)

        if(me.$route.query.edit){
          me.editInvoice();
        }else{
          if(me.checkType === '2' && !me.unitTitle){
            Toast('请填写单位名称');
            return;
          }

          me.addInvoice({
            customer_id,
            mobile_token,
            invoice_type: me.checkType,
            title: me.unitTitle,
            default: 1,
            ts: Math.random()
          }, res => {

          })
        }

      },



    },
    mounted() {

    },
    watch: {

    }
  }

</script>
