import dayjs from 'dayjs'

/** Firestore Timestamp shape (seconds since epoch) */
interface FirestoreTimestamp {
  seconds: number
}

interface DateRange {
  start: FirestoreTimestamp
}

interface RoomSelection {
  date: DateRange
}

export type ActivityType = 'Stay' | 'Wedding Inquiry' | 'Event/Meeting Inquiry'

export interface Activity {
  type: ActivityType
  roomSelections?: RoomSelection[]
  weddingDate?: FirestoreTimestamp
  scheduledDates?: DateRange
}

/**
 * Return the primary date of an activity as a dayjs object.
 *
 * Activity types:
 *   'Stay'                  → roomSelections[0].date.start (Firestore Timestamp)
 *   'Wedding Inquiry'       → weddingDate (Firestore Timestamp)
 *   'Event/Meeting Inquiry' → scheduledDates.start (Firestore Timestamp)
 */
export function getActivityDate (activity: Activity): dayjs.Dayjs {
  if (activity.type === 'Stay') {
    return dayjs.unix(activity.roomSelections![0].date.start.seconds)
  } else if (activity.type === 'Wedding Inquiry') {
    return dayjs.unix(activity.weddingDate!.seconds)
  } else {
    return dayjs.unix(activity.scheduledDates!.start.seconds)
  }
}

/**
 * Difference in days between today and the activity's primary date.
 * Positive = date is in the past; negative = date is in the future.
 */
export function diffDaysFromToday (activity: Activity): number {
  return dayjs().diff(getActivityDate(activity), 'day')
}

/**
 * Return true if the activity's primary date falls within ±months of today.
 */
export function isWithinMonthRange (activity: Activity, months: number): boolean {
  const diff = dayjs().diff(getActivityDate(activity), 'month')
  return diff <= months && diff >= -months
}
