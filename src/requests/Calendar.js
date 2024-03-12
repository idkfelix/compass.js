/**
 * Calendar.svc Requests
 * @namespace Calendar
 * @memberof module:CompassClient
 * @param {module:CompassClient.newRequest} newRequest
 */
function Calendar(newRequest){
  /**
   * Get all events in a defined time frame by userId
   * @memberof module:CompassClient.Calendar
   * @param {number} userId - Client UserId
   * @param {string} startDate - "yyyy-mm-dd"
   * @param {string} endDate - "yyyy-mm-dd"
   * @returns {Promise<CalendarRespone>} Resolves array of event objects
   */
  function getCalendarEventsByUser(userId,startDate,endDate){
    /** @type {CalendarRequest} */
    let data = {"userId":userId,"startDate":startDate,"endDate":endDate}
    return newRequest("Calendar",'GetCalendarEventsByUser',data)
  }
  
  return {
    getCalendarEventsByUser
  }
}
export default Calendar