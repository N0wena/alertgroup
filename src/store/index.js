import Vue from 'vue'
import Vuex from 'vuex'
import * as types from './types/mutation-types'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    buildings: [],
  },
  mutations: {
    [types.SET_BUILDINGS_DATA] (state, value) {
      state.buildings = value
    },
  },
  actions: {
  },
  modules: {
  }
})
