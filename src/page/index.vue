<template>
  <div id="index">
    <div class="indexNav">
      <div class="navTab">
        <a @click.prevent="clickTab(0)" :class="[active == 'tab-container0' ? 'on' : '']">女士</a>
        <a @click.prevent="clickTab(1)" :class="[active == 'tab-container1' ? 'on' : '']">男士</a>
        <a @click.prevent="clickTab(2)" :class="[active == 'tab-container2' ? 'on' : '']">生活</a>
        <i class="iconMenu" @click="menuToggle"></i>
      </div>
    </div>
    <div class="page-tab-container ">
      <mt-tab-container class="page-tabbar-tab-container" v-model="active" swipeable>
        <mt-tab-container-item id="tab-container0">
          <div class="tab-bg0" id="tab-bg0" style="display:none;"></div>
          <div class="item-mask0"></div>
          <div v-for="(item, index) in renderData0" v-if="index === 0">
            <div class="content1">
              <p>{{ item.object_title }}</p>
              <p>{{ item.object_description }}</p>
            </div>
            <img :src="item.object_image" alt="object_image">
          </div>

          <div class="tab-container" v-else>
            <img :src="item.object_image" alt="object_image">
            <h3 style="padding: 10px;">{{ item.object_title }}</h3>
            <p>
              {{ item.object_description }}
            </p>
          </div>

        </mt-tab-container-item>
        <mt-tab-container-item id="tab-container1">
          <div class="tab-bg1" id="tab-bg1" style="display:none;"></div>
          <div class="item-mask1"></div>
          <div v-for="(item, index) in renderData1" class="tab-container-one" v-if="index === 0">
            <div class="content1">
              <p>{{ item.object_title }}</p>
              <p>{{ item.object_description }}</p>
            </div>
            <img :src="item.object_image" alt="object_image">
          </div>

          <div class="tab-container" v-else>
            <img :src="item.object_image" alt="object_image">
            <h3 style="padding: 10px;">{{ item.object_title }}</h3>
            <p>
              {{ item.object_description }}
            </p>
          </div>
        </mt-tab-container-item>
        <mt-tab-container-item id="tab-container2">
          <div class="tab-bg2" id="tab-bg2" style="display:none;"></div>
          <div class="item-mask2"></div>
          <div v-for="(item, index) in renderData2" class="tab-container-one" v-if="index === 0">
            <div class="content1">
              <p>{{ item.object_title }}</p>
              <p>{{ item.object_description }}</p>
            </div>
            <img :src="item.object_image" alt="object_image">            
          </div>

          <div class="tab-container" v-else>
            <img :src="item.object_image" alt="object_image">
            <h3 style="padding: 10px;">{{ item.object_title }}</h3>
            <p>
              {{ item.object_description }}
            </p>
          </div>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>

    <div class="loadmore" style="border-top-color: rgb(204, 204, 204);border-left-color: rgb(204, 204, 204);border-bottom-color: rgb(204, 204, 204);height: 28px;width: 28px;" v-show="loading"></div>

    <sideBar/>
    <footBar />

  </div>
