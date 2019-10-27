import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import customer from './customer'
import category from './category'
import product from './product'
import comment from './comment'
import order from './order'
import waiter from './waiter'

export default new Vuex.Store({
  // 合并所有的store
  modules:{
    customer,
    category,
    product,
    comment,
    order,
    waiter
  }
})
