import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import * as MUTATION_TYPES from '../../mutation-types'
import type { Activity } from '@/utils/date'

// Mock router and firebaseApi so element-plus / @popperjs/core are never loaded
vi.mock('@/router', () => ({ default: { push: vi.fn() } }))
vi.mock('@/common/firebaseApi', () => ({ default: {} }))

// ---- Helpers ----
const toSeconds = (date: Date) => Math.floor(date.getTime() / 1000)

function makeStay (dateStr: string, status = 'Upcoming'): Activity & { status: string; id: string } {
  return {
    type: 'Stay',
    status,
    id: 'stay-1',
    roomSelections: [{ date: { start: { seconds: toSeconds(new Date(dateStr)) } } }]
  } as any
}

function makeEvent (dateStr: string, status = 'Upcoming'): Activity & { status: string } {
  return {
    type: 'Event/Meeting Inquiry',
    status,
    id: 'event-1',
    scheduledDates: { start: { seconds: toSeconds(new Date(dateStr)) } }
  } as any
}

function makeWedding (dateStr: string, status = 'Upcoming'): Activity & { status: string } {
  return {
    type: 'Wedding Inquiry',
    status,
    id: 'wedding-1',
    weddingDate: { seconds: toSeconds(new Date(dateStr)) }
  } as any
}

// ---- Extract mutations directly from the module ----
// We import the raw module object to test mutations in isolation (no Vuex store needed)
async function getBookingModule () {
  const mod = await import('../booking.js')
  return mod.default
}

function freshState () {
  return {
    result: [] as any[],
    filteredResult: [] as any[],
    tempSearchInput: { email: '', lastName: '' },
    isFilterSet: false,
    onChangeStatus: { status: '', lastUpdateTime: '' },
    isAuth: false
  }
}

