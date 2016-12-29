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
            <router-link :to=" '/invdetail?edit=1&invoice_id='+item.invoice_id+'&invoice_type='+item.invoice_type+'&title='+item.title ">
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

  .addressItems{
    margin: 0 .4rem;
  }

  .commonNav{
    position: relative;
  }

  .invoice{

  }

  .btnAddInvoice{
    position: fixed;
    bottom: 0;
    left: 0;
  }

</style>

<script lang="babel">

  import { Toast, Checklist, Indicator, MessageBox } from 'mint-ui'
  import store from '../assets/lib/q.store.js'
  import util from '../assets/lib/q.util.js'
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
      const me = this;

      util.fetchInterface(me, 0, {
        customer_id,
        mobile_token,
        route: 'mapi/invoice'
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
        const me = this;
        util.fetchInterface(me, 0, {
          customer_id,
          mobile_token,
          invoice_id,
          route: 'mapi/invoice/setdefault',
        }, (res, code) => {
          if(code+'' === '0'){
            // 设置成功

          }
        })

      },
      delInvoice({invoice_id}){
        MessageBox.confirm('确定删除此发票?').then(action => {
          if(action == 'confirm'){
            util.fetchInterface(me, 0, {
              customer_id,
              invoice_id,
              route: 'mapi/invoice/delete',
            }, res => {

            })

          }
        })


      },

    },
    mounted() {

    },
    watch: {

    }
  }

</script>
