import Vue from 'vue'
import Vuex from 'vuex'
import NKeepAlive from '../packages/index';

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    NKeepAlive: NKeepAlive.store,
  },
  state: {

  },
  mutations: {

  },
  actions: {

  }
})
