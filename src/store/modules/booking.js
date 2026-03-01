import router from '@/router'
import dayjs from 'dayjs'
import shortid from 'shortid'
import firebaseApi from '@/common/firebaseApi'
import * as MUTATION_TYPES from '../mutation-types'
import * as ACTION_TYPES from '../action-types'

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
      const today = dayjs()
      // Sorting rule for comparing two data
      // Return the date which is latest
      const dateA = itemA.type === 'Stay'
        ? today.diff(dayjs.unix(itemA.roomSelections[0].date.start.seconds), 'day') : (itemA.type === 'Wedding Inquiry')
          ? today.diff(dayjs.unix(itemA.weddingDate.seconds), 'day') : today.diff(dayjs.unix(itemA.scheduledDates.start.seconds), 'day')
      const dateB = itemB.type === 'Stay'
        ? today.diff(dayjs.unix(itemB.roomSelections[0].date.start.seconds), 'day') : (itemB.type === 'Wedding Inquiry')
          ? today.diff(dayjs.unix(itemB.weddingDate.seconds), 'day') : today.diff(dayjs.unix(itemB.scheduledDates.start.seconds), 'day')
      let comparison = 0
      if (dateA > dateB) {
        comparison = 1
      } else if (dateA < dateB) {
        comparison = -1
      } else {
        comparison = -1
      }
      return comparison
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
    const today = dayjs()
    const _temp = []
    const checkActivityStatus = function (activity) {
      if (status === 'All') {
        return true
      } else if (status === 'Upcoming') {
        return activity.status === status
      } else if (status === 'Canceled') {
        return activity.status === 'Canceled'
      } else if (status === 'Other') {
        return activity.type === 'Event/Meeting Inquiry' || activity.type === 'Wedding Inquiry'
      }
    }
    const checkMonthRange = function (activity) {
      if (activity.type === 'Stay') {
        if (range === 'three') return today.diff(dayjs.unix(activity.roomSelections[0].date.start.seconds), 'month') <= 3 && today.diff(dayjs.unix(activity.roomSelections[0].date.start.seconds), 'month') >= -3
        else if (range === 'six') return today.diff(dayjs.unix(activity.roomSelections[0].date.start.seconds), 'month') <= 6 && today.diff(dayjs.unix(activity.roomSelections[0].date.start.seconds), 'month') >= -6
        else if (range === 'nine') return today.diff(dayjs.unix(activity.roomSelections[0].date.start.seconds), 'month') <= 9 && today.diff(dayjs.unix(activity.roomSelections[0].date.start.seconds), 'month') >= -9
        else if (range === 'twelve') return today.diff(dayjs.unix(activity.roomSelections[0].date.start.seconds), 'month') <= 12 && today.diff(dayjs.unix(activity.roomSelections[0].date.start.seconds), 'month') >= -12
        else return false
      } else if (activity.type === 'Event/Meeting Inquiry') {
        if (range === 'three') return today.diff(dayjs.unix(activity.scheduledDates.start.seconds), 'month') <= 3 && today.diff(dayjs.unix(activity.scheduledDates.start.seconds), 'month') >= -3
        else if (range === 'six') return today.diff(dayjs.unix(activity.scheduledDates.start.seconds), 'month') <= 6 && today.diff(dayjs.unix(activity.scheduledDates.start.seconds), 'month') >= -6
        else if (range === 'nine') return today.diff(dayjs.unix(activity.scheduledDates.start.seconds), 'month') <= 9 && today.diff(dayjs.unix(activity.scheduledDates.start.seconds), 'month') >= -9
        else if (range === 'twelve') return today.diff(dayjs.unix(activity.scheduledDates.start.seconds), 'month') <= 12 && today.diff(dayjs.unix(activity.scheduledDates.start.seconds), 'month') >= -12
        else return false
      } else if (activity.type === 'Wedding Inquiry') {
        if (range === 'three') return today.diff(dayjs.unix(activity.weddingDate.seconds), 'month') <= 3 && today.diff(dayjs.unix(activity.weddingDate.seconds), 'month') >= -3
        else if (range === 'six') return today.diff(dayjs.unix(activity.weddingDate.seconds), 'month') <= 6 && today.diff(dayjs.unix(activity.weddingDate.seconds), 'month') >= -6
        else if (range === 'nine') return today.diff(dayjs.unix(activity.weddingDate.seconds), 'month') <= 9 && today.diff(dayjs.unix(activity.weddingDate.seconds), 'month') >= -9
        else if (range === 'twelve') return today.diff(dayjs.unix(activity.weddingDate.seconds), 'month') <= 12 && today.diff(dayjs.unix(activity.weddingDate.seconds), 'month') >= -12
        else return false
      }
    }
    state.result.forEach(element => {
      if (checkActivityStatus(element) && checkMonthRange(element)) {
        _temp.push(element)
      }
    })
    state.filteredResult = _temp
    state.isFilterSet = true
  },
  [MUTATION_TYPES.RESET_FILTER_CHOICE] (state) {
    const _temp = []
    const today = dayjs()
    state.result.forEach(element => {
      if (element.type === 'Stay') {
        if (today.diff(dayjs.unix(element.roomSelections[0].date.start.seconds), 'month') <= 6 && today.diff(dayjs.unix(element.roomSelections[0].date.start.seconds), 'month') >= -6) {
          _temp.push(element)
        }
      } else if (element.type === 'Event/Meeting Inquiry') {
        if (today.diff(dayjs.unix(element.scheduledDates.start.seconds), 'month') <= 6 && today.diff(dayjs.unix(element.scheduledDates.start.seconds), 'month') >= -6) {
          _temp.push(element)
        }
      } else if (element.type === 'Wedding Inquiry') {
        if (today.diff(dayjs.unix(element.weddingDate.seconds), 'month') <= 6 && today.diff(dayjs.unix(element.weddingDate.seconds), 'month') >= -6) {
          _temp.push(element)
        }
      }
    })
    state.filteredResult = _temp
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
    const id = shortid.generate()
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
