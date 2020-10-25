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
    isMobileSidebarDisplay: false,
    isReservationModalDisplay: false
  },
  mutations: {
    // Reset sidebar state
    'RESET_SIDEBAR_STATE' (state) {
      state.isMobileSidebarDisplay = false
    },
    // Reset reservation modal state
    'RESET_MODAL_STATE' (state) {
      state.isReservationModalDisplay = false
    },
    // Request for display mobile sidebar
    'DISPLAY_MOBILE_SIDEBAR' (state) {
      state.isMobileSidebarDisplay = !state.isMobileSidebarDisplay
    },
    // Request for display reservation modal
    'DISPLAY_RESERVATION_MODAL' (state) {
      state.isMobileSidebarDisplay = true
    }
  },
  actions: {
    // Reset sidebar state
    resetSidebarState ({ commit }) {
      commit('RESET_SIDEBAR_STATE')
    },
    // Reset modal state
    resetModalState ({ commit }) {
      commit('RESET_MODAL_STATE')
    },
    // Request for display mobile sidebar
    displayMobileSidebar ({ commit }) {
      commit('DISPLAY_MOBILE_SIDEBAR')
    },
    // Request for display reservation modal
    displayReservationModal ({ commit }) {
      commit('DISPLAY_RESERVATION_MODAL')
    }
  },
  modules: {
    reservation,
    booking
  },
  plugins: debug ? [createLogger(), createPersisted] : [createPersisted]
})
