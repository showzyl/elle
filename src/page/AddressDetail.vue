<template>
<div class="addressDetail">
  <div class="main" v-if="tab === 'main'">
    <commonNav title="新建收货地址" iconRight="" />
    <ul class="addList">

      <li class="addItem">
        <span class="addItemTxt">收货人姓名</span>
        <div class="addItemInputBox">
          <input type="text" name="unitname" v-model="usernName" placeholder="请输入姓名" class="addItemInput">
        </div>
      </li>

      <li class="addItem bb">
        <span class="addItemTxt"></span>
        <div class="addBottom">

          <label class="mint-checklist-label">
            <span class="mint-checkbox">
              <input type="radio" class="mint-checkbox-input" value="1" v-model="sex">
              <span class="mint-checkbox-core"></span>
            </span>
            <span class="mint-checkbox-label">男士</span>
          </label>

          <label class="mint-checklist-label">
            <span class="mint-checkbox">
              <input type="radio" class="mint-checkbox-input" value="2" v-model="sex">
              <span class="mint-checkbox-core"></span>
            </span>
            <span class="mint-checkbox-label">女士</span>
          </label>

        </div>

      </li>

      <li class="addItem bb">
        <span class="addItemTxt">手机号码</span>
        <div class="addItemInputBox bbnone">
          <input type="text" v-model.number="phone" v-model.trim="phone" placeholder="请输入手机号" class="addItemInput">
        </div>
      </li>

       <li class="addItem bb">
        <span class="addItemTxt">所在地区</span>
        <div class="addItemInputBox bbnone">
          <div class="addItemInput choseArea" @click="choseRegion" v-if="!provinceInfo.name && !cityInfo.name && !countryInfo.name">
            请选择地区
          </div>
          <div class="addItemInput choseArea" v-else>
            {{provinceInfo.name}} {{cityInfo.name}} {{countryInfo.name}}
          </div>
        </div>
      </li>

      <li class="addItem">
        <span class="addItemTxt">详细地址</span>
        <div class="addItemInputBox">
          <input type="text" v-model="detailAddress" placeholder="请输入详细地址" class="addItemInput">
        </div>
      </li>
    </ul>
    <div class="btn btnAddAds" @click="handleClick">添加地址</div>
  </div>

  <div class="region" v-if="tab === 'province'">
    <div class="regionNav">
      <i class="iconBack" @click.prevent="tab = 'main' "></i>
      <h2 class="title">选择地区</h2>
    </div>

    <ul>
      <li v-for="item in province" @click="renderCity({id: item.country_id, name: item.name})">
        {{item.name}}
      </li>
    </ul>
  </div>

  <div class="region" v-if="tab === 'city'">
    <div class="regionNav">
      <i class="iconBack" @click.prevent="tab = 'province' "></i>
      <h2 class="title">
        选择地区
      </h2>
    </div>
    <ul>
      <li v-for="item in city" @click="renderCountry({id: item.zone_id,name: item.name})">
        {{item.name}}
      </li>
    </ul>
  </div>

  <div class="region" v-if="tab === 'country'">
    <div class="regionNav">
      <i class="iconBack" @click.prevent="tab = 'city' "></i>
      <h2 class="title">
        选择地区
      </h2>
    </div>
    <ul>
      <li v-for="item in country" @click="doneChoseRegion({id: item.city_id, name: item.name})">
        {{item.name}}
      </li>
    </ul>
  </div>

  <!--<footBar pageName="classify" />-->
</div>
</template>

<style media="screen" scoped>

  .regionNav{
    height: 1.2rem;
    line-height: 1.2rem;
    text-align: center;
    position: relative;
  }

  .iconBack{
    position: absolute;
    display: block;
    background-image: url(../assets/img/backbtn.png);
    background-repeat: no-repeat;
    background-size: contain;
    height: 25px;
    width: 28px;
    margin: .4rem;
  }

  .addList{
    margin-top: 1.5rem;
  }

  .region ul{
    font-size: .4rem;
    /*background-color: #e6e6e6;*/
  }

  .region ul li{
    padding: .45rem;
    border-bottom: 1px solid #a09f9f;
  }

  .region ul li:last-child{
    border-bottom: 0 none;
  }

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
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  

