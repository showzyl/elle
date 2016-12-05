import Vue from 'vue'
import Vuex from 'vuex'

import plugins from './plugin/'
import cart from './modules/cart'

Vue.use(Vuex)

export default new Vuex.Store({
  plugins,
  modules: {
    cart
  }
})


