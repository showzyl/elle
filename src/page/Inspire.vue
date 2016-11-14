<template>
<div class="inspire">
  <div class="inspireNav">
    <a @click.prevent="active = 'tab-container1'" :class="[active == 'tab-container1' ? 'on' : '']">ALL</a>
    <a @click.prevent="active = 'tab-container2'" :class="[active == 'tab-container2' ? 'on' : '']">独家</a>
    <a @click.prevent="active = 'tab-container3'" :class="[active == 'tab-container3' ? 'on' : '']">搭配</a>
  </div>
  <div class="page-tab-container">
    <mt-tab-container class="page-tabbar-tab-container" v-model="active" swipeable>
      <mt-tab-container-item id="tab-container1">
        <ul>
          <li v-for="item in items1" :key="item.id" v-if="items1">
            <h3>{{item.name}}</h3>
            <div class="" style="height: 5rem;">
              <img :src="item.image" alt="">
            </div>
          </li>
          <li v-else>
            暂无数据
          </li>
        </ul>
      </mt-tab-container-item>
      <mt-tab-container-item id="tab-container2">
        <ul>
          <li v-for="item in items2" :key="item.id" v-if="items2">
            <h3>{{item.name}}</h3>
            <div class="" style="height: 5rem;">
              <img :src="item.image" alt="">
            </div>
          </li>
          <li v-else>
            暂无数据
          </li>
        </ul>
      </mt-tab-container-item>
      <mt-tab-container-item id="tab-container3">
        <li v-for="item in items3" :key="item.id" v-if="items3.length">
            <h3>{{item.name}}</h3>
            <div class="" style="height: 5rem;">
              <img :src="item.image" alt="">
            </div>
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
    font-size: 0.45rem;
    line-height: 1rem;
    margin: 0 .4rem;
  }

   .inspireNav a.on{
     border-bottom: 1px solid black;
   }


</style>
<script lang="babel">

import { Toast, Cell, Checklist, Indicator, TabContainer, TabContainerItem } from 'mint-ui'
//import commonNav from '../components/commonNav.vue'
import core from '../assets/lib/q.core.js'
import store from '../assets/lib/q.store.js'
import footBar from '../components/footBar.vue'


export default {
  data(){
    return {
      active: 'tab-container1',
      scrolled: false,
      items1: [],
      items2: [],
      items3: []
    }
  },
  created(){ 
    var me = this

    Indicator.open({
      text: '加载中...',
      spinnerType: 'fading-circle'
    });

    ;[109,110,130].map(function(item,i){
      me.asyncData(item, function(res){
        let param = 'items'+ (i+1)
        me[param] = res
      })
    })

    //console.log(me.items3.length)
    
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
    asyncData(id, cb){
      var me = this
      $.ajax({
        url: 'http://106.75.17.211:6603/index.php?route=mapi/event&format=jsonp',
        data: {
          event_id: id
        },
        dataType: 'jsonp',
        jsonp: 'callback',
        crossDomain: true
      }).done(function(res){
        //console.log(res)
        Indicator.close()
        if(res.code+'' === '0' && res.data.app.length){
          cb && cb(res.data.app)
        }else{
          // 无数据
          cb && cb([])
        }
      }).fail(function(err){
        console.log(err)
      })
    }
  },
  mounted() {

  },
  watch: {

  }
}
</script>
