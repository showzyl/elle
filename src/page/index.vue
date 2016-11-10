<template>
  <div id="index">
    <!-- <topNav /> -->
    <!--<catalogue />-->
    <!--<commonNav title="首页" />-->
    <div class="indexNav">
      <div class="navTab">
        <a @click.prevent="active = 'tab-container1'" :class="[active == 'tab-container1' ? 'on' : '']">女士</a>
        <a @click.prevent="active = 'tab-container2'" :class="[active == 'tab-container2' ? 'on' : '']">男士</a>
        <a @click.prevent="active = 'tab-container3'" :class="[active == 'tab-container3' ? 'on' : '']">生活</a>
        <i class="iconMenu" @click="menuToggle"></i>
      </div>
    </div>
    <div class="page-tab-container">
      <mt-tab-container class="page-tabbar-tab-container" v-model="active" swipeable>
        <mt-tab-container-item id="tab-container1">
          <div v-for="item in renderData">
            <img :src="item.object_image" alt="">
            <h3 style="padding: 10px;">{{ item.object_title }}</h3>
            <p>
              {{ item.object_description }}
            </p>
          </div>
        </mt-tab-container-item>
        <mt-tab-container-item id="tab-container2">
          content2
        </mt-tab-container-item>
        <mt-tab-container-item id="tab-container3">
          content3
        </mt-tab-container-item>
      </mt-tab-container>
    </div>

    <sideBar/>
    <footBar />

  </div>
</template>
<script lang="babel">
  import {mapGetters} from 'vuex'
  import footBar from '../components/footBar.vue'
  import indexNav from '../components/indexNav.vue'
  import commonNav from '../components/commonNav.vue'
  import topNav from '../components/topNav.vue'
  import catalogue from '../components/catalogue.vue'
  import { Toast, Cell, Checklist, Indicator, TabContainer, TabContainerItem } from 'mint-ui'
  import sideBar from '../components/sideBar.vue';
  //import test from '../assets/lib/util.js'
  // console.log(test);
  //console.log(Toast, Cell, Checklist);

  import core from '../assets/lib/q.core.js'
  import store from '../assets/lib/q.store.js'

  //console.log(123)
  // console.log(core)
  // console.log(store)

  export default {
    data() {
      return {
        active: 'tab-container1',
        scrolled: false,
        renderData: []
      }
    },
    created(){
      var me = this;
      // 页面创建
      this.asyncData({
        category_id: 1,
        page_id: 1
      })

      // 下拉加载更多
      window.onscroll = function(){
        //console.log(1221212212)
      }
    },
    components: {
      footBar,
      indexNav,
      topNav,
      commonNav,
      catalogue,
      TabContainer,
      TabContainerItem,
      sideBar
    },
    computed: {},
    methods: {
      menuToggle(){
        document.body.className += 'side'
        document.querySelector('.mask').className = 'mask'
      },
      asyncData(data){
        var me = this;
        $.ajax({
          url: 'http://106.75.17.211:6603/index.php?route=mapi/home_waterfall&format=jsonp',
          data: data,
          dataType: 'jsonp',
          jsonp: 'callback',
          crossDomain: true
        }).done(function(res){
          //console.log(res);
          if(res.code === 0){
            console.log(res.data)
            // renderPage
            me.renderData = res.data
          }else{
            Toast('暂无数据, 请稍后刷新页面...')
          }
        }).fail(function(err){
          console.log(err)
        })
      },
      render(res){
        console.log(res);

      },
      handleScroll () {
        this.scrolled = window.scrollY > 0;
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
</style>
