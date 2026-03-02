import roomsIntro from '@/assets/data/checkout/roomsIntro'
import addOns from '@/assets/data/checkout/addOns'
import router from '@/router'
import dayjs from 'dayjs'
import firebaseApi from '@/common/firebaseApi'
import * as MUTATION_TYPES from '../mutation-types'
import * as ACTION_TYPES from '../action-types'

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
    email: '',
    lastName: '',
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
  [MUTATION_TYPES.SET_ROOMS] (state, roomsIntro) {
    state.roomsIntro = roomsIntro
  },
  [MUTATION_TYPES.RESET_ALL_RESERVATION] (state) {
    state.roomsIntro = roomsIntro
    state.tempId = ''
    state.currentStep = 1
    state.previousStep = 1
    state.isOnBooking = undefined
    state.isEditingRoom = false
    state.isCompleteCustomerInfo = false
    state.reservationDetails = {
      createTime: '',
      lastUpdateTime: '',
      confirmationNum: '',
      type: 'Stay',
      status: 'Upcoming',
      roomSelections: [],
      customerInfo: {},
      totalAmount: undefined
    }
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
  [MUTATION_TYPES.RESET_ONSEARCHROOM] (state) {
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
  [MUTATION_TYPES.GO_NEXT_STEP] (state) {
    if (state.currentStep > 4) {
      state.currentStep = 4
    } else {
      state.previousStep = state.currentStep
      state.currentStep += 1
    }
  },
  [MUTATION_TYPES.BACK_PREVIOUS_STEP] (state) {
    if (state.currentStep < 0) {
      state.currentStep = 0
    } else {
      state.previousStep = state.currentStep
      state.currentStep -= 1
    }
  },
  [MUTATION_TYPES.SWITCH_STEP] (state, step) {
    const checkStep = function (el) {
      if (el === 's1') return 1
      else if (el === 's2') return 2
      else if (el === 's3') return 3
      else if (el === 's4') return 4
      else if (el === 's0') return 0
    }
    state.previousStep = checkStep(step.prev)
    state.currentStep = checkStep(step.current)
  },
  [MUTATION_TYPES.GENERATE_ID] (state, id) {
    if (state.tempId === id) {
      return null
    } else {
      state.tempId = id
    }
  },
  [MUTATION_TYPES.SET_SEARCH_SELECTION] (state, { date, guests, time }) {
    if (state.reservationDetails.createTime === '') {
      state.reservationDetails.createTime = time
      state.reservationDetails.lastUpdateTime = state.reservationDetails.createTime
    }
    if (state.reservationDetails.roomSelections.length === 0) {
      state.onSearchRoom.createTime = time
    }
    state.onSearchRoom.date.start = date.start
    state.onSearchRoom.date.end = date.end
    state.onSearchRoom.totalNight = dayjs(date.end).diff(date.start, 'day')
    state.onSearchRoom.guests.numOfAdultGuests = guests.numOfAdultGuests
    state.onSearchRoom.guests.numOfChildrenGuest = guests.numOfChildrenGuest
    state.currentStep === 0 ? state.currentStep += 1 : state.currentStep = 1
    state.isEditingRoom = false
  },
  [MUTATION_TYPES.ADD_ROOM] (state, { type, packageName, rate }) {
    state.onSearchRoom.roomSelect.roomType = type
    state.onSearchRoom.roomSelect.packageName = packageName
    state.onSearchRoom.roomSelect.rate = rate
    state.currentStep += 1
  },
  [MUTATION_TYPES.ADD_ADDONS] (state, { name, price }) {
    state.onSearchRoom.addOns.push({
      addOnName: name,
      addOnPrice: price
    })
  },
  [MUTATION_TYPES.REMOVE_ADDONS] (state, name) {
    state.onSearchRoom.addOns = state.onSearchRoom.addOns.filter(
      element => element.addOnName !== name
    )
  },
  [MUTATION_TYPES.CALCULATE_TOTAL_AMOUNT] (state) {
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
  [MUTATION_TYPES.SAVE_ROOM_SELECTION_TO_RESERVATION] (state) {
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
  [MUTATION_TYPES.REMOVE_ROOM_FROM_SELECTION] (state, selection) {
    const record = state.reservationDetails.roomSelections.map(
      (element) => {
        return element.createTime
      }).indexOf(selection)
    if (state.reservationDetails.roomSelections.length > 1) {
      state.reservationDetails.roomSelections.splice(record, 1)
    } else {
      state.previousStep = state.currentStep
      state.currentStep = 0
      state.reservationDetails.roomSelections = []
    }
  },
  [MUTATION_TYPES.EDIT_ROOM_FROM_SELECTION] (state, selection) {
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
  [MUTATION_TYPES.ADD_CUSTOMER_DETAIL] (state, { contact, address, note }) {
    state.onEditCustomerInfo.contactDetail = contact
    state.onEditCustomerInfo.addressDetail = address
    state.onEditCustomerInfo.note = note
  },
  [MUTATION_TYPES.SAVE_CUSTOMER_INFO_TO_RESERVATION] (state) {
    state.reservationDetails.customerInfo = state.onEditCustomerInfo
    state.reservationDetails.email = state.onEditCustomerInfo.contactDetail.email
    state.reservationDetails.lastName = state.onEditCustomerInfo.contactDetail.lastName
  },
  [MUTATION_TYPES.ADD_ANOTHER_ROOM] (state) {
    state.currentStep = 0
    state.onSearchRoom = {
      createTime: dayjs().toISOString(),
      date: {
        start: new Date(new Date().setDate(new Date().getDate() + 2)),
        end: new Date(new Date().setDate(new Date().getDate() + 2))
      },
      guests: {
        numOfAdultGuests: 1,
        numOfChildrenGuest: 0
      },
      roomSelect: {
        roomType: '',
        packageName: '',
        rate: undefined
      },
      addOns: []
    }
  },
  [MUTATION_TYPES.SET_CONFIRMATION_NUM] (state) {
    state.reservationDetails.confirmationNum = 'ARNSS' + dayjs().format('MMDDYYSSS')
  },
  [MUTATION_TYPES.DISCARD_CHANGES] (state) {
    state.isEditingRoom = false
    state.currentStep = state.previousStep
    state.previousStep = 1
  },
  [MUTATION_TYPES.SUBMIT_RESERVATION] (state) {
    state.tempId = ''
    state.currentStep = 1
    state.previousStep = 1
    state.isOnBooking = undefined
    state.isEditingRoom = ''
    state.email = ''
    state.lastName = ''
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
  [MUTATION_TYPES.RESET_RESERVED_INFO] (state) {
    state.reservationDetails = {
      createTime: '',
      lastUpdateTime: '',
      confirmationNum: '',
      type: 'Stay',
      status: 'Upcoming',
      roomSelections: [],
      customerInfo: {},
      totalAmount: undefined
    }
  }
}
const actions = {
  [ACTION_TYPES.GO_NEXT_STEP] ({ commit }) {
    commit(MUTATION_TYPES.GO_NEXT_STEP)
  },
  [ACTION_TYPES.RESET_ALL_RESERVATION] ({ commit }) {
    commit(MUTATION_TYPES.RESET_ALL_RESERVATION)
  },
  [ACTION_TYPES.BACK_PREVIOUS_STEP] ({ commit }) {
    commit(MUTATION_TYPES.BACK_PREVIOUS_STEP)
  },
  async [ACTION_TYPES.SWITCH_STEP] ({ commit }, order) {
    commit(MUTATION_TYPES.SWITCH_STEP, order)
  },
  [ACTION_TYPES.INIT_ROOM] ({ commit }) {
    commit(MUTATION_TYPES.SET_ROOMS, roomsIntro)
  },
  [ACTION_TYPES.INIT_RESERVATION] ({ commit }) {
    commit(MUTATION_TYPES.RESET_RESERVED_INFO)
  },
  async [ACTION_TYPES.INIT_ON_SEARCH_ROOM] ({ commit }) {
    commit(MUTATION_TYPES.RESET_ONSEARCHROOM)
  },
  async [ACTION_TYPES.ADD_ANOTHER_ROOM] ({ state, commit }) {
    await commit(MUTATION_TYPES.ADD_ANOTHER_ROOM)
    await router.push({
      name: 'Reservation',
      params: { tempId: state.tempId },
      query: {
        createdTime: dayjs(state.reservationDetails.createTime).format('YYYY-MM-DD'),
        currentStep: 's0',
        prevStep: `s${state.currentStep}`
      }
    })
  },
  async [ACTION_TYPES.GENERATE_ID] ({ commit }, payload) {
    commit(MUTATION_TYPES.GENERATE_ID, payload)
  },
  async [ACTION_TYPES.SEARCH_ROOM_TYPE] ({ commit }, selection) {
    commit(MUTATION_TYPES.SET_SEARCH_SELECTION, selection)
  },
  async [ACTION_TYPES.ADD_ROOM_TO_SELECTION] ({ commit }, selection) {
    commit(MUTATION_TYPES.ADD_ROOM, selection)
  },
  async [ACTION_TYPES.REMOVE_ROOM_FROM_SELECTION] ({ state, commit }, selection) {
    if (state.reservationDetails.roomSelections.length === 1) {
      await router.push({
        name: 'Reservation',
        params: { tempId: state.tempId },
        query: {
          createdTime: dayjs(state.reservationDetails.createTime).format('YYYY-MM-DD'),
          currentStep: 's1',
          prevStep: `s${state.currentStep}`
        }
      })
      commit(MUTATION_TYPES.REMOVE_ROOM_FROM_SELECTION, selection)
    } else {
      commit(MUTATION_TYPES.REMOVE_ROOM_FROM_SELECTION, selection)
    }
  },
  async [ACTION_TYPES.EDIT_ROOM_FROM_SELECTION] ({ state, commit }, selection) {
    commit(MUTATION_TYPES.EDIT_ROOM_FROM_SELECTION, selection)
    await router.push({
      name: 'Reservation',
      params: { tempId: state.tempId },
      query: {
        createdTime: dayjs(state.reservationDetails.createTime).format('YYYY-MM-DD'),
        currentStep: 's1',
        prevStep: `s${state.previousStep}`
      }
    })
  },
  async [ACTION_TYPES.ADD_ADDONS_TO_SELECTION] ({ commit }, selection) {
    commit(MUTATION_TYPES.ADD_ADDONS, selection)
  },
  async [ACTION_TYPES.REMOVE_ADDONS_FROM_SELECTION] ({ commit }, selection) {
    commit(MUTATION_TYPES.REMOVE_ADDONS, selection)
  },
  async [ACTION_TYPES.CALCULATE_TOTAL_AMOUNT] ({ commit }) {
    commit(MUTATION_TYPES.CALCULATE_TOTAL_AMOUNT)
  },
  async [ACTION_TYPES.SAVE_ROOM_SELECTION_TO_RESERVATION] ({ commit }) {
    commit(MUTATION_TYPES.SAVE_ROOM_SELECTION_TO_RESERVATION)
  },
  async [ACTION_TYPES.FORWARD_TO_CUSTOMER_INFO] ({ state, dispatch }) {
    await dispatch(ACTION_TYPES.SAVE_ROOM_SELECTION_TO_RESERVATION)
    await dispatch(ACTION_TYPES.CALCULATE_TOTAL_AMOUNT)
    await dispatch(ACTION_TYPES.INIT_ON_SEARCH_ROOM)
    await router.push({
      name: 'Reservation',
      params: { tempId: state.tempId },
      query: {
        createdTime: dayjs(state.reservationDetails.createTime).format('YYYY-MM-DD'),
        currentStep: 's3',
        prevStep: 's2'
      }
    })
  },
  async [ACTION_TYPES.ADD_CUSTOMER_DETAILS] ({ commit }, information) {
    commit(MUTATION_TYPES.ADD_CUSTOMER_DETAIL, information)
  },
  async [ACTION_TYPES.SAVE_CUSTOMER_INFO_TO_RESERVATION] ({ commit }) {
    commit(MUTATION_TYPES.SAVE_CUSTOMER_INFO_TO_RESERVATION)
  },
  async [ACTION_TYPES.FORWARD_TO_CONFIRMATION] ({ state, dispatch }, information) {
    await dispatch(ACTION_TYPES.ADD_CUSTOMER_DETAILS, information)
    await dispatch(ACTION_TYPES.SAVE_CUSTOMER_INFO_TO_RESERVATION)
    await router.push({
      name: 'Reservation',
      params: { tempId: state.tempId },
      query: {
        createdTime: dayjs(state.reservationDetails.createTime).format('YYYY-MM-DD'),
        currentStep: 's4',
        prevStep: 's3'
      }
    })
  },
  async [ACTION_TYPES.SET_CONFIRMATION_NUM] ({ commit }) {
    commit(MUTATION_TYPES.SET_CONFIRMATION_NUM)
  },
  async [ACTION_TYPES.SUBMIT_RESERVATION] ({ commit, dispatch, state }) {
    await dispatch(ACTION_TYPES.SET_CONFIRMATION_NUM)
    await firebaseApi.postData('reservationList', state.reservationDetails)
    await router.push({
      name: 'Completion',
      params: { tempId: state.tempId }
    })
    commit(MUTATION_TYPES.SUBMIT_RESERVATION)
  },
  async [ACTION_TYPES.RESET_RESERVED_INFO] ({ commit }) {
    commit(MUTATION_TYPES.RESET_RESERVED_INFO)
  },
  async [ACTION_TYPES.DISCARD_CHANGES] ({ state, commit, dispatch }) {
    await dispatch(ACTION_TYPES.INIT_ON_SEARCH_ROOM)
    await router.push({
      name: 'Reservation',
      params: { tempId: state.tempId },
      query: {
        createdTime: dayjs(state.reservationDetails.createTime).format('YYYY-MM-DD'),
        currentStep: `s${state.previousStep}`,
        prevStep: 's1'
      }
    })
    commit(MUTATION_TYPES.DISCARD_CHANGES)
  }
}

export default {
  state,
  mutations,
  getters,
  actions
}