</style>
<script lang="babel">

 import { Toast, Indicator } from 'mint-ui'
 import commonNav from '../components/commonNav.vue'
 import util from '../assets/lib/q.util.js'
 import store from '../assets/lib/q.store.js'

 const customer_id = store.get('customer_id');
 const mobile_token = store.get('mobile_token');

 export default {
    data(){
      return {
        tab: 'main',
        province: [],
        city: [],
        country: [],
        provinceInfo: {
          name: null,
          id: null
        },
        cityInfo: {
          name: null,
          id: null
        },
        countryInfo: {
          name: null,
          id: null
        },
        sex: '1',
        usernName: null,
        phone: null,
        region: null,
        detailAddress: null
      }
    },
    created(){
      const me = this;
      const {
        name,
        phone,
        sex,
        detailAddress,
        country,
        country_id,
        zone,
        zone_id,
        city
      } = me.$route.query;

      // edit
      if(phone){
        me.usernName = name;
        me.sex = sex;
        me.phone = phone;
        me.detailAddress = detailAddress;
        me.provinceInfo = {
          id: country_id,
          name: country
        };
        me.cityInfo = {
          id: zone_id,
          name: zone
        };
        me.countryInfo = {
          name: city
        };
        return;
      }

      util.fetchInterface(me, 0, {
        route: 'mapi/register/country'
      }, res => {
        Indicator.close();

        if(res === 'notMatch'){
          Toast({
            message: '暂无数据...',
            position: 'bottom',
            duration: 3000
          });
          return;
        }

        if(res === 'notMatch'){
          Toast('网络错误...');
          return;
        }

        me.province = res;
      })

    },
    components: {
      commonNav
    },
    computed: {
      // 有缓存

    },
    methods: {
      choseRegion(){
        const me = this;
        me.tab = 'province';
        console.log(123)
      },
      renderCity({id, name}){
        const me = this;
        me.provinceInfo = {
          id,
          name
        };

        util.fetchInterface(me, 0, {
          route: 'mapi/register/countrylist',
          country_id: id
        }, res => {
          me.tab = 'city';
          me.city = res.zone;
        })

      },
      renderCountry({id, name}){
        const me = this;
        console.log(id);
        me.cityInfo = {
          id,
          name
        };

        util.fetchInterface(me, 0, {
          route: 'mapi/register/zone',
          zone_id: id
        }, res => {
          me.tab = 'country';
          me.country = res.city;
        })
      },
      doneChoseRegion({id, name}){
        const me = this;
        me.countryInfo = {
          id,
          name
        };
        me.tab = 'main';
        console.log(me.provinceInfo.name,me.cityInfo.name,me.countryInfo.name)
      },
      addAds(){
        const me = this;
        console.log(me.sex);
        console.log(me.usernName);
        if(!me.usernName){
          Toast('请输入姓名');
          return;
        }
        if(!me.phone){
          Toast('请输入手机号');
          return;
        }
        if(!me.provinceInfo.id || !me.cityInfo.id ){
          Toast('请选择地区');
          return;
        }
        if(!me.detailAddress){
          Toast('请填写详细地址');
          return;
        }

        util.fetchInterface(me, 0, {
          customer_id,
          mobile_token,
          firstname: me.usernName,
          sex: me.sex,
          tel: me.phone,
          route: 'mapi/address/add',
          country_id: me.provinceInfo.id,
          zone_id: me.cityInfo.id,
          city_id: me.countryInfo.id,
          city: me.countryInfo.name,
          address_1: me.detailAddress,
          default: 1,
          ts: Math.random()
        }, res => {
          // 添加成功
          Toast('添加成功');
          if(me.$route.source === 'confirmorder'){
            location.href = '/#/confirmorder';
          }else{

          }

        })

//        me.postAddress({
//          customer_id,
//          mobile_token,
//          firstname: me.usernName,
//          sex: me.sex,
//          tel: me.phone,
//          country_id: me.provinceInfo.id,
//          zone_id: me.cityInfo.id,
//          city_id: me.countryInfo.id,
//          city: me.countryInfo.name,
//          address_1: me.detailAddress,
//          default: 1,
//          ts: Math.random()
//        }, res => {
//          console.log(res);
//          // 添加成功
//          Toast('添加成功');
//        })

      },
      editAds(data, cb){
        const me = this;
        data.route = 'mapi/address/edit';
        data.format = 'jsonp';
        this.$http.jsonp(
          window.q.interfaceHost +'index.php?',
          {
            params: data
          }
        ).then( res => {
          let data = res.body;
          if(data.code+'' === '0'){
            cb && cb(data);
          }else{
            Toast({
              message: '暂无数据...',
              position: 'bottom',
              duration: 3000
            })
          }
          me.loading = false;
          Indicator.close();
        }, err => {
          Indicator.close();
          me.loading = false;
          //console.log(res)
          Toast('网络错误...')
        })
      },
      handleClick(){
        const me = this;
        if(me.$route.query.phone){
          util.fetchInterface(me, 0, {
            customer_id,
            mobile_token,
            route: 'mapi/address/edit',
            firstname: me.usernName,
            sex: me.sex,
            tel: me.phone,
            country_id: me.provinceInfo.id,
            zone_id: me.cityInfo.id,
            city_id: me.countryInfo.id,
            city: me.countryInfo.name,
            address_1: me.detailAddress,
            ts: Math.random()
          }, res => {

          })

//          me.editAds({
//            customer_id,
//            mobile_token,
//            firstname: me.usernName,
//            sex: me.sex,
//            tel: me.phone,
//            country_id: me.provinceInfo.id,
//            zone_id: me.cityInfo.id,
//            city_id: me.countryInfo.id,
//            city: me.countryInfo.name,
//            address_1: me.detailAddress,
//            ts: Math.random()
//          })
        }else{
          me.addAds()
        }

      }

    },
    mounted() {

    },
    watch: {

    }
  }

</script>
