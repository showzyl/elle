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

let a =  mapActions([
  'increment',
  'decrement',
  'incrementIfOdd',
  'incrementAsync'
])

console.log(a);

a['test'] = function(){
  alert(13)
}

export default {
  name: 'findpwd',
  computed: mapGetters([
    'evenOrOdd'
  ]),
  methods: a
  
}
</script>

<style>
  
</style>