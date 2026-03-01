import dayjs from 'dayjs'

/**
 * Return the primary date of an activity as a dayjs object.
 *
 * Activity types:
 *   'Stay'                  → roomSelections[0].date.start (Firestore Timestamp)
 *   'Wedding Inquiry'       → weddingDate (Firestore Timestamp)
 *   'Event/Meeting Inquiry' → scheduledDates.start (Firestore Timestamp)
 *
 * @param {Object} activity
 * @returns {dayjs.Dayjs}
 */
export function getActivityDate (activity) {
  if (activity.type === 'Stay') {
    return dayjs.unix(activity.roomSelections[0].date.start.seconds)
  } else if (activity.type === 'Wedding Inquiry') {
    return dayjs.unix(activity.weddingDate.seconds)
  } else {
    return dayjs.unix(activity.scheduledDates.start.seconds)
  }
}

/**
 * Difference in days between today and the activity's primary date.
 * Positive = date is in the past; negative = date is in the future.
 *
 * @param {Object} activity
 * @returns {number}
 */
export function diffDaysFromToday (activity) {
  return dayjs().diff(getActivityDate(activity), 'day')
}

/**
 * Return true if the activity's primary date falls within ±months of today.
 *
 * @param {Object} activity
 * @param {number} months
 * @returns {boolean}
 */
export function isWithinMonthRange (activity, months) {
  const diff = dayjs().diff(getActivityDate(activity), 'month')
  return diff <= months && diff >= -months
}
