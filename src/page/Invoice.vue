<template>
  <div class="invoice">
    <commonNav title="发票" iconRight="" />

    <div class="btn btnAddInvoice">
      <router-link to="/invdetail">
      + 新建发票
      </router-link>
    </div>

    <ul class="addressItems">
      <li class="addressItem" v-for="item in invoiceData">
        <h3 v-if="item.invoice_type === '2'">
          单位
        </h3>
        <h3 v-if="item.invoice_type === '1'">
          个人
        </h3>
        <div class="addMid">
          {{item.title}}
        </div>
        
        <div class="addBottom">
          <label class="mint-checklist-label">
            <span class="mint-checkbox">
              <input type="radio" class="mint-checkbox-input" name="t" v-if="item.is_default === '1'" checked>
              <input type="radio" class="mint-checkbox-input" name="t" v-else @click="setDefaultInv({invoice_id: item.invoice_id})">
              <span class="mint-checkbox-core"></span>
            </span> 
            <span class="mint-checkbox-label">设为默认</span>
          </label>

          <div class="iconList">
            <router-link to="/">
              <i class="iconPen"></i>
            </router-link>

            <a href="javascript:;" @click.prevent="delInvoice({invoice_id: item.invoice_id})">
              <i class="iconGarbage"></i>
            </a>
          </div>
        </div>

        
      </li>
    </ul>

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

  import { Toast, Checklist, Indicator } from 'mint-ui'
  import store from '../assets/lib/q.store.js'
  import commonNav from '../components/commonNav.vue'

  const customer_id = store.get('customer_id');
  const mobile_token = store.get('mobile_token');

  export default {
    data(){
      return {
        invoiceData: []
      }
    },
    created(){ 
      var me = this;
      me.fetchInvData({
        customer_id,
        mobile_token
      }, res => {
        me.invoiceData = res;
      })

    },
    components: {
      commonNav,
    },
    computed: {
      // 有缓存
      
      
    },
    methods: {
      setDefaultInv({invoice_id}){
        this.$http.jsonp(
          window.q.interfaceHost +'index.php?',
          {
            params: {
              customer_id,
              invoice_id,
              route: 'mapi/invoice/setdefault',
              format: 'jsonp'
            }
          }
        ).then( res => {
          let data = res.body;
          console.log(data);
          if(data.code+'' === '0'){
//            location.reload();
          }else{
            Toast({
              message: '暂无数据...',
              position: 'bottom',
              duration: 3000
            })
          }
        }, err => {
//          Toast('网络错误...')
        })
      },
      fetchInvData(data, cb){
        const me = this;
        data.route = 'mapi/invoice';
        data.format = 'jsonp';
        this.$http.jsonp(
          window.q.interfaceHost +'index.php?',
          {
            params: data
          }
        ).then( res => {
          let data = res.body;
          if(data.code+'' === '0'){
            cb && cb(data.data);
          }else{
            Toast({
              message: '暂无数据...',
              position: 'bottom',
              duration: 3000
            })
          }
          Indicator.close();
        }, err => {
          Indicator.close();
          Toast('网络错误...')
        })
      },
      delInvoice({invoice_id}){
        console.log(invoice_id);
      },

    },
    mounted() {

    },
    watch: {

    }
  }

</script>