</template>
<script lang="babel">
  import Vue from 'vue'
  import footBar from '../components/footBar.vue'
  import { Toast, TabContainer, TabContainerItem } from 'mint-ui'
  import sideBar from '../components/sideBar.vue'
  import util from '../assets/lib/q.util.js'

  //console.log(util)

  Vue.component(TabContainer.name, TabContainer);
  Vue.component(TabContainerItem.name, TabContainerItem);

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
      var me = this;

      //Toast('123')
      me.loading = true;

      ;[1,2,3].forEach((item, i)=> {
        me.fetchData({
          category_id: item,
          page_id: 1
        }, function(data){
          me['renderData' + i] = me['renderData' + i].concat(data);
        })
      })

      // 下拉加载更多
      window.onscroll = function(e){
        //console.log(1221212212)
        //console.log(e)
        //console.log(util.getEl('.tab-bg0').style)
        //console.log(util.getScrollHeight(), util.getWindowHeight(), util.getDocumentTop())
        if(me.active === 'tab-container0'){
          me.scrollTop0 = document.body.scrollTop;
          me.tabBgTaggle(0);
          me.loadmoreData(0);
        }else if(me.active === 'tab-container1'){
          me.scrollTop1 = document.body.scrollTop;
          me.tabBgTaggle(1);
          me.loadmoreData(1);
        }else if(me.active === 'tab-container2'){
          me.scrollTop2 = document.body.scrollTop;
          me.tabBgTaggle(2);
          me.loadmoreData(2);
        }

      }
    },
    components: {
      footBar,
      sideBar
    },
    computed: {},
    methods: {
      menuToggle(){
        document.body.className += 'side'
        document.querySelector('.mask').className = 'mask'
      },
      fetchData(data, cb){
        var me = this;

        data.route = 'mapi/home_waterfall';
        data.format = 'jsonp';

        util.jsonp({
          url : window.q.interfaceHost +'index.php',
          data: data,
          callback : function(res) {
            console.log(res);
            me.loading = false;
            if(res.code === 0){
              let data = res.data;
              cb && cb(data);
              //me.renderData = data
            }else{
              Toast('暂无数据, 请稍后刷新页面...')
            }
          }
        }, 'callback')

        // this.$http.jsonp(
        //   window.q.interfaceHost +'index.php',
        //   {
        //     params: data
        //   }
        // ).then( res => {
        //   let data = res.body;
        //   if(data.code === 0){
        //     //console.log(data.data)
        //     // renderPage
        //     me.renderData = data.data
        //   }else{
        //     Toast('暂无数据, 请稍后刷新页面...')
        //   }
        // }, err => {
        //   console.log(res)
        //   Toast('暂无数据, 请稍后刷新页面...')
        // })

      },
      clickTab(tabNum){
        //console.log(tabNum)
        const me = this;
        me.active = 'tab-container' + tabNum;

        setTimeout(function(){
           window.scrollTo(0, me['scrollTop' + tabNum]);
        }, 200)
       
      },
      tabBgTaggle(n){
        if(document.body.scrollTop >= 400){
          util.getEl('.tab-bg'+n).style.position = 'fixed';
          util.getEl('.tab-bg'+n).style.display = 'block';
        }else{
          util.getEl('.tab-bg'+n).style.display = 'none';
        }
      },
      loadmoreData(n){
        const me = this;
        //console.log(n)
        setTimeout(function(){
          // console.log(util.getScrollHeight(), util.getWindowHeight(), util.getDocumentTop())
          // console.log(util.scrollFunc())
          // console.log(me['bLoadData'+n])
          if (util.getScrollHeight() <= (util.getWindowHeight() + util.getDocumentTop() + 300)) {
            if (util.scrollFunc() == 'down' && me['bLoadData'+n]) {
              console.log(13)
              me['bLoadData'+n] = false;
              me.loading = true;
              me['pageNo'+n]++;
              me.fetchData({
                category_id: (n+1),
                page_id: me['pageNo'+n]
              }, function(res){
                //console.log(res);
                const tab = 'renderData' + n;
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
    /*background: red;*/
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
    background-image: url(../assets/img/menubtn.png);
    background-size: cover;
    height: 0.7rem;
    width: 0.7rem;
    right: 0.6rem;
    bottom: 0.4rem;
  }

  .indexNav {
    position: fixed;
    height: 1.5rem;
    line-height: 1.5rem;
    left: 0;
    width: 100%;
    top: 0;
    z-index: 999;
    /*background: #000000;
    opacity: .2;*/
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
    font-size: 0.5rem;
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
    height: 12rem;;
  }

  .tab-bg0, .tab-bg1, .tab-bg2{
    height: 1.5rem;
    /*top: 100px;*/
  }

  /*#tab-container0{
    position: relative;
  }*/

  .content1{
    position: absolute;
    color: #fff;
    top: 160px;
    width: 100%;
    text-align: center;
    z-index: 5;
    font-size: .45rem;
    line-height: .7rem;
  }

  .loadmore{
    position: fixed;
    bottom: 60px;
    left: 0;
    left: 50%;
    margin-left: -14px;
    -webkit-animation: mint-spinner-rotate .8s infinite linear;
    animation: mint-spinner-rotate .8s infinite linear;
    border: 4px solid transparent;
    border-radius: 50%;
  }


.mint-spinner-snake {
  -webkit-animation: mint-spinner-rotate 0.8s infinite linear;
          animation: mint-spinner-rotate 0.8s infinite linear;
  border: 4px solid transparent;
  border-radius: 50%;
}

@-webkit-keyframes mint-spinner-rotate {
  0% {
      -webkit-transform: rotate(0deg);
              transform: rotate(0deg);
  }
  100% {
      -webkit-transform: rotate(360deg);
              transform: rotate(360deg);
  }
  }
  @keyframes mint-spinner-rotate {
  0% {
      -webkit-transform: rotate(0deg);
              transform: rotate(0deg);
  }
  100% {
      -webkit-transform: rotate(360deg);
              transform: rotate(360deg);
  }
}

.mint-tab-container-item{
  margin-bottom: 60px;
}



</style>
