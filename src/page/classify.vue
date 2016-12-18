<template>
<div class="classify">
  <ul class="header" v-show="tab === 'category' || tab === 'brand'">
   
    <li @click.prevent="tab = 'category'" :class="[tab == 'category' ? 'on' : '']">
      <a href="javascript:;">品类</a>
    </li>
     <li @click.prevent="tab = 'brand'" :class="[tab == 'brand' ? 'on' : '']">
      <a href="javascript:;" >品牌</a>
    </li>

    <div class="tabborder"></div>
  </ul>

  <div class="content" v-if="tab === 'category'">
    <div class="subBar">
      <a @click.prevent="active1 = 'tab-container0'" :class="[active1 == 'tab-container0' ? 'on' : '']">女士</a>
      <a @click.prevent="active1 = 'tab-container1'" :class="[active1 == 'tab-container1' ? 'on' : '']">男士</a>
      <a @click.prevent="active1 = 'tab-container2'" :class="[active1 == 'tab-container2' ? 'on' : '']">生活</a>
    </div>

     <div class="page-tab-container">
      <mt-tab-container class="page-tabbar-tab-container" v-model="active1" swipeable>
        <mt-tab-container-item id="tab-container0">
          <ul class="shopList">
            <li class="shopItem" v-for="item in categoryItems0">
              <a :href="'/#/filter?name=' + item.category_name + '&id=' + item.category_id ">
                <div class="shopImg">
                  <img :src="item.app_image" alt="">
                </div>
                <h3 class="tit">{{item.category_name}}</h3>
              </a>
            </li>
          </ul>
          <div class="btn btnMoreCategary" @click="changeCategaryTab(0)">更多分类</div>
        </mt-tab-container-item>
        <mt-tab-container-item id="tab-container1">
          <ul class="shopList">
            <li class="shopItem" v-for="item in categoryItems1">
              <a :href="'/#/filter?name=' + item.category_name + '&id=' + item.category_id ">
                <div class="shopImg">
                  <img :src="item.app_image" alt="">
                </div>
                <h3 class="tit">{{item.category_name}}</h3>
              </a>
            </li>
          </ul>
          <div class="btn btnMoreCategary" @click="changeCategaryTab(1)">更多分类</div>
        </mt-tab-container-item>
        <mt-tab-container-item id="tab-container2">
          <ul class="shopList">
            <li class="shopItem" v-for="item in categoryItems2">
              <a :href="'/#/filter?name=' + item.category_name + '&id=' + item.category_id ">
                <div class="shopImg">
                  <img :src="item.app_image" alt="">
                </div>
                <h3 class="tit">{{item.category_name}}</h3>
              </a>
            </li>
          </ul>
          <div class="btn btnMoreCategary" @click="changeCategaryTab(2)">更多分类</div>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
    
  </div>

  <div class="content" v-if="tab === 'brand'">
    <div class="subBar">
      <a @click.prevent="active2 = 'tab-container0'" :class="[active2 == 'tab-container0' ? 'on' : '']">女士</a>
      <a @click.prevent="active2 = 'tab-container1'" :class="[active2 == 'tab-container1' ? 'on' : '']">男士</a>
      <a @click.prevent="active2 = 'tab-container2'" :class="[active2 == 'tab-container2' ? 'on' : '']">生活</a>
    </div>

     <div class="page-tab-container">
      <mt-tab-container class="page-tabbar-tab-container" v-model="active2" swipeable>
        <mt-tab-container-item id="tab-container0">
          <ul class="brandList">
            <li v-for="item in brandItems0" class="brandItem">
              <a :href="'/#/brand/' + item.manufacturer_id">
                <div class="brandContent">
                  <img :src="item.app_image" alt="">
                  <h3 class="title">{{item.name}}</h3>
                  <div class="desiger">{{item.desiger}}</div>
                  <div class="collectTime" :class="{ on: item.iswish }">
                    <span class="loveIcon"></span>
                    <span class="count">{{item.wishcount}}</span>
                  </div>
                </div>
                <div class="brandItemBg"></div>
              </a>
            </li>
          </ul>
        </mt-tab-container-item>
        <mt-tab-container-item id="tab-container1">
          <ul class="brandList">
            <li v-for="item in brandItems1" class="brandItem">
              <a :href="'/#/brand/' + item.manufacturer_id">
                <div class="brandContent">
                  <img :src="item.app_image" alt="">
                  <h3 class="title">{{item.name}}</h3>
                  <div class="desiger">{{item.desiger}}</div>
                  <div class="collectTime" :class="{ on: item.iswish }">
                    <span class="loveIcon"></span>
                    <span class="count">{{item.wishcount}}</span>
                  </div>
                </div>
                <div class="brandItemBg"></div>
              </a>
            </li>
          </ul>
        </mt-tab-container-item>
        <mt-tab-container-item id="tab-container2">
          <ul class="brandList">
            <li v-for="item in brandItems2" class="brandItem">
              <a :href="'/#/brand/' + item.manufacturer_id">
                <div class="brandContent">
                  <img :src="item.app_image" alt="">
                  <h3 class="title">{{item.name}}</h3>
                  <div class="desiger">{{item.desiger}}</div>
                  <div class="collectTime" :class="{ on: item.iswish }">
                    <span class="loveIcon"></span>
                    <span class="count">{{item.wishcount}}</span>
                  </div>
                </div>
                <div class="brandItemBg"></div>
              </a>
            </li>
          </ul>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
    
  </div>


  <div class="moreCategory" v-if="tab === 'moreCategory'">
    <!--<div class="" @click.prevent="tab = prevTab" style="margin: 20px;">-->
      <!--点我返回-->
    <!--</div>-->

    <div class="categoryNav">
      <i class="iconBack" @click.prevent="tab = prevTab"></i>
      <h2 class="title">
        全部分类
      </h2>
    </div>

    <ul class="listUl">
      <li v-for="items in renderList" class="listLi">
        <h3 class="name">{{items.category_name}}</h3>
        <ul class="subUl">
          <li v-for="item in items.subcategories" class="subLi">
            <a :href="'/#/filter?id='+item.category_id+'&name='+item.category_name">
              {{item.category_name}}
            </a>
          </li>
        </ul>
      </li>
    </ul>
  </div>

  <footBar pageName="classify" />
