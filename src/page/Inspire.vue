<template>
<div class="inspire">
  <div class="inspireNav">
    <a @click.prevent="active = 'tab-container0'" :class="[active == 'tab-container0' ? 'on' : '']">ALL</a>
    <a @click.prevent="active = 'tab-container1'" :class="[active == 'tab-container1' ? 'on' : '']">独家</a>
    <a @click.prevent="active = 'tab-container2'" :class="[active == 'tab-container2' ? 'on' : '']">搭配</a>
    <a @click.prevent="active = 'tab-container3'" :class="[active == 'tab-container3' ? 'on' : '']">礼物</a>
    <a @click.prevent="active = 'tab-container4'" :class="[active == 'tab-container4' ? 'on' : '']">推荐</a>
    <a @click.prevent="active = 'tab-container5'" :class="[active == 'tab-container5' ? 'on' : '']">话题</a>
    <a @click.prevent="active = 'tab-container6'" :class="[active == 'tab-container6' ? 'on' : '']">LOOKBOOK</a>
  </div>
  <div class="page-tab-container">
    <mt-tab-container class="page-tabbar-tab-container" v-model="active" swipeable>
      
      <mt-tab-container-item id="tab-container0" v-for="tab in tabs">
        <ul>
          <li v-for="item in items0" :key="item.id" v-if="items0">
            <a :href="item.clickUrl">
            <img :src="item.app_image" alt="">
            </a>
          </li>
          <li v-else>
            暂无数据
          </li>
        </ul>
      </mt-tab-container-item>
      
      <mt-tab-container-item id="tab-container1">
        <ul>
          <li v-for="item in items1" :key="item.id" v-if="items1">
            <img :src="item.app_image" alt="">
          </li>
          <li v-else>
            暂无数据
          </li>
        </ul>
      </mt-tab-container-item>
      <mt-tab-container-item id="tab-container2">
          <li v-for="item in items2" :key="item.id" v-if="items2">
           <img :src="item.app_image" alt="">
          </li>
          <li v-else>
            暂无数据
          </li>
      </mt-tab-container-item>

      <mt-tab-container-item id="tab-container3">
          <li v-for="item in items3" :key="item.id" v-if="items3">
            <img :src="item.app_image" alt="">
          </li>
          <li v-else>
            暂无数据
          </li>
      </mt-tab-container-item>

      <mt-tab-container-item id="tab-container4">
          <li v-for="item in items4" :key="item.id" v-if="items4">
            <img :src="item.app_image" alt="">
          </li>
          <li v-else>
            暂无数据
          </li>
      </mt-tab-container-item>

      <mt-tab-container-item id="tab-container5">
          <li v-for="item in items5" :key="item.id" v-if="items5">
           <img :src="item.app_image" alt="">
          </li>
          <li v-else>
            暂无数据
          </li>
      </mt-tab-container-item>

      <mt-tab-container-item id="tab-container6">
          <li v-for="item in items6" :key="item.id" v-if="items6">
           <img :src="item.app_image" alt="">
          </li>
          <li v-else>
            暂无数据
          </li>
      </mt-tab-container-item>

    </mt-tab-container>
  </div>
  <footBar pageName="inspire" />
</div>
</template>
<style media="screen" scoped>
  .inspire{

  }

  .inspireNav{
    display: -webkit-box;
    margin-bottom: .3rem;
  }

  .inspireNav a{
    display: block;
    -webkit-box-flex: 1;
    text-align: center;
    font-size: 0.35rem;
    line-height: 1rem;
    /*margin: 0 .4rem;*/
  }

   .inspireNav a.on{
     border-bottom: 1px solid black;
   }

   ul li{
     height: 10rem;
   }


</style>
<script lang="babel">

import { Toast, Cell, Checklist, Indicator, TabContainer, TabContainerItem } from 'mint-ui'
//import commonNav from '../components/commonNav.vue'
import core from '../assets/lib/q.core.js'
import store from '../assets/lib/q.store.js'
import footBar from '../components/footBar.vue'
import util from '../assets/lib/q.util.js'

export default {
  data(){
    return {
      active: 'tab-container0',
      scrolled: false,
      tabs: [0,1,2,3,4,5,6],
      items0: [],
      items1: [],
      items2: [],
      items3: [],
      items4: [],
      items5: [],
      items6: []
    }
  },
  created(){ 
    var me = this;
    Indicator.open({
      text: '加载中...',
      spinnerType: 'fading-circle'
    });

    me.tabs.forEach( (item, i) => {
      me.fetchData({
        event_type_id: item
      }, res => {
        res.forEach(item => {
          item.clickUrl = '/#/inspire/'+item.event_id
        })
        me['items'+item] = me['items'+item].concat(res);
        //console.log( me['items'+i] )
      })
    });
    
  },
  components: {
    TabContainer,
    TabContainerItem,
    footBar
  },
  computed: {
    // 有缓存
    
  },
  methods: {
    // 没有缓存
    fetchData(data, cb){
      var me = this;
      data.route = 'mapi/eventlist';
      data.format = 'jsonp';
      this.$http.jsonp(
        window.q.interfaceHost +'index.php?',
        {params: data})
      .then(res => {
        Indicator.close();
        //console.log(res)
        let data = res.body;
        if(data.code+'' === '0'){
          cb && cb(data.data);
        }else{
          Toast('暂无数据...')
        }
      }, err => {
        console.log(err);        
        Indicator.close();
        Toast('网络错误...');
      })
    }

  },
  mounted() {

  },
  watch: {

  }
}
</script>
