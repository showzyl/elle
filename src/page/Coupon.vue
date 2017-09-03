<template>
  <div class="coupon">
    <div class="header">
      <i class="iconBack" @click="clickBack"></i>
      <ul class="tabs">
        <li :class="{'tab': true, 'on': item.status}" v-for="(item, i) in tabs" @touchend="switchTab(i)">{{item.txt}}</li>
      </ul>
    </div>

    <ul>
      <li class="item">
        <h4>新人红包</h4>
        <p class="usage">
          ¥ <span class="money">100</span>&nbsp;
          <span class="rule">满500元使用</span>
        </p>
        <p class="range">
          使用范围：购买使用范围，全球通用品牌使用
        </p>

        <p class="deadline">
          使用期限：3017.09.03~3017.09.04
        </p>
      </li>
    </ul>

  </div>
</template>
<style media="screen" lang="scss" scoped>
  .coupon{

    .header{
      position: relative;
      height: 1.5rem;
      border-bottom: 1px solid #d7d7d7;
    }
    .iconBack{
      position: absolute;
      display: block;
      background-image: url(../assets/img/backbtn.png);
      background-repeat: no-repeat;
      background-size: contain;
      height: 0.6rem;
      width: 0.8rem;
      top: 33%;
      left: 3%;
    }
    .tabs{
      position: absolute;
      left: 50%;
      margin-left: -3rem;
      margin-top: .2rem;
      font-size: .4rem;
      .on{
        background-color: #d7d7d7;
      }
      .tab{
        float: left;
        border: 1px solid #d5d5d5;
        border-right: 0 none;
        padding: .2rem .5rem;
      }
      .tab:first-child{
        border-radius: 30px 0 0 30px;
      }
      .tab:nth-last-child(1){
        border-right: 1px solid #d5d5d5;
        border-radius: 0 30px 30px 0;
      }
    }

    .item{
    margin: .2rem;
    padding: .3rem;
    border: 1px solid #d5d5d5;
    font-size: .4rem;
      .usage{
        font-size: .5rem;
        color: #f3897b;
      }
      .money{
        font-size: 1.5rem;
      }
      .range{
        border-bottom: 1px dashed #d5d5d5;
        padding-bottom: .2rem;
      }
      .deadline{
        padding-top: .2rem;
      }
      .range, .deadline{
        color: #9a9a9a;
      }
      }
  }
</style>
<script lang="babel">
  import { Toast, Indicator } from 'mint-ui'
  export default {
    data(){
      return {
				tabs: [{
					txt: '可使用',
          status: true
        }, {
					txt: '已过期',
					status: false
        }, {
					txt: '已使用',
					status: false
				}]
      }
    },
    created(){
      const me = this;

      me.fetchCouponData({}, res => {
        console.log(res);
      })

    },
    components: {

    },
    computed: {

    },
    methods: {
      fetchCouponData(data, cb){
        const me = this;
        data.route = 'mapi/coupon'; // 可领取
        // mapi/coupon/get  领取
        // mapi/coupon/getList 个人优惠券列表接口
        data.format = 'jsonp';

        this.$http.jsonp(
          window.q.interfaceHost +'index.php?',
          {
            params: data
          }
        ).then( res => {
          let data = res.body;
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
      addAds(){
        console.log('add')
      },
			switchTab(index){
      	const me = this
      	console.log(index)
        me['tabs'].forEach(item => {
      		item.status = false
        })
        me['tabs'][index]['status'] = true
      },
			clickBack(){
				history.back()
			}

    },
    mounted() {

    },
    watch: {

    }
  }
</script>
