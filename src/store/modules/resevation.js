import roomsIntro from '@/data/checkout/roomsIntro'
import addOns from '@/data/checkout/addOns'
import router from '@/router'
import dayjs from 'dayjs'
import shortid from 'shortid'
import apiService from '@/common/api'

const state = {
  roomsIntro: roomsIntro,
  tempId: '',
  addOns: addOns,
  currentStep: 1,
  previousStep: 1,
  isOnBooking: undefined,
  isEditingRoom: false,
  isCompleteCustomerInfo: false,
  reservationDetails: {
    createTime: '',
    lastUpdateTime: '',
    confirmationNum: '',
    type: 'Stay',
    status: 'Upcoming',
    roomSelections: [],
    customerInfo: {},
    totalAmount: undefined
  },
  onSearchRoom: {
    createTime: '',
    totalNight: undefined,
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
  onEditCustomerInfo: {
    contactDetail: {},
    addressDetail: {},
    note: ''
  },
  currentSelectedRoomIdx: 0
}

const getters = {
  reservationSelection (state) {
    if (state.reservationDetails.roomSelections.length === 0) {
      return [state.onSearchRoom]
    } else {
      return state.reservationDetails.roomSelections
    }
  },
  displayRoomSearchResult (state) {
    const totalGuests = state.onSearchRoom.guests.numOfAdultGuests + state.onSearchRoom.guests.numOfChildrenGuest
    return state.roomsIntro.filter(element => element.maxGuestAvailable >= totalGuests)
  }
}
const mutations = {
  'SET_ROOMS' (state, roomsIntro) {
    state.roomsIntro = roomsIntro
  },
  'RESET_RESERVATION' (state) {
    state.reservationDetails = {}
  },
  'RESET_ONSEARCHROOM' (state) {
    state.onSearchRoom = {
      createTime: '',
      totalNight: undefined,
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
    }
  },
  'GO_NEXT_STEP' (state) {
    if (state.currentStep > 4) {
      state.currentStep = 4
    } else {
      state.previousStep = state.currentStep
      state.currentStep += 1
    }
  },
  'BACK_PREVIOUS_STEP' (state) {
    if (state.currentStep < 0) {
      state.currentStep = 0
    } else {
      state.previousStep = state.currentStep
      state.currentStep -= 1
    }
  },
  'SWITCH_STEP' (state, step) {
    state.currentStep = step
  },
  'GENERATE_ID' (state, id) {
    if (state.tempId === id) {
      return null
    } else {
      state.tempId = id
    }
  },
  'SET_SEARCH_SELECTION' (state, { date, guests, time }) {
    state.reservationDetails.createTime = time
    state.onSearchRoom.createTime = time
    state.reservationDetails.lastUpdateTime = state.reservationDetails.createTime
    state.onSearchRoom.date.start = date.start
    state.onSearchRoom.date.end = date.end
    state.onSearchRoom.totalNight = dayjs(date.end).diff(date.start, 'day')
    state.onSearchRoom.guests.numOfAdultGuests = guests.numOfAdultGuests
    state.onSearchRoom.guests.numOfChildrenGuest = guests.numOfChildrenGuest
    state.currentStep === 0 ? state.currentStep += 1 : state.currentStep = 1
    state.isEditingRoom = false
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
  'REMOVE_ADDONS' (state, name) {
    state.onSearchRoom.addOns = state.onSearchRoom.addOns.filter(
      element => element.addOnName !== name
    )
  },
  'CALCULATE_TOTAL_AMOUNT' (state) {
    const arr = []
    if (state.reservationDetails.roomSelections.length === 0 && state.reservationDetails.onSearchRoom.createTime !== '') {
      // eslint-disable-next-line valid-typeof
      if (state.reservationDetails.onSearchRoom.addOns.length !== 0) {
        const sum = state.reservationDetails.onSearchRoom.addOns.forEach(
          (element) => {
            element.addOnPrice.reduce((acc, item) => {
              return acc + item
            }, 0)
          })
        state.reservationDetails.totalAmount = Math.round((sum + state.reservationDetails.onSearchRoom.roomSelect.rate * state.reservationDetails.onSearchRoom.totalNight) * 1.08 * 100) / 100
      } else {
        state.reservationDetails.totalAmount = Math.round(state.reservationDetails.onSearchRoom.roomSelect.rate * state.reservationDetails.onSearchRoom.totalNight * 1.08 * 100) / 100
      }
    } else if (state.reservationDetails.roomSelections.length !== 0) {
      state.reservationDetails.roomSelections.forEach(
        (element) => {
          if (element.addOns.length !== 0) {
            const sum = element.addOns.reduce((acc, item) => {
              return acc + item.addOnPrice
            }, 0)
            arr.push((sum + element.roomSelect.rate * element.totalNight) * 1.08)
          } else {
            arr.push(element.roomSelect.rate * element.totalNight * 1.08)
          }
        })
      state.reservationDetails.totalAmount = Math.round(arr.reduce((acc, item) => {
        return acc + item
      }, 0) * 100) / 100
    } else {
      return null
    }
  },
  'SAVE_ROOM_SELECTION_TO_RESERVATION' (state) {
    const record = state.reservationDetails.roomSelections.find(
      element => element.createTime === state.onSearchRoom.createTime
    )
    if (record) {
      record.date = state.onSearchRoom.date
      record.guests = state.onSearchRoom.guests
      record.roomSelect = state.onSearchRoom.roomSelect
      record.addOns = state.onSearchRoom.addOns
    } else {
      state.reservationDetails.roomSelections.push(state.onSearchRoom)
    }
    state.isEditingRoom = false
  },
  'REMOVE_ROOM_FROM_SELECTION' (state, selection) {
    const record = state.reservationDetails.roomSelections.map(
      (element) => {
        return element.createTime
      }).indexOf(selection)
    // TODO: Re-design the logic
    if (state.reservationDetails.roomSelections.length > 1) {
      state.reservationDetails.roomSelections.splice(record, 1)
    } else {
      state.previousStep = state.currentStep
      state.currentStep = 0
      state.reservationDetails.roomSelections = []
    }
  },
  'EDIT_ROOM_FROM_SELECTION' (state, selection) {
    const recordIdx = state.reservationDetails.roomSelections.map(
      (element) => {
        return element.createTime
      }).indexOf(selection)
    const record = state.reservationDetails.roomSelections.slice(recordIdx, recordIdx + 1)[0]
    state.onSearchRoom.createTime = record.createTime
    state.onSearchRoom.totalNight = record.totalNight
    state.onSearchRoom.date.start = record.date.start
    state.onSearchRoom.date.end = record.date.end
    state.onSearchRoom.guests.numOfAdultGuests = record.guests.numOfAdultGuests
    state.onSearchRoom.guests.numOfChildrenGuest = record.guests.numOfChildrenGuest
    state.onSearchRoom.roomSelect.roomType = record.roomSelect.roomType
    state.onSearchRoom.roomSelect.rate = record.roomSelect.rate
    state.onSearchRoom.roomSelect.packageName = record.roomSelect.packageName
    state.onSearchRoom.addOns = record.addOns
    state.previousStep = state.currentStep
    state.currentStep = 1
    state.isEditingRoom = true
    state.currentSelectedRoomIdx = recordIdx
  },
  'ADD_CUSTOMER_DETAIL' (state, { contact, address, note }) {
    state.onEditCustomerInfo.contactDetail = contact
    state.onEditCustomerInfo.addressDetail = address
    state.onEditCustomerInfo.note = note
  },
  'SAVE_CUSTOMER_INFO_TO_RESERVATION' (state) {
    state.reservationDetails.customerInfo = state.onEditCustomerInfo
  },
  'ADD_ANOTHER_ROOM' (state) {
    state.currentStep = 0
    state.onSearchRoom = {
      createTime: '',
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
    }
  },
  'SET_CONFIRMATION_NUM' (state) {
    state.reservationDetails.confirmationNum = shortid.generate() + dayjs().format('mmss')
  },
  'DISCARD_CHANGES' (state) {
    state.isEditingRoom = false
    state.currentStep = state.previousStep
  },
  'SUBMIT_RESERVATION' (state) {
    state.tempId = ''
    state.currentStep = 1
    state.previousStep = 1
    state.isOnBooking = undefined
    state.isEditingRoom = ''
    state.onSearchRoom = {
      createTime: '',
      totalNight: undefined,
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
    }
    state.onEditCustomerInfo = {
      contactDetail: {},
      addressDetail: {},
      note: ''
    }
    state.currentSelectedRoomIdx = 0
  },
  'RESET_RESERVED_INFO' (state) {
    state.reservationDetails = {
      createTime: '',
      lastUpdateTime: '',
      confirmationNum: '',
      roomSelections: [],
      customerInfo: {},
      totalAmount: undefined
    }
  }
}
const actions = {
  goNextStep ({ commit }) {
    commit('GO_NEXT_STEP')
  },
  backPreviousStep ({ commit }) {
    commit('BACK_PREVIOUS_STEP')
  },
  // TODO: Finish this action
  async switchStep ({ commit }, order) {
    await router.push(`/reservation/s${order}`)
    commit('SWITCH_STEP', order)
  },
  initRoom ({ commit }) {
    commit('SET_ROOMS', roomsIntro)
  },
  initReservation ({ commit }) {
    commit('RESET_RESERVATION')
  },
  async initOnSearchRoom ({ commit }) {
    commit('RESET_ONSEARCHROOM')
  },
  async addAnotherRoom ({ state, commit }) {
    await router.push({
      name: 'Reservation',
      params: { tempId: state.tempId },
      query: {
        createdTime: dayjs(state.reservationDetails.createTime).format('YYYY-MM-DD'),
        currentStep: 's1',
        prevStep: 's3'
      }
    })
    commit('ADD_ANOTHER_ROOM')
  },
  async generateId ({ commit }, payload) {
    commit('GENERATE_ID', payload)
  },
  async searchRoomType ({ commit }, selection) {
    commit('SET_SEARCH_SELECTION', selection)
  },
  async addRoomToSelection ({ commit }, selection) {
    commit('ADD_ROOM', selection)
  },
  async removeRoomFromSelection ({ state, commit }, selection) {
    if (state.reservationDetails.roomSelections.length === 1) {
      await router.push({
        name: 'Reservation',
        params: { tempId: state.tempId },
        query: {
          createdTime: dayjs(state.reservationDetails.createTime).format('YYYY-MM-DD'),
          currentStep: 's1',
          prevStep: 's3'
        }
      })
      commit('REMOVE_ROOM_FROM_SELECTION', selection)
    } else {
      commit('REMOVE_ROOM_FROM_SELECTION', selection)
    }
  },
  async editRoomFromSelection ({ commit }, selection) {
    commit('EDIT_ROOM_FROM_SELECTION', selection)
  },
  async addAddonsToSelection ({ commit }, selection) {
    commit('ADD_ADDONS', selection)
  },
  async removeAddonsFromSelection ({ commit }, selection) {
    commit('REMOVE_ADDONS', selection)
  },
  async calculateTotalAmount ({ commit }) {
    commit('CALCULATE_TOTAL_AMOUNT')
  },
  async saveRoomSelectionToReservation ({ commit }) {
    commit('SAVE_ROOM_SELECTION_TO_RESERVATION')
  },
  async forwardToCustomerInfo ({ state, commit, dispatch }) {
    await dispatch('saveRoomSelectionToReservation')
    await dispatch('calculateTotalAmount')
    await dispatch('initOnSearchRoom')
    await router.push({
      name: 'Reservation',
      params: { tempId: state.tempId },
      query: {
        createdTime: dayjs(state.reservationDetails.createTime).format('YYYY-MM-DD'),
        currentStep: 's3',
        prevStep: 's2'
      }
    })
    commit('GO_NEXT_STEP')
  },

  // Manipulation of customer details
  async addCustomerDetails ({ commit }, information) {
    commit('ADD_CUSTOMER_DETAIL', information)
  },
  async saveCustomerInfoToReservation ({ commit }) {
    commit('SAVE_CUSTOMER_INFO_TO_RESERVATION')
  },
  async forwardToConfirmation ({ state, commit, dispatch }, information) {
    await dispatch('addCustomerDetails', information)
    await dispatch('saveCustomerInfoToReservation')
    await router.push({
      name: 'Reservation',
      params: { tempId: state.tempId },
      query: {
        createdTime: dayjs(state.reservationDetails.createTime).format('YYYY-MM-DD'),
        currentStep: 's4',
        prevStep: 's3'
      }
    })
    // await router.go(0)
    commit('GO_NEXT_STEP')
  },

  //
  async setConfirmationNum ({ commit }) {
    commit('SET_CONFIRMATION_NUM')
  },
  async submitReservation ({ commit, dispatch, state }) {
    await dispatch('setConfirmationNum')
    await apiService.postData('/reservationList', state.reservationDetails)
    await router.push({
      name: 'Completion',
      params: { tempId: state.tempId }
    })
    commit('SUBMIT_RESERVATION')
  },
  async resetReservedInfo ({ commit }) {
    commit('RESET_RESERVED_INFO')
  },
  async discardChanges ({ commit, dispatch }) {
    await dispatch('initOnSearchRoom')
    await router.go(-1)
    commit('DISCARD_CHANGES')
  }
}

export default {
  state,
  mutations,
  getters,
  actions
}