</div>
</template>

<style media="screen" scoped>

  .categoryNav{
    height: 1.2rem;
    line-height: 1.2rem;
    text-align: center;
    /*border: 1px solid #d7d7d5;*/
    /*border-right: 0 none;*/
    /*border-left: 0 none;*/
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

  .listUl{
    margin: .3rem 0 0 .4rem;
  }

  .listLi{
    margin-top: .3rem;
  }

  .listUl .name{
    font-size: .5rem;
  }


  .listUl .subLi{
    border-bottom: 1px solid #d7d7d5;
    margin: 0 .45rem 0 .2rem;
    font-size: .45rem;
    padding: .35rem 0;
  }

  .listUl .subLi a{
    display: block;
  }

  .listUl .subLi:last-child{
    border-bottom: 0 none;
  }

  .classify{
    
  }

  .mint-tab-container-item{
    margin-bottom: 30px;
  }

  .btnMoreCategary{
    width: 90%;
    margin: 0 auto;
  }

  .header, .subBar{
    /*height: 1rem;
    line-height: 1rem;*/
    display: -webkit-box;
  }

  .header li, .subBar a{
    display: block;
    -webkit-box-flex: 1;
    text-align: center;
    padding: .4rem;
    /*margin: .5rem;*/
  }

  .header li{
    font-size: 0.5rem;
    border-bottom: 1px solid #d7d7d5;
    /*border-right: 1px solid;*/
  }

  .header li.on{
    color: #000000;
    border-bottom: 1px solid #000000;
  }

  .header li a{
    height: .5rem;
    line-height: .5rem;
  }

  .subBar a{
    color: #d7d7d5;
    font-size: .4rem;
    
  }

  .subBar a.on{
    color: #000000;
  }

  .shopList{
    margin: .2rem;
    overflow: hidden;
  }
  
  .shopItem{
    float: left;
    width: 50%;
    box-sizing: border-box;
  }

  .shopImg{
    margin: .2rem;
    height: 4.5rem;
  }

  .tit{
    margin: .2rem;
    text-align: center;
  }

  .tabborder{
    border-right: 1px solid #d7d7d5;
    margin-left: 1px;
    height: .8rem;
    position: absolute;
    left: 50%;
    top: .3rem;
  }

  .brandList{

  }

  .brandItem{
    position: relative;
    /*height: 200px;*/
    color: #fff;
  }

  .brandContent .title, .brandContent .desiger{
    color: #fff;
  }

  .brandItem img{
    height: 196px;
  }

  .brandItemBg{
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: #000000;
    opacity: .8;
  }

  .brandItem .title, .brandItem .desiger{
    position: absolute;
    left: 10%;
    z-index: 2;
    
  }

  .brandItem .title{
    top: 40%;
    font-size: .45rem;
  }

  .brandItem .desiger{
    top: 55%;
    font-size: .35rem;
  }

  .brandItem .collectTime{
    position: absolute;
    right: 10%;
    top: 45%;
    z-index: 2;
    color: #fff;
    font-size: .45rem;
  }

  
  .collectTime .count{

  }

  .collectTime .loveIcon{
    background-image: url(../assets/img/profile/icon_fucus@3x.png);
    background-size: cover;
    width: 18px;
    height: 16px;
    display: inline-block;
  }

  .on .loveIcon{
    background-image: url('../assets/img/recomend/collection_h@3x.png');
  }

  .on .count{
    color: #ca4848;
  }


</style>

<script lang="babel">
  import { Toast, Indicator } from 'mint-ui'
  import footBar from '../components/footBar.vue'
  import util from '../assets/lib/q.util.js'

  export default {
    data(){
      return {
        active1: 'tab-container0',
        active2: 'tab-container0',      
        tab: 'category',
        prevTab: '',
        brandItems0: [],
        brandItems1: [],
        brandItems2: [],
        categoryItems0: [],
        categoryItems1: [],
        categoryItems2: [],
        allList: [],
        renderList: []
      }
    },
    created(){
      const me = this;

      Indicator.open({
        text: '加载中...',
        spinnerType: 'fading-circle'
      });

      [20, 59, 75].forEach( (item,i) => {
        me.fetchBrandData({
          type_id: item
        }, res => {
          me['brandItems'+i] = me['brandItems'+i].concat(res);
        })
      })
      
      me.fetchCategoryData({}, function(res){
        me.categoryItems0 = res.list[0].subcategories;
        me.categoryItems1 = res.list[1].subcategories;
        me.categoryItems2 = res.list[2].subcategories;
      });

      me.fetchMoreCategary({}, res => {
        me.allList = res;
      });
    },
    components: {
      footBar
    },
    computed: {

    },
    methods: {
      fetchBrandData(data, cb){
        const me = this;

        data.route = 'mapi/manufacturer';
        data.format = 'jsonp';

        this.$http.jsonp(
          window.q.interfaceHost +'index.php?',
          {params: data})
        .then(res => {
          //console.log(res)
          let data = res.body;
          if(data.code+'' === '0'){
            cb && cb(data.data);
          }else{
            Toast('暂无数据...')
          }
          Indicator.close();
        }, err => {
          console.log(err)
          Toast('网络错误...')
          Indicator.close();
        })

      },
      fetchCategoryData(data, cb){
        const me = this;

        data.route = 'mapi/category/getallcategory';
        data.format = 'jsonp';

        this.$http.jsonp(
          window.q.interfaceHost +'index.php?',
          {params: data})
        .then(res => {
          //console.log(res)
          let data = res.body;
          console.log(data.data)
          if(data.data.list){
            cb && cb(data.data);
          }else{
            Toast('暂无数据...')
          }
        }, err => {
          console.log(err)
          Toast('网络错误...')
        })

      },
      fetchMoreCategary(data, cb){
        // 获取更多分类
        const me = this;
        data.route = 'mapi/category/getallcategory';
        data.format = 'jsonp';
        this.$http.jsonp(
            window.q.interfaceHost +'index.php?',
          {params: data})
          .then(res => {
          console.log(res);
          let data = res.body;
          if(data.data.list.length){
            cb && cb(data.data.list);
          }else{
            Toast('暂无数据...')
          }
          Indicator.close();
        }, err => {
          console.log(err);
          Toast('网络错误...');
          Indicator.close();
        })
      },
      changeCategaryTab(index){
        const me = this;
        console.log(index);
        me.prevTab = me.tab;
        me.tab = 'moreCategory';
        me.renderList = me.allList[index]['subcategories'];
      }
    },
    mounted() {

    },
    watch: {

    }
  }
</script>
