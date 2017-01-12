<template>
<div class="address">
  <commonNav title="地址管理" iconRight="" />
  <ul class="addressItems">
    <li class="addressItem" v-for="item in address">
      <h3>
        {{item.firstname}}&nbsp&nbsp
        {{item.tel}}
      </h3>
      <div class="addMid">
        <i class="iconAdd"></i>&nbsp
        {{item.country}} {{item.zone}} {{item.city}} {{item.address_1}}
      </div>
      
      <div class="addBottom">
        <label class="mint-checklist-label">
          <span class="mint-checkbox">
            <input type="radio" class="mint-checkbox-input" name="t" v-if="item.is_default" checked>
            <input type="radio" class="mint-checkbox-input" name="t" v-else @click="setDefaultAdd({id: item.address_id})">
            <span class="mint-checkbox-core"></span>
          </span>
          <span class="mint-checkbox-label">设为默认</span>
        </label>

        <div class="iconList">
          <router-link :to="'/adddetail?id='+item.address_id
          + '&name=' + item.firstname
          + '&phone=' + item.tel
          + '&sex=' + item.sex
          + '&country=' + item.country
          + '&country_id=' + item.country_id
          + '&zone=' + item.zone
          + '&zone_id=' + item.zone_id
          + '&city=' + item.city
          + '&detailAddress=' + item.address_1
          ">
            <i class="iconPen"></i>
          </router-link>

          <a href="javascript:;" @click.prevent="delAddress({id: item.address_id})">
            <i class="iconGarbage"></i>
          </a>
        </div>
      </div>
    </li>

  </ul>
  <div class="btn btnAddAds">
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
    margin: 1.6rem .4rem;
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
    background-size: cover;
    background-image: url('../assets/img/address/address@3x.png');
  }

  .iconList i{
    display: inline-block;
    width: 20px;
    height: 22px;
    margin-left: .6rem;
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

  import { Toast, Checklist, Indicator, MessageBox } from 'mint-ui'
  import core from '../assets/lib/q.core.js'
  import store from '../assets/lib/q.store.js'
  import commonNav from '../components/commonNav.vue'

  const customer_id = store.get('customer_id');
  const mobile_token = store.get('mobile_token');

  export default {
    data(){
      return {
        address: []
      }
    },
    created(){
      const me = this;

      me.fetchAddressData({
        customer_id,
        mobile_token
      }, res => {
        me.address = res;
      })

    },
    components: {
      commonNav
    },
    computed: {


    },
    methods: {
      fetchAddressData(data, cb){
        const me = this;
        data.route = 'mapi/address';
        data.format = 'jsonp';
        this.$http.jsonp(
          window.q.interfaceHost +'index.php?',
          {
            params: data
          }
        ).then( res => {
          let data = res.body;
          console.log(data);
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
      setDefaultAdd({id}){
        const me = this;
        this.$http.jsonp(
          window.q.interfaceHost +'index.php?',
          {
            params: {
              customer_id,
              address_id: id,
              route: 'mapi/address/setdefault',
              format: 'jsonp'
            }
          }
        ).then( res => {
          let data = res.body;
          console.log(data);
          if(data.code+'' === '0'){

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
      delAddress({id}){
//        console.log(id);
        const me = this;

        MessageBox.confirm('确定删除此地址?').then(action => {
          if(action == 'confirm'){
            this.$http.jsonp(
              window.q.interfaceHost +'index.php?',
              {
                params: {
                  customer_id,
                  address_id: id,
                  route: 'mapi/address/delete',
                  format: 'jsonp'
                }
              }
            ).then( res => {
              let data = res.body;
              console.log(data);
              if(data.code+'' === '0'){
                location.reload();
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
          }
        })

      }
    },
    mounted() {

    },
    watch: {

    }
  }
</script>
