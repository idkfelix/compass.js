/**
 * @module Calendar
 * @param {*} newRequest
 */
function Calendar(newRequest){
  /**
   * @memberof module:Calendar
   * @description Get all events in a defined time frame by userId
   * @param {number} userId
   * @param {string} startDate "yyyy-mm-dd"
   * @param {string} endDate "yyyy-mm-dd"
   * @returns {Promise<Partial<CalendarRespone>>} Returns array of event objects
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