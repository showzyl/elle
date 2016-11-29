<template>
<div class="filter">
  <div class="content" v-show="content === 'content'">
    <commonNav :title="$route.query.name" iconRight="" />
    <ul class="tab">
      <li @click="content = 'order'">
        <a href="javascript:;">排序</a>
        <span class="iconDrop"></span>
      </li>
      <li @click="filterLimit">
        <a href="javascript:;">筛选</a>
        <span class="iconDrop"></span>
      </li>
      <div class="tabborder"></div>
    </ul>

    <p class="total">{{total || 0}} 件商品</p>

    <recomendItem :products="products"></recomenditem>

  </div>

  <div class="order" v-show="content === 'order'">
    <div class="orderList">
      <a href="" @click.prevent="fnOrder(0)">综合排序</a>
      <a href="" @click.prevent="fnOrder(1)">价格从低到高</a>
      <a href="" @click.prevent="fnOrder(2)">价格从高到低</a>
      <a href="" @click.prevent="fnOrder(3)">销量排序</a>
    </div>
    <div class="closebtn" @click="content = 'content'"></div>
  </div>

  <div class="filterLimit" v-show="content === 'filterLimit'">
    <div class="filterNav">
      <i class="closebtnBlack" @click="content = 'content'"></i>
      <h2 class="title">
        筛选
      </h2>
    </div>

    <ul class="filterList">
      <li class="filterItem" @click="filterByType(0)">
        <span class="name">品牌</span>
        <p class="filterBrandList" v-if="filterCondition[0]">
          <span class="chose" v-if="filterBrand.length>2">
            {{filterBrand[0].name}} & {{filterBrand[1].name}}...
          </span>
          <span class="chose" v-else>{{filterBrand[0].name}}</span>
        </p>
        <span class="chose" v-else>ALL</span>
      </li>
      <li class="filterItem" @click="filterByType(1)">
        <span class="name">尺寸</span>
        <span class="chose" v-if="filterCondition[1]">{{filterSize.name}}</span>
        <span class="chose" v-else>ALL</span>
      </li>
      <li class="filterItem" @click="filterByType(2)">
        <span class="name">颜色</span>
         <p class="filterColorList" v-if="filterCondition[2]">
          <span class="chose" v-if="filterColor.length>2">
            {{filterColor[0].color}} & {{filterColor[1].color}}...
          </span>
          <span class="chose" v-else>{{filterColor[0].name}}</span>
        </p>
        <span class="chose" v-else>ALL</span>
        
      </li>
      <li class="filterItem" @click="filterByType(3)">
        <span class="name">价格</span>
        <span class="chose">ALL</span>
      </li>
    </ul>

    <div class="btn btnConfirmFilter">完成</div>
    
  </div>

  <div class="filterBrand" v-show="content === 'filterBrand'">
    <div class="filterNav">
      <i class="iconBack" @click="content = 'filterLimit'"></i>
      <h2 class="title">
        品牌
      </h2>
      <span class="clearAll" @click="clearAllBrand">CLEAR 清除</span>
    </div>
    <mt-index-list>

      <p v-for="(brand, key) in brands">
        <mt-index-section :index="key" v-if="brand.length">
          <p v-for="(item,i) in brand" :key="item.manufacturer_id" @click="choseBrand(item, i, key)" :class="{ checked: item.checked }">
            <mt-cell :title="item.name"></mt-cell>
          </p>
        </mt-index-section>
      </p>


    </mt-index-list>


    <div class="btn btnConfirmBrand" @click="confirmBrand">完成</div>
  </div>

  <div class="filterSize" v-show="content === 'filterSize'">
    <div class="filterNav">
      <i class="iconBack" @click="content = 'filterLimit'"></i>
      <h2 class="title">
        尺寸
      </h2>
    </div>

    <p v-for="item in sizes" class="sizes" @click="choseSize(item)" :class="{ checked: item.checked }">
      <mt-cell :title="item.name"></mt-cell>
    </p>

    <div class="btn btnConfirmSize" @click="confirmSize">完成</div>
    
  </div>

  <div class="filterColor" v-show="content === 'filterColor'">
    <div class="filterNav">
      <i class="iconBack" @click="content = 'filterLimit'"></i>
      <h2 class="title">
        颜色
      </h2>

      <span class="chouseAll" @click="chouseAll">ALL</span>
    </div>

    <p v-for="(item,i) in colors" class="colors" @click="choseColors(item, i)" :class="{ checked: item.checked }">
      <mt-cell :title="item.color"></mt-cell>
    </p>

    <div class="btn btnConfirmColor" @click="confirmColor">完成</div>
    
  </div>

  <div class="filterPrice" v-show="content === 'filterPrice'">
    <div class="filterNav">
      <i class="iconBack" @click="content = 'filterLimit'"></i>
      <h2 class="title">
        价格
      </h2>
    </div>

    <priceRange :confirmPrice="confirmPrice" :rangeValue="price"/>
    
  </div>


  <loadMore :loading="loading" bottom="10px">

