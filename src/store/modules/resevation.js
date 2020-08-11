const state = {
  currentStep: 1,
  selectedRoom: []
}

const getters = {
  currentStep (state) {
    return state.currentStep
  }
}
const mutations = {
  'GO_NEXT_STEP' (state) {
    state.currentStep += 1
  },
  'SET_RESERVATION' (state) {},
  'REMOVE_RESERVATION' (state) {}
}
const actions = {
  goNextStep ({ commit }) {
    commit('GO_NEXT_STEP')
  },
  initReservation ({ commit }) {},
  addRoomToSelection ({ commit }) {},
  removeRoomFromSelection ({ commit }) {},
  addAddonsToSelection ({ commit }) {},
  removeAddonsFromSelection ({ commit }) {},
  addCustomerDetails ({ commit }) {},
  editCustomerDetails ({ commit }) {},
  removeCustomerDetails ({ commit }) {},
  submitReservation ({ commit }) {}
}

export default {
  state,
  mutations,
  getters,
  actions
}
