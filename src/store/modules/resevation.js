import roomsIntro from '@/data/checkout/roomsIntro'
import addOns from '@/data/checkout/addOns'

const state = {
  roomsIntro: [],
  addons: addOns,
  currentStep: 0,
  reservationDetails: {
    roomSelections: [],
    customerInfo: {}
  },
  onSearchRoom: {
    date: {
      start: null,
      end: null
    },
    guests: {
      numOfAdultGuests: undefined,
      numOfChildrenGuest: undefined
    },
    roomSelect: {
      roomType: '',
      packageName: '',
      rate: undefined
    },
    addOns: []
  },
  currentSelectedRoomIdx: 0
}

const getters = {
  currentStep (state) {
    return state.currentStep
  },
  reservationSelection (state) {
    return state.reservationDetails
  },
  displayRoomSearchResult (state) {
    const totalGuests = state.onSearchRoom.guests.numOfAdultGuests + state.onSearchRoom.guests.numOfChildrenGuest
    return state.roomsIntro.filter(element => element.maxGuestAvailable >= totalGuests)
  },
  displayAddOns (state) {
    return state.addons
  }
}
const mutations = {
  'SET_ROOMS' (state, roomsIntro) {
    state.roomsIntro = roomsIntro
  },
  'RESET_RESERVATION' (state) {
    state.reservationDetails = {}
  },
  'GO_NEXT_STEP' (state) {
    state.currentStep += 1
  },
  'BACK_PREVIOUS_STEP' (state) {
    state.currentStep -= 1
  },
  'SET_SEARCH_SELECTION' (state, { date, guests }) {
    state.onSearchRoom.date.start = date.start
    state.onSearchRoom.date.end = date.end
    state.onSearchRoom.guests.numOfAdultGuests = guests.numOfAdultGuest
    state.onSearchRoom.guests.numOfChildrenGuest = guests.numOfChildrenGuest
    state.currentStep += 1
  },
  'ADD_ROOM' (state, { type, packageName, rate }) {
    state.onSearchRoom.roomSelect.roomType = type
    state.onSearchRoom.roomSelect.packageName = packageName
    state.onSearchRoom.roomSelect.rate = rate
    state.currentStep += 1
  },
  'ADD_ADDONS' (state, { name, price }) {
    state.onSearchRoom.addOns.push({
      addOnName: name,
      addOnPrice: price
    })
  },
  'REMOVE_RESERVATION' (state) {}
}
const actions = {
  goNextStep ({ commit }) {
    commit('GO_NEXT_STEP')
  },
  backPreviousStep ({ commit }) {
    commit('BACK_PREVIOUS_STEP')
  },
  initRoom ({ commit }) {
    commit('SET_ROOMS', roomsIntro)
  },
  initReservation ({ commit }) {
    commit('RESET_RESERVATION')
  },
  searchRoomType ({ commit }, selection) {
    commit('SET_SEARCH_SELECTION', selection)
  },
  async addRoomToSelection ({ commit }, selection) {
    commit('ADD_ROOM', selection)
  },
  removeRoomFromSelection ({ commit }) {},
  async addAddonsToSelection ({ commit }, selection) {
    commit('ADD_ADDONS', selection)
  },
  removeAddonsFromSelection ({ commit }) {},
  addCustomerDetails ({ commit }) {},
  editCustomerDetails ({ commit }) {},
  removeCustomerDetails ({ commit }) {},
  submitReservation ({ commit }) {},
  getReservation ({ commit }) {}
}

export default {
  state,
  mutations,
  getters,
  actions
}