describe('booking mutations', () => {
  let mutations: Record<string, (...args: any[]) => void>

  beforeEach(async () => {
    const mod = await getBookingModule()
    mutations = mod.mutations
  })

  describe('GET_BOOKING_RESULT', () => {
    it('sets result and marks isAuth true', () => {
      const state = freshState()
      const data = [makeStay('2024-03-01')]
      mutations[MUTATION_TYPES.GET_BOOKING_RESULT](state, data)
      expect(state.result).toEqual(data)
      expect(state.isAuth).toBe(true)
    })
  })

  describe('CANCEL_CHECKING_REQUEST', () => {
    it('clears result and sets isAuth false', () => {
      const state = freshState()
      state.result = [makeStay('2024-03-01')]
      state.isAuth = true
      mutations[MUTATION_TYPES.CANCEL_CHECKING_REQUEST](state)
      expect(state.result).toEqual([])
      expect(state.isAuth).toBe(false)
    })
  })

  describe('SUBMIT_CHECKING_REQUEST', () => {
    it('saves email and lastName to tempSearchInput', () => {
      const state = freshState()
      mutations[MUTATION_TYPES.SUBMIT_CHECKING_REQUEST](state, { email: 'test@example.com', lastName: 'Smith' })
      expect(state.tempSearchInput.email).toBe('test@example.com')
      expect(state.tempSearchInput.lastName).toBe('Smith')
    })
  })

  describe('CANCEL_BOOKING', () => {
    it('sets onChangeStatus.status to Canceled', () => {
      const state = freshState()
      mutations[MUTATION_TYPES.CANCEL_BOOKING](state)
      expect(state.onChangeStatus.status).toBe('Canceled')
    })

    it('sets a non-empty lastUpdateTime ISO string', () => {
      const state = freshState()
      mutations[MUTATION_TYPES.CANCEL_BOOKING](state)
      expect(state.onChangeStatus.lastUpdateTime).toBeTruthy()
      expect(() => new Date(state.onChangeStatus.lastUpdateTime)).not.toThrow()
    })
  })

  describe('SUBMIT_BOOKING_REQUEST', () => {
    it('resets result, tempSearchInput, onChangeStatus, and isAuth', () => {
      const state = freshState()
      state.result = [makeStay('2024-03-01')]
      state.isAuth = true
      state.tempSearchInput = { email: 'x@y.com', lastName: 'Doe' }
      state.onChangeStatus = { status: 'Canceled', lastUpdateTime: '2024-01-01' }

      mutations[MUTATION_TYPES.SUBMIT_BOOKING_REQUEST](state)

      expect(state.result).toEqual([])
      expect(state.isAuth).toBe(false)
      expect(state.tempSearchInput.email).toBe('')
      expect(state.tempSearchInput.lastName).toBe('')
      expect(state.onChangeStatus).toEqual({ status: '', lastUpdateTime: '' })
    })
  })

  describe('LEAVE_SEARCH_RESULT', () => {
    it('resets all state fields to initial values', () => {
      const state = freshState()
      state.result = [makeStay('2024-03-01')]
      state.filteredResult = [makeStay('2024-03-01')]
      state.isAuth = true
      state.isFilterSet = true
      state.tempSearchInput = { email: 'x@y.com', lastName: 'Doe' }
      state.onChangeStatus = { status: 'Canceled', lastUpdateTime: '2024-01-01' }

      mutations[MUTATION_TYPES.LEAVE_SEARCH_RESULT](state)

      expect(state.result).toEqual([])
      expect(state.filteredResult).toEqual([])
      expect(state.isAuth).toBe(false)
      expect(state.isFilterSet).toBe(false)
      expect(state.tempSearchInput).toEqual({ email: '', lastName: '' })
      expect(state.onChangeStatus).toEqual({ status: '', lastUpdateTime: '' })
    })
  })

  describe('SUBMIT_FILTER_CHOICE', () => {
    const TODAY = new Date('2024-01-15T00:00:00.000Z')

    beforeEach(() => {
      vi.useFakeTimers()
      vi.setSystemTime(TODAY)
    })

    afterEach(() => {
      vi.useRealTimers()
    })

    it('filters by Upcoming status and three-month range', () => {
      const state = freshState()
      // 1 month ago = within 3 months
      const upcoming = makeStay('2023-12-15T00:00:00.000Z', 'Upcoming')
      // 5 months ago = outside 3 months
      const oldUpcoming = makeStay('2023-08-01T00:00:00.000Z', 'Upcoming')
      const canceled = makeStay('2023-12-15T00:00:00.000Z', 'Canceled')
      state.result = [upcoming, oldUpcoming, canceled]

      mutations[MUTATION_TYPES.SUBMIT_FILTER_CHOICE](state, { status: 'Upcoming', range: 'three' })

      expect(state.filteredResult).toEqual([upcoming])
      expect(state.isFilterSet).toBe(true)
    })

    it('filters by Canceled status', () => {
      const state = freshState()
      const upcoming = makeStay('2023-12-15T00:00:00.000Z', 'Upcoming')
      const canceled = makeStay('2023-12-15T00:00:00.000Z', 'Canceled')
      state.result = [upcoming, canceled]

      mutations[MUTATION_TYPES.SUBMIT_FILTER_CHOICE](state, { status: 'Canceled', range: 'six' })

      expect(state.filteredResult).toEqual([canceled])
    })

    it('filters by Other status (events and weddings)', () => {
      const state = freshState()
      const stay = makeStay('2023-12-15T00:00:00.000Z', 'Upcoming')
      const event = makeEvent('2023-12-15T00:00:00.000Z', 'Upcoming')
      const wedding = makeWedding('2023-12-15T00:00:00.000Z', 'Upcoming')
      state.result = [stay, event, wedding]

      mutations[MUTATION_TYPES.SUBMIT_FILTER_CHOICE](state, { status: 'Other', range: 'three' })

      expect(state.filteredResult).toContainEqual(event)
      expect(state.filteredResult).toContainEqual(wedding)
      expect(state.filteredResult).not.toContainEqual(stay)
    })

    it('filters All statuses within range', () => {
      const state = freshState()
      const recent = makeStay('2023-12-15T00:00:00.000Z', 'Upcoming')
      const old = makeStay('2022-01-01T00:00:00.000Z', 'Upcoming')
      state.result = [recent, old]

      mutations[MUTATION_TYPES.SUBMIT_FILTER_CHOICE](state, { status: 'All', range: 'twelve' })

      // 'recent' is 1 month ago — within 12 months. 'old' is 2+ years ago — outside 12 months.
      expect(state.filteredResult).toContainEqual(recent)
      expect(state.filteredResult).not.toContainEqual(old)
    })

    it('returns empty array when range is invalid', () => {
      const state = freshState()
      state.result = [makeStay('2023-12-15T00:00:00.000Z')]
      mutations[MUTATION_TYPES.SUBMIT_FILTER_CHOICE](state, { status: 'All', range: 'invalid' })
      expect(state.filteredResult).toEqual([])
    })
  })

  describe('RESET_FILTER_CHOICE', () => {
    const TODAY = new Date('2024-01-15T00:00:00.000Z')

    beforeEach(() => {
      vi.useFakeTimers()
      vi.setSystemTime(TODAY)
    })

    afterEach(() => {
      vi.useRealTimers()
    })

    it('resets filteredResult to items within 6 months of today', () => {
      const state = freshState()
      const recentStay = makeStay('2023-12-15T00:00:00.000Z') // 1 month ago ✓
      const oldStay = makeStay('2022-01-01T00:00:00.000Z')    // 2+ years ago ✗
      state.result = [recentStay, oldStay]

      mutations[MUTATION_TYPES.RESET_FILTER_CHOICE](state)

      expect(state.filteredResult).toContainEqual(recentStay)
      expect(state.filteredResult).not.toContainEqual(oldStay)
    })
  })
})

describe('booking getter: sortedResult', () => {
  let getters: Record<string, any>

  beforeEach(async () => {
    const mod = await getBookingModule()
    getters = mod.getters
  })

  it('returns state.result sorted by date when no filter is set', () => {
    const newer = makeStay('2024-01-14T00:00:00.000Z') // 1 day diff from today
    const older = makeStay('2023-06-01T00:00:00.000Z') // many months ago
    const state = {
      ...freshState(),
      result: [newer, older],
      isFilterSet: false,
      filteredResult: []
    }

    const sorted = getters.sortedResult(state)
    // older diff is larger (more days in the past) → comes after newer? No —
    // sort is ascending: smallest diff first, so newer (diff ≈1) comes before older (diff ≈228)
    // Actually wait: newer is closer → diff is smaller → sorted first
    expect(sorted[0]).toEqual(newer)
    expect(sorted[1]).toEqual(older)
  })

  it('returns filteredResult when isFilterSet is true and filteredResult is non-empty', () => {
    const stay = makeStay('2024-01-14T00:00:00.000Z')
    const state = {
      ...freshState(),
      result: [makeStay('2023-01-01T00:00:00.000Z'), stay],
      isFilterSet: true,
      filteredResult: [stay]
    }

    const sorted = getters.sortedResult(state)
    expect(sorted).toHaveLength(1)
    expect(sorted[0]).toEqual(stay)
  })

  it('returns state.result when filteredResult is empty but isFilterSet is false', () => {
    const stay = makeStay('2024-01-14T00:00:00.000Z')
    const state = {
      ...freshState(),
      result: [stay],
      isFilterSet: false,
      filteredResult: []
    }

    expect(getters.sortedResult(state)).toHaveLength(1)
  })
})
