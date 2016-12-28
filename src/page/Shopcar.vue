<template>
  <div class="shopcar">
    <div class="shopNav" v-show="products.length">
      <div class="left" @click="toggleAll">
        <i class="iconBack"></i>
        ALL
      </div>
      <div class="right" @click="delAll">Clear 清除</div>
    </div>
    <ul class="shopcarList" v-if="products.length" >
      <li class="shopcarItem" v-for="(item,i) in products">
        <router-link :to="'/product/' + item.product_id">
          <h3 class="tit">
            {{item.mname}}
          </h3>
        </router-link>
          <div class="shopcarItemMain">
            <div class="shopcarItemT">
              <router-link :to="'/product/' + item.product_id">
                <div class="imgBox">
                  <img :src="item.thumb">
                </div>
                <div class="moneyBox">
                  <p class="money">¥{{item.price}}</p>
                  <p class="des">{{item.mname}} {{item.name}}</p>
                </div>
              </router-link>
              <div class="addBottom">
                <label class="mint-checklist-label">
                  <span class="mint-checkbox">
                    <input type="checkbox" class="mint-checkbox-input" v-model="item.checked" @change="calMoney({quantity: item.quantity,cart_id: item.cart_id, index: i, checked: item.checked, total: item.total})">
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
              <router-link :to="'/product/'+item.product_id+'?sizeName='+item.option[0].value+'&colorName='+item.color+'&quantity='+item.quantity+'&cart_id='+item.cart_id" class="change">
                修改
              </router-link>
              <!--<a :href="'/#/product/'+item.product_id+'?sizeName='+item.option[0].value+'&colorName='+item.color+'&quantity='+item.quantity+'&cart_id='+item.cart_id" class="change">-->
                <!--修改-->
              <!--</a>-->
            </div>
            <div class="shopcarItemB">
              <h3 class="price">¥{{item.total}}</h3>
              <div class="iconList">
                <i class="iconLove" :class="{iconRed: item.is_wished}"></i>
                <i class="iconGarbage" @click.prevent="confirmDel({cart_id: item.cart_id, quantity: item.quantity})"></i>
              </div>
            </div>
          </div>

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

    <recommend title="为您优选" :products="recommends"></recommend>

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
    width: 90%;
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

  .shopNav{
    height: 1.2rem;
    line-height: 1.2rem;
    text-align: center;
    border: 1px solid #d7d7d5;
    border-right: 0 none;
    border-left: 0 none;
    position: relative;
    background-color: #ffffff;
    font-size: .4rem;
  }

  .shopNav .left, .shopNav .right{
    position: absolute;
    top: 0;
  }

  .shopNav .left{
    left: 0;
    padding-left: .4rem;
  }

  .shopNav .right{
    right: 0;
    padding-right: .4rem;
  }


</style>

