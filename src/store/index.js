import Vue from 'vue'
import Vuex from 'vuex'
import * as types from './types/mutation-types'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    buildings: [],
    filteredBuildings: null,
    roomsValue: ["1к", "2к", "3к", "4к"],
    selectedRoom: 1,
    rangeFloor: [1, 9],
    rangeSquare: [9, 99],
    rangeCost: [0.9, 9.9],
  },
  getters: {
    trueRangeCost: state => {
      return state.rangeCost.map(el => el * 1000000)
    }
  },
  mutations: {
    [types.SET_BUILDINGS_DATA](state, value) {
      state.buildings = value
    },

    [types.SET_RANGE_FLOOR](state, value) {
      state.rangeFloor = value
    },

    [types.SET_RANGE_SQUARE](state, value) {
      state.rangeSquare = value
    },

    [types.SET_RANGE_COST](state, value) {
      state.rangeCost = value
    },

    [types.SELECT_ROOM](state, value) {
      state.selectedRoom = value + 1
    },
  },
  actions: {
  },
  modules: {
  }
})
