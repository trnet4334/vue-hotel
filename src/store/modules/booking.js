import router from '@/router'
import dayjs from 'dayjs'
import { nanoid } from 'nanoid'
import firebaseApi from '@/common/firebaseApi'
import * as MUTATION_TYPES from '../mutation-types'
import * as ACTION_TYPES from '../action-types'
import { diffDaysFromToday, isWithinMonthRange } from '@/utils/date'

const state = {
  result: [],
  filteredResult: [],
  tempSearchInput: {
    email: '',
    lastName: ''
  },
  isFilterSet: false,
  onChangeStatus: {
    status: '',
    lastUpdateTime: ''
  },
  isAuth: false
}
const getters = {
  // Return default search result after sorted date
  sortedResult: state => {
    const sortResult = function (itemA, itemB) {
      const dateA = diffDaysFromToday(itemA)
      const dateB = diffDaysFromToday(itemB)
      return dateA > dateB ? 1 : -1
    }
    if (state.filteredResult.length === 0 && !state.isFilterSet) {
      return state.result.sort(sortResult)
    } else {
      return state.filteredResult.sort(sortResult)
    }
  }
}
const mutations = {
  [MUTATION_TYPES.GET_BOOKING_RESULT] (state, data) {
    state.result = data
    state.isAuth = true
  },
  [MUTATION_TYPES.CANCEL_CHECKING_REQUEST] (state) {
    state.result = []
    state.isAuth = false
  },
  [MUTATION_TYPES.SUBMIT_CHECKING_REQUEST] (state, { email, lastName }) {
    state.tempSearchInput.lastName = lastName
    state.tempSearchInput.email = email
  },
  [MUTATION_TYPES.CANCEL_BOOKING] (state) {
    state.onChangeStatus.status = 'Canceled'
    state.onChangeStatus.lastUpdateTime = dayjs().toISOString()
  },
  [MUTATION_TYPES.SUBMIT_BOOKING_REQUEST] (state) {
    state.result = []
    state.onChangeStatus = {
      status: '',
      lastUpdateTime: ''
    }
    state.tempSearchInput.email = ''
    state.tempSearchInput.lastName = ''
    state.isAuth = false
  },
  [MUTATION_TYPES.SUBMIT_FILTER_CHOICE] (state, { status, range }) {
    const RANGE_MONTHS = { three: 3, six: 6, nine: 9, twelve: 12 }
    const months = RANGE_MONTHS[range]

    const matchesStatus = (activity) => {
      if (status === 'All') return true
      if (status === 'Upcoming') return activity.status === 'Upcoming'
      if (status === 'Canceled') return activity.status === 'Canceled'
      if (status === 'Other') return activity.type === 'Event/Meeting Inquiry' || activity.type === 'Wedding Inquiry'
      return false
    }

    const matchesRange = (activity) => {
      if (!months) return false
      return isWithinMonthRange(activity, months)
    }

    state.filteredResult = state.result.filter(el => matchesStatus(el) && matchesRange(el))
    state.isFilterSet = true
  },
  [MUTATION_TYPES.RESET_FILTER_CHOICE] (state) {
    state.filteredResult = state.result.filter(el => isWithinMonthRange(el, 6))
  },
  [MUTATION_TYPES.LEAVE_SEARCH_RESULT] (state) {
    state.result = []
    state.filteredResult = []
    state.tempSearchInput = {
      email: '',
      lastName: ''
    }
    state.isFilterSet = false
    state.onChangeStatus = {
      status: '',
      lastUpdateTime: ''
    }
    state.isAuth = false
  }
}
const actions = {
  async [ACTION_TYPES.GET_BOOKING_RESULT] ({ commit, dispatch }, selection) {
    const _temp = []
    const [stayRes, eventsRes, weddingRes] = await Promise.all([
      firebaseApi.getReservedData('reservationList', selection),
      firebaseApi.getReservedData('eventsRequestList', selection),
      firebaseApi.getReservedData('weddingRequestList', selection)
    ])
    if (stayRes.length !== 0) {
      await stayRes.forEach(item => { _temp.push(item) })
    }
    if (eventsRes.length !== 0) {
      await eventsRes.forEach(item => { _temp.push(item) })
    }
    if (weddingRes.length !== 0) {
      await weddingRes.forEach(item => { _temp.push(item) })
    }
    if (_temp.length === 0) {
      dispatch(ACTION_TYPES.CANCEL_CHECKING_REQUEST)
      alert('There is no booking data! Please make sure your email address and last name are correct.')
    } else {
      commit(MUTATION_TYPES.GET_BOOKING_RESULT, _temp)
    }
  },
  async [ACTION_TYPES.CANCEL_CHECKING_REQUEST] ({ commit }) {
    commit(MUTATION_TYPES.CANCEL_CHECKING_REQUEST)
  },
  async [ACTION_TYPES.SUBMIT_CHECKING_REQUEST] ({ commit, dispatch, state }, selection) {
    const id = nanoid()
    await dispatch(ACTION_TYPES.GET_BOOKING_RESULT, selection)
    if (state.isAuth === true) {
      await router.push({
        name: 'Activity',
        params: { tempId: id },
        query: {
          lastName: selection.lastName
        }
      })
      commit(MUTATION_TYPES.SUBMIT_CHECKING_REQUEST, selection)
    } else {
      return -1
    }
  },
  async [ACTION_TYPES.CANCEL_BOOKING] ({ commit, state, dispatch }, selection) {
    if (selection.type === 'Stay') {
      await commit(MUTATION_TYPES.CANCEL_BOOKING)
      await firebaseApi.updateData('reservationList', { id: selection.id, ...state.onChangeStatus })
    } else if (selection.type === 'Event/Meeting Inquiry') {
      commit(MUTATION_TYPES.CANCEL_BOOKING)
      await firebaseApi.updateData('eventsRequestList', { id: selection.id, ...state.onChangeStatus })
    } else if (selection.type === 'Wedding Inquiry') {
      commit(MUTATION_TYPES.CANCEL_BOOKING)
      await firebaseApi.updateData('weddingRequestList', { id: selection.id, ...state.onChangeStatus })
    }
    await dispatch(ACTION_TYPES.GET_BOOKING_RESULT, state.tempSearchInput)
  },
  async [ACTION_TYPES.SUBMIT_BOOKING_REQUEST] ({ commit }) {
    commit(MUTATION_TYPES.SUBMIT_BOOKING_REQUEST)
  },
  async [ACTION_TYPES.SUBMIT_FILTER_CHOICE] ({ commit }, selection) {
    commit(MUTATION_TYPES.SUBMIT_FILTER_CHOICE, selection)
  },
  async [ACTION_TYPES.RESET_FILTER_CHOICE] ({ commit }) {
    commit(MUTATION_TYPES.RESET_FILTER_CHOICE)
  },
  async [ACTION_TYPES.LEAVE_SEARCH_RESULT] ({ commit }) {
    commit(MUTATION_TYPES.LEAVE_SEARCH_RESULT)
  }
}

export default {
  state,
  mutations,
  getters,
  actions
}