<script>
  import { mapState } from 'vuex'
  import footBar from '../components/footBar.vue'
  import recommend from '../components/recommend.vue'
  import { Toast, Indicator, MessageBox } from 'mint-ui'
  import util from '../assets/lib/q.util.js'
  import store from '../assets/lib/q.store.js'

  const mobile_token = store.get('mobile_token');
  const customer_id = store.get('customer_id');

  export default {
    data() {
      return {
        loading: false,
        cartIds: [],
        products: [],
        totals: [],
        total: 0,
        quantity: 0,
        recommends: []
      }
    },
    created(){
      const me = this;

      Indicator.open({
        text: '加载中...',
        spinnerType: 'fading-circle'
      });

      util.fetchInterface(me, 0, {
        customer_id,
        mobile_token,
        route: 'mapi/cart'
      }, res => {
        Indicator.close();
        me.loading = false;
        console.log(res);
        if(res === 'notMatch'){
          Toast('暂无数据...')
          return;
        }

        if(res === 'error'){
          Toast('网络错误...')
          return;
        }

        res.products.forEach(item => {
          item.checked = true;
          me.cartIds.push(item.cart_id);
          me.quantity += Number(item.quantity);
          me.total += Number(item.total);
        })

        me.products = res.products;

        util.fetchInterface(me, 0, {
          mobile_token,
          customer_id,
          route: 'mapi/cart/select',
          selected: me.cartIds.join(',')
        }, res => {

        })

        store.set('shopcartNumber', me.quantity)
      })


      // 为你优选
      util.fetchInterface(me, 0, {
        customer_id,
        mobile_token,
        page_id: 1,
        category_id: 20, // 写死
        route: 'mapi/product_category'
      }, res => {
        console.log(res);
        me.recommends = res.results;
      })

    },
    components: {
      footBar,
      recommend
    },
    methods: {
      confirmDel({cart_id, quantity}){
        const me = this;
        console.log(cart_id);
        MessageBox.confirm('确定删除此商品?').then(action => {
          if(action == 'confirm'){
            me.cartIds.splice(me.cartIds.indexOf(cart_id), 1);
            let shopcartNumber = store.get('shopcartNumber');
            shopcartNumber -= quantity;
            store.set('shopcartNumber', shopcartNumber);

            util.fetchInterface(me, 0,{
              cart_id,
              mobile_token,
              customer_id,
              route: 'mapi/cart/delete'
            },res => {

            })

          }
        })
      },
      checkout(){
        const bChecked = this.products.find(item => item.checked);

        if(!bChecked){
          return Toast('您还未选中要结算的商品!')
        }

        // 确认订单
        console.log('确认订单去了');
        location.href = '/#/confirmorder';


      },
      toggleAll(){
        console.log('in')
        const me = this;
        let bCheck = me.products.every(item => item.checked);
        console.log(bCheck);
        me.products.forEach(item => {
          item.checked = !bCheck;
          console.log(item.checked);
        })

        if(bCheck){
          me.quantity = 0;
          me.total = 0;
          me.cartIds = [];

          me.products.forEach(item => {
            util.fetchInterface(me, 0, {
              mobile_token,
              customer_id,
              route: 'mapi/cart/unselect',
              selected: item.cart_id
            }, res => {

            })
          })

        }else{
          me.quantity = 0;
          me.total = 0;
          me.cartIds = [];
          me.products.forEach(item => {
            me.cartIds.push(item.cart_id)
            me.quantity += parseInt(item.quantity);
            me.total += parseInt(item.total);
          })

          util.fetchInterface(me, 0, {
            mobile_token,
            customer_id,
            route: 'mapi/cart/select',
            selected: me.cartIds.join(',')
          }, res=>{

          })
        }

      },
      delAll(){
        const me = this;
        MessageBox.confirm('确定清除所有商品?').then(action => {

          if(action === 'confirm'){
            store.set('shopcartNumber', 0);

            me.products.forEach(item => {

              util.fetchInterface(me, 0, {
                cart_id: item.cart_id,
                mobile_token,
                customer_id,
                route: 'mapi/cart/delete'
              }, res => {

              })

            })
            location.reload();

          }

        })
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
        if(!checked){
          console.log(me.total)
          me.quantity -= parseInt(quantity);
          me.total -= parseInt(total);
          me.cartIds.splice(me.cartIds.indexOf(cart_id), 1);

          util.fetchInterface(me, 0, {
            mobile_token,
            customer_id,
            route: 'mapi/cart/unselect',
            selected: cart_id
          }, res => {

          })

        }else{
          me.quantity += parseInt(quantity);
          me.total += parseInt(total);
          me.cartIds.push(cart_id);
          util.fetchInterface(me, 0, {
            mobile_token,
            customer_id,
            route: 'mapi/cart/select',
            selected: me.cartIds.join(',')
          },res => {

          })

        }
        console.log(me.quantity, me.products[index].checked);

      },

    }
  }
</script>

