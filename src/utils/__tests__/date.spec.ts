import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { getActivityDate, diffDaysFromToday, isWithinMonthRange } from '../date'
import type { Activity } from '../date'

// Fix "today" to 2024-01-15 00:00:00 UTC for deterministic tests
const TODAY = new Date('2024-01-15T00:00:00.000Z')

const toSeconds = (date: Date) => Math.floor(date.getTime() / 1000)

function makeStay (dateStr: string): Activity {
  return {
    type: 'Stay',
    roomSelections: [{ date: { start: { seconds: toSeconds(new Date(dateStr)) } } }]
  }
}

function makeWedding (dateStr: string): Activity {
  return {
    type: 'Wedding Inquiry',
    weddingDate: { seconds: toSeconds(new Date(dateStr)) }
  }
}

function makeEvent (dateStr: string): Activity {
  return {
    type: 'Event/Meeting Inquiry',
    scheduledDates: { start: { seconds: toSeconds(new Date(dateStr)) } }
  }
}

describe('getActivityDate', () => {
  it('returns the check-in date for Stay activities', () => {
    const activity = makeStay('2024-03-20T00:00:00.000Z')
    const result = getActivityDate(activity)
    expect(result.format('YYYY-MM-DD')).toBe('2024-03-20')
  })

  it('returns the wedding date for Wedding Inquiry activities', () => {
    const activity = makeWedding('2024-06-01T00:00:00.000Z')
    const result = getActivityDate(activity)
    expect(result.format('YYYY-MM-DD')).toBe('2024-06-01')
  })

  it('returns the scheduled date for Event/Meeting Inquiry activities', () => {
    const activity = makeEvent('2024-09-10T00:00:00.000Z')
    const result = getActivityDate(activity)
    expect(result.format('YYYY-MM-DD')).toBe('2024-09-10')
  })
})

describe('diffDaysFromToday', () => {
  beforeEach(() => {
    vi.useFakeTimers()
    vi.setSystemTime(TODAY)
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('returns positive value when activity date is in the past', () => {
    const activity = makeStay('2024-01-10T00:00:00.000Z') // 5 days ago
    expect(diffDaysFromToday(activity)).toBe(5)
  })

  it('returns 0 when activity date is today', () => {
    const activity = makeStay('2024-01-15T00:00:00.000Z')
    expect(diffDaysFromToday(activity)).toBe(0)
  })

  it('returns negative value when activity date is in the future', () => {
    const activity = makeStay('2024-01-20T00:00:00.000Z') // 5 days ahead
    expect(diffDaysFromToday(activity)).toBe(-5)
  })

  it('works for Wedding Inquiry type', () => {
    const activity = makeWedding('2024-01-12T00:00:00.000Z') // 3 days ago
    expect(diffDaysFromToday(activity)).toBe(3)
  })

  it('works for Event/Meeting Inquiry type', () => {
    const activity = makeEvent('2024-01-18T00:00:00.000Z') // 3 days ahead
    expect(diffDaysFromToday(activity)).toBe(-3)
  })
})

describe('isWithinMonthRange', () => {
  beforeEach(() => {
    vi.useFakeTimers()
    vi.setSystemTime(TODAY) // 2024-01-15
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('returns true when activity date is within the range (past)', () => {
    const activity = makeStay('2023-12-15T00:00:00.000Z') // 1 month ago
    expect(isWithinMonthRange(activity, 2)).toBe(true)
  })

  it('returns true when activity date is within the range (future)', () => {
    const activity = makeStay('2024-02-15T00:00:00.000Z') // 1 month ahead
    expect(isWithinMonthRange(activity, 2)).toBe(true)
  })

  it('returns false when activity date is beyond the range (past)', () => {
    const activity = makeStay('2023-10-01T00:00:00.000Z') // ~3.5 months ago
    expect(isWithinMonthRange(activity, 2)).toBe(false)
  })

  it('returns false when activity date is beyond the range (future)', () => {
    const activity = makeStay('2024-05-01T00:00:00.000Z') // ~3.5 months ahead
    expect(isWithinMonthRange(activity, 2)).toBe(false)
  })

  it('returns true when activity is exactly on today', () => {
    const activity = makeStay('2024-01-15T00:00:00.000Z')
    expect(isWithinMonthRange(activity, 1)).toBe(true)
  })
})
