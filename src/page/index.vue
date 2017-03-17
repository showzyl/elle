<template>
  <div id="index">
    <download />
    <div class="indexNav">
      <div class="navTab">
        <a @click.prevent="clickTab(0)" :class="[active == 'tab-container0' ? 'on' : '']">女士</a>
        <a @click.prevent="clickTab(1)" :class="[active == 'tab-container1' ? 'on' : '']">男士</a>
        <a @click.prevent="clickTab(2)" :class="[active == 'tab-container2' ? 'on' : '']">生活</a>
        <i class="iconMenu" @click="menuToggle"></i>
      </div>
      <div class="tab-bg0" id="tab-bg0" style="z-index: -1;"></div>
    </div>
    <div class="page-tab-container">
      <div class="page-tabbar-tab-container">
        <div id="tab-container0" v-if="active == 'tab-container0'">
          <div style="margin: 2rem 0 .1rem 0;" v-for="(item, index) in renderData0" v-if="index === 0">
            <!--<router-link to=" 'item.clickUrl' ">-->
            <a :href="item.clickUrl" style="display: block;">
              <!--<div class="tab-bg0" id="tab-bg0"></div>-->
              <!--<div class="item-mask0"></div>-->
              <div class="content1">
                <p>{{ item.object_title }}</p>
                <p>{{ item.object_description }}</p>
              </div>
              <img :src="item.object_image" alt="object_image">
            </a>
            <!--</router-link>-->
          </div>
          <div class="tab-container" v-else>
            <a :href="item.clickUrl">
              <div class="imgBox">
                <img :src="item.object_image" alt="object_image">
              </div>
              <div class="maincontent">
                <h3 class="tit">{{ item.object_title }}</h3>
                <p class="desc">
                  {{ item.object_description }}
                </p>
              </div>
            </a>
          </div>
        </div>
        <div id="tab-container1" v-if="active == 'tab-container1'">
          <div v-for="(item, index) in renderData1" class="tab-container-one" v-if="index === 0">
            <a :href="item.clickUrl"  style="display: block;">
              <!--<div class="tab-bg1" id="tab-bg1"></div>-->
              <!--<div class="item-mask1"></div>-->
              <div class="content1">
                <p>{{ item.object_title }}</p>
                <p>{{ item.object_description }}</p>
              </div>
              <img :src="item.object_image" alt="object_image">
            </a>
          </div>

          <div class="tab-container" v-else>
            <a :href="item.clickUrl">
              <div class="imgBox">
                <img :src="item.object_image" alt="object_image">
              </div>
              <div class="maincontent">
                <h3 class="tit">{{ item.object_title }}</h3>
                <p class="desc">
                  {{ item.object_description }}
                </p>
              </div>
            </a>
          </div>
        </div>
        <div class="tab-container2" v-if="active == 'tab-container2'">
          <div v-for="(item, index) in renderData2" class="tab-container-one" v-if="index === 0">
            <a :href="item.clickUrl" style="display: block;">
              <!--<div class="tab-bg2" id="tab-bg2"></div>-->
              <!--<div class="item-mask2"></div>-->
              <div class="content1">
                <p>{{ item.object_title }}</p>
                <p>{{ item.object_description }}</p>
              </div>
              <img :src="item.object_image" alt="object_image">
            </a>
          </div>

          <div class="tab-container" v-else>
            <a :href="item.clickUrl">
              <div class="imgBox">
                <img :src="item.object_image" alt="object_image">
              </div>
              <div class="maincontent">
                <h3 class="tit">{{ item.object_title }}</h3>
                <p class="desc">
                  {{ item.object_description }}
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
    
    <sideBar :clickTab="clickTab" />

    <footBar pageName="index"/>

    <loadMore :loading="loading" >

  </div>
