import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import { createLogger } from 'vuex'
import reservation from './modules/reservation'
import booking from './modules/booking'
import * as MUTATION_TYPES from './mutation-types'

const debug = process.env.NODE_ENV !== 'production'
const createPersisted = createPersistedState({
  storage: window.sessionStorage
})

export default createStore({
  state: {
    isMobileSidebarDisplay: false,
    isReservationModalDisplay: false
  },
  mutations: {
    [MUTATION_TYPES.RESET_SIDEBAR_STATE] (state) {
      state.isMobileSidebarDisplay = false
    },
    [MUTATION_TYPES.RESET_MODAL_STATE] (state) {
      state.isReservationModalDisplay = false
    },
    [MUTATION_TYPES.DISPLAY_MOBILE_SIDEBAR] (state) {
      state.isMobileSidebarDisplay = !state.isMobileSidebarDisplay
    },
    [MUTATION_TYPES.DISPLAY_RESERVATION_MODAL] (state) {
      state.isMobileSidebarDisplay = true
    }
  },
  actions: {
    resetSidebarState ({ commit }) {
      commit(MUTATION_TYPES.RESET_SIDEBAR_STATE)
    },
    resetModalState ({ commit }) {
      commit(MUTATION_TYPES.RESET_MODAL_STATE)
    },
    displayMobileSidebar ({ commit }) {
      commit(MUTATION_TYPES.DISPLAY_MOBILE_SIDEBAR)
    },
    displayReservationModal ({ commit }) {
      commit(MUTATION_TYPES.DISPLAY_RESERVATION_MODAL)
    }
  },
  modules: {
    reservation,
    booking
  },
  plugins: debug ? [createLogger(), createPersisted] : [createPersisted]
})
