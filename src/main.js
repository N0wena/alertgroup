import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import * as mutations from './store/types/mutation-types'
import { mapMutations } from 'vuex'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  methods: {
    ...mapMutations({
      setBuildingsData: mutations.SET_BUILDINGS_DATA,
    })
  },
  created: function() {
    const url = require('../data.json')
    this.setBuildingsData(url)
  },
  render: h => h(App)
}).$mount('#app')
