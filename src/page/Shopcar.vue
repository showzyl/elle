<template>
  <div class="shopcar">
    <ul class="shopcarList" v-if="products.length" >
      <li class="shopcarItem" v-for="(item,i) in products">
        <a href="/#">
          <h3 class="tit">
            {{item.mname}}
          </h3>
          <div class="shopcarItemMain">
            <div class="shopcarItemT">
              <div class="imgBox">
                <img :src="item.thumb">
              </div>
              <div class="moneyBox">
                <p class="money">¥{{item.price}}</p>
                <p class="des">{{item.mname}} {{item.name}}</p>
              </div>
              <div class="addBottom">
                <label class="mint-checklist-label">
                  <span class="mint-checkbox">
                    <input type="checkbox" class="mint-checkbox-input" checked @change="calMoney({quantity: item.quantity,cart_id: item.cart_id, index: i, checked: item.checked, total: item.total})">
                    <span class="mint-checkbox-core"></span>
                  </span>
                </label>
              </div>
            </div>
            <div class="shopcarItemM">
              <div class="numBox">
                <p>
                  颜色[{{item.color}}]/尺码[{{item.option[0]['value']}}]
                </p>
                <p>
                  数量 {{item.quantity}}
                </p>
              </div>

              <a :href="'/#/product/'+item.product_id+'?sizeName='+item.option[0].value+'&colorName='+item.color+'&quantity='+item.quantity+'&cart_id='+item.cart_id" class="change">
                修改
              </a>
            </div>
            <div class="shopcarItemB">
              <h3 class="price">¥{{item.total}}</h3>
              <div class="iconList">
                <i class="iconLove" :class="{iconRed: item.is_wished}"></i>
                <i class="iconGarbage" @click.prevent="confirmDel({cart_id: item.cart_id})"></i>
              </div>
            </div>
          </div>
        </a>
      </li>
    </ul>


    <div class="shopcarTop" v-else>
        <img src="../assets/img/shopcart.png" alt="" class="shopcarImg"/>
        <h3 class="emptyTxt">
          您的购物车暂无商品
        </h3>
    </div>


    <div class="settlement">
      总计: ￥{{ total }}（{{quantity}} 件）
      <div class="settlementBtn" @click="checkout">结算</div>
    </div>

    <footBar pageName="shopcar"/>
  </div>
</template>


