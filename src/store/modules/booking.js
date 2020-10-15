import apiService from '@/common/api'
import router from '@/router'
import dayjs from 'dayjs'
import axios from 'axios'
import shortid from 'shortid'

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
      const dateA = itemA.type === 'Stay'
        ? today.diff(itemA.roomSelections[0].date.start, 'day') : (itemA.type === 'Wedding Inquiry')
          ? today.diff(itemA.weddingDate, 'day') : today.diff(itemA.scheduledDates.start, 'day')
      const dateB = itemB.type === 'Stay'
        ? today.diff(itemB.roomSelections[0].date.start, 'day') : (itemB.type === 'Wedding Inquiry')
          ? today.diff(itemB.weddingDate, 'day') : today.diff(itemB.scheduledDates.start, 'day')
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
  // Fetch all booking data from api
  'GET_BOOKING_RESULT' (state, data) {
    state.result = data
    state.isAuth = true
  },
  // Submit search request
  'SUBMIT_CHECKING_REQUEST' (state, { email, lastName }) {
    state.tempSearchInput.lastName = lastName
    state.tempSearchInput.email = email
  },
  'CANCEL_BOOKING' (state) {
    state.onChangeStatus.status = 'Canceled'
    state.onChangeStatus.lastUpdateTime = dayjs().toISOString()
  },
  // Request for re-booking trip and leave the page
  'SUBMIT_BOOKING_REQUEST' (state) {
    state.result = []
    state.onChangeStatus = {
      status: '',
      lastUpdateTime: ''
    }
    state.tempSearchInput.email = ''
    state.tempSearchInput.lastName = ''
    state.isAuth = false
  },
  // Filter booking result from user choice
  'SUBMIT_FILTER_CHOICE' (state, { status, range }) {
    const today = dayjs()
    const _temp = []
    // Check whether activity status fit input
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
    // Check whether activity data fit input range
    const checkMonthRange = function (activity) {
      if (activity.type === 'Stay') {
        if (range === 'three') return today.diff(activity.roomSelections[0].date.start, 'month') <= 3 && today.diff(activity.roomSelections[0].date.start, 'month') >= -3
        else if (range === 'six') return today.diff(activity.roomSelections[0].date.start, 'month') <= 6 && today.diff(activity.roomSelections[0].date.start, 'month') >= -6
        else if (range === 'nine') return today.diff(activity.roomSelections[0].date.start, 'month') <= 9 && today.diff(activity.roomSelections[0].date.start, 'month') >= -9
        else if (range === 'twelve') return today.diff(activity.roomSelections[0].date.start, 'month') <= 12 && today.diff(activity.roomSelections[0].date.start, 'month') >= -12
        else return false
      } else if (activity.type === 'Event/Meeting Inquiry') {
        if (range === 'three') return today.diff(activity.scheduledDates.start, 'month') <= 3 && today.diff(activity.scheduledDates.start, 'month') >= -3
        else if (range === 'six') return today.diff(activity.scheduledDates.start, 'month') <= 6 && today.diff(activity.scheduledDates.start, 'month') >= -6
        else if (range === 'nine') return today.diff(activity.scheduledDates.start, 'month') <= 9 && today.diff(activity.scheduledDates.start, 'month') >= -9
        else if (range === 'twelve') return today.diff(activity.scheduledDates.start, 'month') <= 12 && today.diff(activity.scheduledDates.start, 'month') >= -12
        else return false
      } else if (activity.type === 'Wedding Inquiry') {
        if (range === 'three') return today.diff(activity.weddingDate, 'month') <= 3 && today.diff(activity.weddingDate, 'month') >= -3
        else if (range === 'six') return today.diff(activity.weddingDate, 'month') <= 6 && today.diff(activity.weddingDate, 'month') >= -6
        else if (range === 'nine') return today.diff(activity.weddingDate, 'month') <= 9 && today.diff(activity.weddingDate, 'month') >= -9
        else if (range === 'twelve') return today.diff(activity.weddingDate, 'month') <= 12 && today.diff(activity.weddingDate, 'month') >= -12
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
  // Reset all filter setting
  'RESET_FILTER_CHOICE' (state) {
    const _temp = []
    const today = dayjs()
    state.result.forEach(element => {
      if (element.type === 'Stay') {
        if (today.diff(element.roomSelections[0].date.start, 'month') <= 6 && today.diff(element.roomSelections[0].date.start, 'month') >= -6) {
          _temp.push(element)
        }
      } else if (element.type === 'Event/Meeting Inquiry') {
        if (today.diff(element.scheduledDates.start, 'month') <= 6 && today.diff(element.scheduledDates.start, 'month') >= -6) {
          _temp.push(element)
        }
      } else if (element.type === 'Wedding Inquiry') {
        if (today.diff(element.weddingDate, 'month') <= 6 && today.diff(element.weddingDate, 'month') >= -6) {
          _temp.push(element)
        }
      }
    })
    state.filteredResult = _temp
  },
  // Leave search page and reset all state into default
  'LEAVE_SEARCH_RESULT' (state) {
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
  // Fetch all booking data from api
  async getBookingResult ({ commit }, selection) {
    const email = selection.email
    const lastName = selection.lastName
    const _temp = []
    await axios.all([
      apiService.getData(
        `/reservationList?customerInfo.contactDetail.lastName=${lastName}&customerInfo.contactDetail.email=${email}`
      ),
      apiService.getData(
        `/eventsRequestList?lastName=${lastName}&email=${email}`
      ),
      apiService.getData(
        `/weddingRequestList?lastName=${lastName}&email=${email}`
      )
    ]).then(
      axios.spread((reservRes, eventsRes, weddingRes) => {
        reservRes.data.forEach(item => {
          _temp.push(item)
        })
        eventsRes.data.forEach(item => {
          _temp.push(item)
        })
        weddingRes.data.forEach(item => {
          _temp.push(item)
        })
      })
    )
    if (_temp.length === 0) {
      alert('There is no booking data! Please make sure your email address and last name are correct.')
    } else {
      commit('GET_BOOKING_RESULT', _temp)
    }
  },
  // Submit search request
  async submitCheckingRequest ({ commit, dispatch, state }, selection) {
    const id = shortid.generate()
    await dispatch('getBookingResult', selection)
    if (state.isAuth === true) {
      await router.push({
        name: 'Activity',
        params: { tempId: id },
        query: {
          lastName: selection.lastName
        }
      })
      commit('SUBMIT_CHECKING_REQUEST', selection)
    }
  },
  // Change booking status from upcoming to canceled
  async cancelBooking ({ commit, state, dispatch }, selection) {
    if (selection.type === 'Stay') {
      commit('CANCEL_BOOKING')
      await apiService.updateData(`/reservationList/${selection.id}`, state.onChangeStatus)
    } else if (selection.type === 'Event/Meeting Inquiry') {
      commit('CANCEL_BOOKING')
      await apiService.updateData(`/eventsRequestList/${selection.id}`, state.onChangeStatus)
    } else if (selection.type === 'Wedding Inquiry') {
      commit('CANCEL_BOOKING')
      await apiService.updateData(`/weddingRequestList/${selection.id}`, state.onChangeStatus)
    }
    await dispatch('getBookingResult', state.tempSearchInput)
  },
  // Request for re-booking trip and leave the page
  async submitBookingRequest ({ commit }) {
    commit('SUBMIT_BOOKING_REQUEST')
  },
  // Filter booking result from user choice
  async submitFilterChoice ({ commit }, selection) {
    commit('SUBMIT_FILTER_CHOICE', selection)
  },
  // Reset filter setting to default
  async resetFilterChoice ({ commit }) {
    commit('RESET_FILTER_CHOICE')
  },
  // Leave searching page
  async leaveSearchResult ({ commit }) {
    commit('LEAVE_SEARCH_RESULT')
  }
}

export default {
  state,
  mutations,
  getters,
  actions
}
