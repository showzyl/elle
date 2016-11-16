<template>
  <div class="findPwd">
    Clicked: {{ $store.state.count }} times, count is {{ evenOrOdd }}.
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementIfOdd">Increment if odd</button>
    <button @click="incrementAsync">Increment async</button>
    <button @click="test">test</button>
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

export default {
  name: 'findpwd',
  computed: mapGetters([
    'evenOrOdd'
  ]),
  methods: (function(){
    return {
      a: 1
    }
  })()
}
</script>

<style>
  
</style>