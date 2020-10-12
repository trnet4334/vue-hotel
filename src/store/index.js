import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import createLogger from 'vuex/dist/logger'
import reservation from './modules/resevation'
import booking from './modules/booking'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'
const createPersisted = createPersistedState({
  storage: window.sessionStorage
})

export default new Vuex.Store({
  state: {
    isMobileSidebarDisplay: false
  },
  mutations: {
    // Reset sidebar state
    'RESET_SIDEBAR_STATE' (state) {
      state.isMobileSidebarDisplay = false
    },
    // Request for display mobile sidebar
    'DISPLAY_MOBILE_SIDEBAR' (state) {
      state.isMobileSidebarDisplay = !state.isMobileSidebarDisplay
    }
  },
  actions: {
    // Reset sidebar state
    resetSidebarState ({ commit }) {
      commit('RESET_SIDEBAR_STATE')
    },
    // Request for display mobile sidebar
    displayMobileSidebar ({ commit }) {
      commit('DISPLAY_MOBILE_SIDEBAR')
    }
  },
  modules: {
    reservation,
    booking
  },
  plugins: debug ? [createLogger(), createPersisted] : [createPersisted]
})
