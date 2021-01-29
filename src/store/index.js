import Vue from 'vue'
import Vuex from 'vuex'
import * as types from './types/mutation-types'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    buildings: [],
    roomsValue: ["s", "1к", "2к", "3к"],
    floorValue: {
      min: 0,
      max: 100,
    },
    squareValue: {
      min: 0,
      max: 1000,
    },
    costValue: {
      min: 0,
      max: 100,
    },
  },
  mutations: {
    [types.SET_BUILDINGS_DATA](state, value) {
      state.buildings = value
    },

    // [types.CHANGE_RANGE_MIN](state, event) {
    //   state.floorValue.min = event.target.value
    // },

    // [types.CHANGE_RANGE_MAX](state, event) {
    //   state.floorValue.max = evente.target.value
    // },
  },
  actions: {
  },
  modules: {
  }
})
