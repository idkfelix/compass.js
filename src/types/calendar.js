/**
 * Request Object for GetCalendarEventsByUser endpoint
 * @typedef {object} CalendarRequest
 * @property {number} userId
 * @property {string} startDate "yyyy-mm-dd"
 * @property {string} endDate "yyyy-mm-dd"
 * @property {number} [page]
 * @property {number} [start]
 * @property {number} [limit]
 * @property {boolean} [homePage]
 * @property {number} [activityId]
 * @property {number} [locationId]
 * @property {number[]} [staffIds]
 */

/**
 * Response Object for GetCalendarEventsByUser endpoint
 * @typedef {CalendarEvent[]} CalendarRespone
 */

/**
 * Child Object of CalendarResponse
 * @typedef {object} CalendarEvent
 * @property {number} activityId
 * @property {boolean} allDay
 * @property {number} attendanceMode
 * @property {number} attendeeUserId
 * @property {string} backgroundColor
 * @property {string} description
 * @property {string} finish
 * @property {string} guid
 * @property {boolean} inClassStatus
 * @property {number} instanceId
 * @property {number} learningTaskId
 * @property {boolean} lessonPlanConfigured
 * @property {string} longTitle
 * @property {string} longTitleWithoutTime
 * @property {number} managerId
 * @property {Manager[]} managers
 * @property {string} period
 * @property {boolean} rollMarked
 * @property {number} runningStatus
 * @property {string} start
 * @property {number} targetStudentId
 * @property {boolean} teachingDaysOnly
 * @property {string} textColor
 * @property {string} title
 */