<style media="screen" scoped>
  .shopcar{
    background-color: #e5e5e5;
    min-height: 100%;
    margin-bottom: 3rem;
  }
  .shopcarTop{
    height: 6rem;
    text-align: center;
    vertical-align: middle;
    border-bottom: 1px solid #dddddd;
    background-color: #fff;
  }
  .shopcarImg{
    width: 4rem;
    height: 4rem;
    padding-top: .6rem;
  }
  .emptyTxt{
    text-align: center;
    color: #dddddd;
    padding: .3rem;
    font-size: .36rem;
  }
  .shopcarItem{
    padding: .2rem;
    overflow: auto;

  }
  .shopcarItem .tit{
    /*padding: .3rem;*/
    margin-bottom: .2rem;
    font-size: .4rem;
  }
  .shopcarItemMain{
    background-color: #fff;
    /*padding: .3rem;*/

  }
  .shopcarItemMain .desc{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .shopcarItemT{
    overflow: auto;
    padding: .3rem;
    position: relative;
    border-bottom: 1px solid #d7d7d5;
  }
  .shopcarItemT .imgBox{
    width: 2.2rem;
    height: 2.8rem;
    float: left;
  }

  .shopcarItemT .moneyBox{
    float: left;
    width: 75%;
  }
  .shopcarItemT p{
    padding: .4rem 0 0 .2rem;
  }
  .shopcarItemT .money{
    font-size: .5rem;
  }
  .shopcarItemT .mint-checklist-label{
    position: absolute;
    right: 0;
    top: 0;
  }

  .shopcarItemM{
    overflow: hidden;
    padding: .2rem .2rem 0;

  }

  .shopcarItemM .numBox{
    float: left;

  }

  .shopcarItemM p{
    margin: 0 0 .2rem 0;
  }

  .shopcarItemM .change{
    float: right;
    font-size: .4rem;

  }

  .shopcarItemB{
    overflow: hidden;
    padding: .2rem 0;
  }

  .shopcarItemB .iconList i {
    display: inline-block;
    width: 22px;
    height: 20px;
    margin-left: .6rem;
    background-size: cover;
  }

  .shopcarItemB .price{
    float: left;
    font-size: .5rem;
    padding-left: .2rem;
  }


  .iconLove{
    background-image: url(../assets/img/recomend/collection@3x.png);
  }

  .iconRed{
    background-image: url(../assets/img/recomend/collection_h@3x.png);
  }

  .shopcarItemB .iconList i.iconGarbage{
    height: 23px;
  }

  .shopcar .settlement{
    text-align: center;
    position: fixed;
    bottom: 1.2rem;
    left: 0;
    width: 100%;
    background-color: #fff;
    color: red;
    height: 1.2rem;
    line-height: 1.2rem;
    font-size: .4rem;
  }

  .settlement .settlementBtn{
    position: absolute;
    right: 0;
    top: 0;
    width: 1.8rem;
    height: .6rem;
    line-height: .6rem;
    background: red;
    color: #fff;
    top: 50%;
    margin-top: -.3rem;
    margin-right: .3rem;
    border-radius: 5px;
  }


</style>

<script>
  import { mapState } from 'vuex'
  import footBar from '../components/footBar.vue'
  import { Toast, Indicator, MessageBox } from 'mint-ui'
  import util from '../assets/lib/q.util.js'
  import store from '../assets/lib/q.store.js'

  export default {
    data() {
      return {
        loading: false,
        products: [],
        totals: [],
        total: 0,
        quantity: 0
      }
    },
    created(){
      const me = this;

      Indicator.open({
        text: '加载中...',
        spinnerType: 'fading-circle'
      });

      const mobile_token = store.get('mobile_token');
      const customer_id = store.get('customer_id');

      me.fetchCartData({
        customer_id: customer_id,
        mobile_token: mobile_token
      }, res => {
//        console.log(res.products);
        me.products = res.products;
//        me.totals = res.totals;
//        me.total = res.totals[0].text;
        me.products.forEach(item => {
          item.checked = true;
          me.quantity += parseInt(item.quantity);
          me.total += parseInt(item.total);
        })

      })

    },
    components: {
      footBar
    },
    methods: {
      fetchCartData(data, cb){
        var me = this;
        data.route = 'mapi/cart';
        data.format = 'jsonp';
        this.$http.jsonp(
          window.q.interfaceHost +'index.php',
          {
            params: data
          }
        ).then( res => {
          let data = res.body;
          if(data.code === 0){
            cb && cb(data.data);
          }else{
            Toast('暂无数据...');
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
      deleteCartItem(data, cb){
        // cart_id: xxxx
        var me = this;
        data.route = 'mapi/cart/delete';
        data.format = 'jsonp';
        this.$http.jsonp(
          window.q.interfaceHost +'index.php',
          {
            params: data
          }
        ).then( res => {
          let data = res.body;
//          console.log(data);
          if(data.code === 0){
            cb && cb(data.data);
          }else{
            Toast('暂无数据...');
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
      confirmDel({cart_id}){
        const me = this;
        console.log(cart_id);
//        MessageBox({
//          title: '提示',
//          message: '确定删除?',
//          showCancelButton: true
//        });
        MessageBox.confirm('确定删除此商品?').then(action => {
//          console.log(action);
          if(action == 'confirm'){
            const mobile_token = store.get('mobile_token');
            const customer_id = store.get('customer_id');
            me.deleteCartItem({
              cart_id,
              mobile_token,
              customer_id
            }, ()=>{
              //location.reload();
            })
          }
        })
      },
      checkout(){
        const bChecked = this.products.find(item => {
          return item.checked;
        });

        if(!bChecked){
          return Toast('您还未选中要结算的商品!')
        }

        // 结算

        console.log('进行结算');

      },
      calMoney({
        checked,
        quantity,
        cart_id,
        total,
        index
      }){
        const me = this;
        console.log(checked, quantity, index, cart_id, total);
        if(checked){
          console.log(me.total)
          me.quantity -= parseInt(quantity);
          me.total -= parseInt(total);
          console.log(me.total)
        }else{
          me.quantity += parseInt(quantity);
          me.total += parseInt(total);
        }
        me.products[index].checked = !checked;
        console.log(me.quantity, me.products[index].checked);

      },
    }
  }
</script>

