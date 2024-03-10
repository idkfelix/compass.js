import CompassClient from "../index.js";

/**
 * @module Calendar
 * @param {CompassClient} client
 * @returns {object} Calendar methods
 */
export default function Calendar(client){
  /**
   * @memberof module:Calendar
   * @description Get all events in a defined time frame by userId
   * @param {number} userId
   * @param {string} startDate "yyyy-mm-dd"
   * @param {string} endDate "yyyy-mm-dd"
   * @returns {Promise<Partial<CalendarRespone>>} Returns array of event objects
   * @example 
   *  let date = new Date().toISOstring().slice(0, 10)
   *  client.getCalendarEventsByUser(client.userId,date,date)
   */
  function getCalendarEventsByUser(userId,startDate,endDate){
    /** @type {CalendarRequest} */
    let data = {"userId":userId,"startDate":startDate,"endDate":endDate}
    return client.newRequest("Calendar",'GetCalendarEventsByUser',data)
  }
  
  return {
    getCalendarEventsByUser
  }
}