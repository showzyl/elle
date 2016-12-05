import * as types from '../mutation-types'

const state = {
  products: []
}

const mutations = {

  [types.ADD_TO_CART](state, {item}) {
    console.log(item);
    const record = state.products.find(p => p.id === item.id);
    if (!record) {
      state.products.push(item)
    } else {
      record.num++
    }
  }




}

export default {
  state,
  mutations
}