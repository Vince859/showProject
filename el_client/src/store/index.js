import Vue from 'vue'
import Vuex from 'vuex'
import receipt from './modules/receipt'
import iou from './modules/iou'
import parttime from './modules/parttime'
import tenancy from './modules/tenancy'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    receipt,
    iou,
    parttime,
    tenancy
  }
})

