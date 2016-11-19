<template>
  <div class="findPwd">
    <!--Clicked: {{ $store.state.count }} times, count is {{ evenOrOdd }}.
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementIfOdd">Increment if odd</button>
    <button @click="incrementAsync">Increment async</button>
    <button @click="test">test</button>-->

    
      
      

  </div>
</template>

<script>

// import './assets/css/reset.css'

import { mapGetters, mapActions, mapMutations } from 'vuex'

// let methods =  mapActions([
//   'increment',
//   'decrement',
//   'incrementIfOdd',
//   'incrementAsync'
// ])

// console.log(methods);

// methods['test'] = function(){
//   alert(13)
// }

//let firstClick = 1;

export default {
  name: 'findpwd',
  data(){
    return {
      phone: null,
      pass: '',
      btnTxt: '获取验证码',
      bLockVerifi: false,
      firstClickVerifi: true,
      count: 5
    }
  },
  computed: mapGetters([
    'evenOrOdd'
  ]),
  methods: {
    // sub(){
    //   var me = this;
    //   // alert(123);
    //   console.log(me.age, me.user);
    // },
    
  },
  watch: {
    

  }
}
</script>

<style>
  
</style>