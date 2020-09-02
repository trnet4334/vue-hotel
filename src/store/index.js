import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import createLogger from 'vuex/dist/logger'
import reservation from './modules/resevation'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'
const createPersisted = createPersistedState({
  storage: window.sessionStorage
})

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    reservation
  },
  plugins: debug ? [createLogger(), createPersisted] : [createPersisted]
})