</template>
<script lang="babel">
  import Vue from 'vue'
  import footBar from '../components/footBar.vue'
  import loadMore from '../components/loadmore.vue'
  import { Toast, Indicator } from 'mint-ui'
  import sideBar from '../components/sideBar.vue'
  import util from '../assets/lib/q.util.js'
  import download from '../components/download.vue';

  export default {
    data() {
      return {
        loading: false,
        bLoadData0: true,
        bLoadData1: true,
        bLoadData2: true,
        active: 'tab-container0',
        scrollTop0: 0,
        scrollTop1: 0,
        scrollTop2: 0,
        renderData0: [],
        renderData1: [],
        renderData2: [],
        pageNo0: 1,
        pageNo1: 1,
        pageNo2: 1
      }
    },
    created(){
      const me = this;

      Indicator.open({
        text: '加载中...',
        spinnerType: 'fading-circle'
      });

      [1,2,3].forEach(function(item, i) {
        me.fetchData({
          category_id: item,
          page_id: 1
        }, function(data){
          
          data.forEach(function(item){
            switch(item.object_type){
              case '1': // Product
                item.clickUrl = '/#/product/'+item.object_id;
              break;
              case '2': // Brand
                item.clickUrl = '/#/brand/'+item.object_id;
              break;
              case '4': // inspire
                item.clickUrl = '/#/inspire/'+item.object_id;
              break;
              default:
                item.clickUrl = '#';
            }
          })

          me['renderData' + i] = me['renderData' + i].concat(data);
        })

      })

      // 下拉加载更多
      window.onscroll = function(e) {
        if(me.$route.path !== '/') return;

        if(me.active === 'tab-container0'){
          me.scrollTop0 = document.body.scrollTop;
          me.loadmoreData(0);
        }else if(me.active === 'tab-container1'){
          me.scrollTop1 = document.body.scrollTop;
          me.loadmoreData(1);
        }else if(me.active === 'tab-container2'){
          me.scrollTop2 = document.body.scrollTop;
          me.loadmoreData(2);
        }

      }

      me.switchTab();
      
    },
    components: {
      footBar,
      sideBar,
      loadMore,
      download
    },
    computed: {},
    methods: {
      menuToggle(){
        document.body.className += 'side';
        document.querySelector('.mask').className = 'mask';
      },
      fetchData(data, cb){
        const me = this;
        data.route = 'mapi/home_waterfall';
        util.fetchInterface(me, 0, data, function (res) {
          Indicator.close();
          me.loading = false;
          cb(res)
        });

      },
      clickTab(tabNum){
        const me = this;
        me.active = 'tab-container' + tabNum;
        let label = 'woman';
        switch (tabNum){
          case 0:
            label = 'woman';
            break;
          case 1:
            label = 'man';
            break;
          case 2:
            label = 'life';
            break;
        }

        location.href = '/#/?tab=' + label;

        setTimeout(function(){
          window.scrollTo(0, me['scrollTop' + tabNum]);
        }, 200)

      },
      switchTab(){
        const me = this;
        let tab = me.$route.query.tab;
        switch (tab){
          case 'man':
            me.clickTab(1);
            me.active = 'tab-container1';
            break;
          case 'life':
            me.clickTab(2);
            me.active = 'tab-container2';
            break;
        }
      },
      loadmoreData(n){
        const me = this;
        //console.log(n)
        
        setTimeout(function() {
          if (util.getScrollHeight() <= (util.getWindowHeight() + util.getDocumentTop() + 300)) {
            if (util.scrollFunc() == 'down' && me['bLoadData'+n]) {
              //console.log(13)
              me['bLoadData'+n] = false;
              me.loading = true;
              me['pageNo'+n]++;
              me.fetchData({
                category_id: (n+1),
                page_id: me['pageNo'+n]
              }, function(res){
                //console.log(res);
                const tab = 'renderData' + n;

                res.forEach(function(item){
                  switch(item.object_type){
                    case '1': // Product
                      item.clickUrl = '/#/product/'+item.object_id;
                      break;
                    case '2': // Brand
                      item.clickUrl = '/#/brand/'+item.object_id;
                      break;
                    case '4': // inspire
                      item.clickUrl = '/#/inspire/'+item.object_id;
                      break;
                    default:
                      item.clickUrl = '#';
                  }
                })

                //console.log(tab)
                me[tab] = me[tab].concat(res);
                me['bLoadData'+n] = true;
              });
            }
          }
        }, 210)

      }
    },
    mounted() {

    },
    watch: {}
  }
</script>

<style scoped>
  #index{
    padding-bottom: 1.5rem;
  }

  .main {
    height: 100%;
    position: relative;
  }

  .menu {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #000000;
    opacity: 0.3;
  }

  .iconMenu {
    position: absolute;
    display: block;
    background-image: url(../assets/img/btn_menu_white@2x.png);
    background-size: cover;
    height: 0.7rem;
    width: 0.7rem;
    right: 0.6rem;
    bottom: 0.4rem;
  }
  .indexNav {
    position: absolute;
    height: 1.5rem;
    line-height: 1.5rem;
    left: 0;
    width: 100%;
    top: 2rem;
    z-index: 999;
  }

  .navTab {
    width: 60%;
    display: -webkit-box;
  }

  .navTab a {
    display: block;
    color: #000000;
    -webkit-box-flex: 1;
    text-align: center;
    font-size: .42rem;
    font-weight: bold;
  }

  .navTab a.on {
    color: #fff;
  }

  .item-mask0, .tab-bg0, .item-mask1, .tab-bg1, .item-mask2, .tab-bg2{
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    background: #000000;
    opacity: .2;
  }

  .item-mask0, .item-mask1, .item-mask2{
    top: 2.2rem;
    height: 8rem;;
  }

  .tab-bg0, .tab-bg1, .tab-bg2{
    height: 1.5rem;
    height: 100%;
    /*top: 100px;*/
  }

  /*#tab-container0{
    position: relative;
  }*/

  .maincontent{
    margin: 0 15px;
  }

  .maincontent .tit{
    font-size: .5rem;
    /*padding: */
  }

  .maincontent .desc{
    padding: 10px 0 40px 0;
    line-height: .5rem;
  }
  
  .content1{
    position: absolute;
    color: #fff;
    top: 35%;
    width: 100%;
    text-align: center;
    z-index: 5;
    line-height: .7rem;
  }

  .tab-container {
    
  }

  .content1{
    text-align: left;
    font-size: .8rem;
  }

  .content1 p{
    padding: 0 1.5rem;
    line-height: 1.5;
  }



  



</style>