</div>
</template>

<style media="screen" scoped>

  .filterBrandList, .filterColorList{
    width: 50%;
    float: right;
    overflow: hidden;
    height: .4rem;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .chouseAll{
    position: absolute;
    right: 0;
    top: 0;
    margin-right: .4rem;
    font-weight: bold;
    font-size: .4rem;
  }

  .filterBrand{
    margin-bottom: 1.5rem;
  }

  .filterSize .sizes{
    /*text-align: left;*/
  }

  .btnConfirmBrand{
    position: fixed;
    bottom: 0;
  }

  .filterNav{
    height: 1.2rem;
    line-height: 1.2rem;
    text-align: center;
    border: 1px solid #d7d7d5;
    border-right: 0 none;
    border-left: 0 none;
    position: relative;
  }


  .filterItem{
    border-bottom: 1px solid #d7d7d5;
    padding: .6rem .4rem;
    margin: 0 .2rem;
    font-size: .4rem;
    overflow: hidden;
  }

  .filterItem .name{
    float: left;
  }

  .filterItem .chose{
    float: right;
    color: #d7d7d5;
  }

  .closebtnBlack{
    position: absolute;
    left: 0;
    margin: .3rem 0 0 .5rem;
    background-size: cover;
    width: 20px;
    height: 20px;
    background-image: url(../assets/img/recomend/close01@3x.png);
  }

  .btnConfirmFilter, .btnConfirmSize, .btnConfirmColor{
    position: fixed;
    bottom: .4rem;
    width: 90%;
    left: 5%;
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

  .clearAll{
    position: absolute;
    right: 0.2rem;
    top: 0;
    font-size: .35rem;
  }

  .tab{
    display: -webkit-box;
    position: relative;
    border: 1px solid #d7d7d5;
    border-left: 0 none;
    border-right: 0 none;
  }

  .tab li{
    display: block;
    -webkit-box-flex: 1;
    text-align: center;
    padding: .4rem;
    font-size: .4rem;
  }

  .tabborder {
    border-right: 1px solid #d7d7d5;
    margin-left: 1px;
    height: .8rem;
    position: absolute;
    left: 50%;
    top: .15rem;
  }

  .recommendList{
    margin-bottom: 30px;
  }


  .iconDrop, .iconRight{
    display: inline-block;
    width: 10px;
    height: 6px;
    background-size: cover;
    vertical-align: middle;
    margin-right: .1rem;
  }

  .iconDrop{
    background-image: url(../assets/img/recomend/arrow-bottom@3x.png);
  }

  .iconRight{
    width: 17px;
    height: 13px;
    background-image: url(../assets/img/recomend/headtick@3x.png);
  }

  .order{
    position: fixed;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: #000000;
  }

  .closebtn{
    width: 20px;
    height: 20px;
    background-image: url(../assets/img/recomend/btn_close@3x.png);
    background-size: cover;
    position: absolute;
    right: .5rem;
    top: .5rem;
  }

  .orderList{
    text-align: center;
    margin-top: 60%;
  }

  .orderList a{
    margin: 1rem 0;
    color: #fff;
    font-size: .45rem;
    display: block;
  }

  .total{
    text-align: center;
    margin: .4rem 0;
  }

  .colorRed{
    color: red;
  }
  

</style>

<script lang="babel">
  import Vue from 'vue'
  import { Toast, IndexList, IndexSection, Cell, Indicator } from 'mint-ui'
  import footBar from '../components/footBar.vue'
  import commonNav from '../components/commonNav.vue'
  import loadMore from '../components/loadmore.vue'
  import recomendItem from '../components/recommendItem.vue'
  import priceRange from '../components/priceRange.vue'
  import util from '../assets/lib/q.util.js'
  import store from '../assets/lib/q.store.js'

  Vue.component(Cell.name, Cell);
  Vue.component(IndexList.name, IndexList);
  Vue.component(IndexSection.name, IndexSection);


  export default {
    data(){
      return {
        content: 'content',
        bLoadData: true,
        loading: false,
        products: [],
        total: null,
        tab: 'category',
        params: {
          product_category: this.$route.query.id,
          page_id: 1,
          order: 'DESC', // ASC 
          sort: 'pd.name' //  p.price  p.rating
        },
        brands: {},
        sizes: [],
        colors: [],
        price: 0,
        filterCondition: [false, false, false, false],
        filterBrand: [],
        filterSize:{},
        filterColor: [],
        filterPrice: ''
      }
    },
    created(){
      const me = this;
      const id = me.$route.query.id;
      
      me.fetchData(me.params, res => {
        me.loading = false;
        me.products = res.results;
        me.total = res.total;
      })

      // 下拉加载更多
      window.onscroll = function(e){
        if(me.$route.path !== '/filter' || me.content !== 'content') return;
        
        if (util.getScrollHeight() <= (util.getWindowHeight() + util.getDocumentTop() + 300)) {
          if (util.scrollFunc() == 'down' && me['bLoadData']) {
            me.bLoadData = false;
            me.loading = true;
            me.params.page_id++;
            me.fetchData(me.params, res => {
              me.bLoadData = true;
              me.loading = false;
              me.products = me.products.concat(res.results);
              //me.total = res.total;
              console.log(res);
            })
          }
        }

      }

    },
    components: {
      footBar,
      commonNav,
      recomendItem,
      loadMore,
      priceRange
    },
    computed: {

    },
    methods: {
      fetchData(data, cb){
        var me = this;

        data.route = 'mapi/product_category';
        data.format = 'jsonp';

        this.$http.jsonp(
          window.q.interfaceHost +'index.php?',
          {params: data})
        .then(res => {
          let data = res.body;
          //console.log(data)
          if(data.code+'' === '0' && data.data.results.length){
            cb && cb(data.data);
          }else{
            Toast('暂无数据, 请稍后刷新页面...')
          }
        }, err => {
          console.log(err)
          Toast('网络错误...')
        })

      },
      fetchCategoryData(data, cb){
        var me = this;
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
            Toast('暂无数据, 请稍后刷新页面...')
          }
        }, err => {
          console.log(err)
        })

      },
      fetchFilterData(data, cb){
        var me = this;
        //data.route = 'route=mapi/option_filter';
        data.format = 'jsonp';
        this.$http.jsonp(
          window.q.interfaceHost +'index.php?route=mapi/option_filter',
          {params: data})
        .then(res => {
          //console.log(res)
          let data = res.body;
          //console.log(data.data)
          if(data.data){
            cb && cb(data.data);
          }else{
            Toast('暂无数据, 请稍后刷新页面...')
          }
          Indicator.close();
        }, err => {
          Indicator.close();
          Toast('网络错误, 请稍后刷新页面...');
          console.log(err);
        })
        
      },
      fnOrder(type){
        const me = this;
        switch(type){
          case 0:
            //alert(0);
            me.params.order = 'DESC';
            me.params.sort = 'pd.name';
            me.params.page_id = 1;
          break;
          case 1:
            //alert(1);
            me.params.order = 'ASC';
            me.params.sort = 'p.price';
            me.params.page_id = 1;
          break;
          case 2:
            //alert(2);
            me.params.order = 'DESC';
            me.params.sort = 'p.price';
            me.params.page_id = 1;
          break;
          case 3:
            //alert(3);
            me.params.order = 'DESC';
            me.params.sort = 'rating';
            me.params.page_id = 1;
          break;
        }
        
        // 加载数据
        me.fetchData(me.params, res => {
          me.content = 'content';
          me.products = res.results;
          me.total = res.total;
        })
      },
      fnFilter(){
        
      },
      filterLimit(){
        const me = this;

        Indicator.open({
          text: '加载中...',
          spinnerType: 'fading-circle'
        });

        setTimeout(function(){
          Indicator.close();
        }, 20000)

        me.content = 'filterLimit';
        me.fetchFilterData({
          category_id: me.$route.query.id
        }, res => {
          me.handleBrandData(res.manufacturers);
          me.handleSizeData(res.size);
          me.handleColorData(res.color);
          let filterCondition = [false, false, false, false];
          store.set('filterCondition', filterCondition);
        });
      },
      filterByType(type){
        var me = this;
        switch(type){
          case 0:
            me.content = 'filterBrand';
          break;
          case 1:
            me.content = 'filterSize';
          break;
          case 2:
            me.content = 'filterColor';
          break;
          case 3:
            me.content = 'filterPrice';
          break;
        }
        
      },
      handleBrandData(data){
        let oRes = {};
        const aBrandKey = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
        //let brands = testData.data.manufacturers;
        let brands = data;
        let filterBrand = store.get('filterBrand');
        
        for(let i=0;i<brands.length;i++){
          brands[i].checked = false;
          if(filterBrand && filterBrand.length){
            for(let j=0;j<filterBrand.length;j++){
              if(filterBrand[j].manufacturer_id === brands[i].manufacturer_id){
                brands[i].checked = true;
              }
            }
          }
        }

        aBrandKey.forEach(item => {
          oRes[item] = [];
        })

        for(let i=0;i<aBrandKey.length;i++){
          for(let j=0;j<brands.length;j++){
            if( brands[j]['name'][0].toUpperCase() ===  aBrandKey[i]){
              oRes[aBrandKey[i]].push(brands[j]);
            }
          }
        }

        this.brands = oRes;
      },
      choseBrand(brand, i, key){
        const me = this;
        console.log(i);
        //console.log(brand.manufacturer_id, brand.name)
        const data = {
          manufacturer_id: brand.manufacturer_id,
          name: brand.name,
          checked: !brand.checked
        };
        let filterBrand = store.get('filterBrand');

        me.brands[key][i] = data;

        // `强制刷新`
        me.forceUpdate();

        if(filterBrand && filterBrand.length){
          //console.log('has data');
          for(var i=0;i<filterBrand.length;i++){
            if(data.manufacturer_id === filterBrand[i].manufacturer_id){
              //return true;
              //console.log('del', i);
              filterBrand.splice(i, 1);
              store.set('filterBrand', filterBrand);
              me.filterBrand = filterBrand;
              console.log(me.filterBrand);
              return;
            }
          }
          //console.log('push');
          filterBrand.push(data);
          store.set('filterBrand', filterBrand);
          me.filterBrand = filterBrand;
          console.log(me.filterBrand);
        }else{
          //console.log('no data');
          store.set('filterBrand', [data]);
          me.filterBrand = [data];
          console.log(me.filterBrand);
        }
      },
      clearAllBrand(){
        const me = this;
        store.set('filterBrand', []);

        for(let k in me.brands){
          for(let i=0;i<me.brands[k].length;i++){
            me.brands[k][i].checked = false;
          }
        }
        me.forceUpdate();
        
      },
      confirmBrand(){
        this.filterCondition(0, 'filterBrand');
      },
      handleSizeData(size){
        const filterSize = store.get('filterSize');
        size.forEach(item => {
          if(filterSize && (item.option_value_id === filterSize.option_value_id)){
            item.checked = true;
          }else{
            item.checked = false;
          }
        })
        this.sizes = size;
      },
      choseSize(item){
        console.log(item.name)
        console.log(item.option_value_id)
        this.sizes.forEach(item => {
          item.checked = false;
        })
        item.checked = !item.checked;
        store.set('filterSize', item);
        this.filterSize = item;
      },
      confirmSize(){
        this.filterCondition(1, 'filterSize');
      },
      handleColorData(colors){
        console.log(colors)
        const filterColor = store.get('filterColor');

        // colors.forEach(item => {
        //   // if(filterColor && (item.product_id === filterColor.product_id)){
        //   //   item.checked = true;
        //   // }else{
        //   //   item.checked = false;
        //   // }
        //   item.checked = false;
        // }) 
        //cons
        for(let i=0;i<colors.length;i++){
          colors[i].checked = false;
          if(filterColor && filterColor.length){
            for(let j=0;j<filterColor.length;j++){
              if(filterColor[j].product_id === colors[i].product_id){
                colors[i].checked = true;
              }
            }
          }
        }

        
        this.colors = colors;
        
      },
      choseColors(item, i){
        const me = this;
        let filterColor = store.get('filterColor');

        item.checked = !item.checked;
        this.colors[i] = item;

        if(filterColor && filterColor.length){
          //console.log('has data');
          for(var i=0;i<filterColor.length;i++){
            if(item.product_id === filterColor[i].product_id){
              //return true;
              //console.log('del', i);
              filterColor.splice(i, 1);
              store.set('filterColor', filterColor);
              me.filterColor = filterColor;
              return;
            }
          }
          //console.log('push');
          
          filterColor.push(item);
          store.set('filterColor', filterColor);
          me.filterColor = filterColor;
        }else{
          //console.log('no data');
          //item.checked = !item.checked;
          store.set('filterColor', [item]);
          me.filterColor = [item];
        }
        
      },
      confirmColor(){
        this.filterCondition(2, 'filterColor');
      },
      confirmPrice(price){
        console.log(price);
        
        //this.filterCondition(3, 'filterPrice');
      },
      chouseAll(){
        this.colors.forEach(item => {
          item.checked = true;
        })
        store.set('filterColor', this.colors);
      },
      filterCondition(i, condition){
        console.log(i, condition);
        let filter = store.get(condition);
        let filterCondition = store.get('filterCondition');
        if((condition === 'filterSize') || filter.length){
          filterCondition[i] = true;
          this.filterCondition[i] = true;
          store.set('filterCondition', filterCondition);
        }
        this.content = 'filterLimit';
      },
      forceUpdate(){
        const me = this; 
        const old = me.brands['Z'];
        me.brands['Z'] = [];
        me.brands['Z'] = old;
      }
    },
    mounted() {

    },
    watch: {

    }
  }
</script>
