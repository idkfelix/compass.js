import CompassClient from "../index.js";

export default class Calendar{
  /**
   * @description Create Class with CompassClient
   * @param {CompassClient} client 
   */
  constructor(client){
    /** @private */
    this.client = client
  }

  /**
   * @description Get all events in a defined time frame by userId
   * @param {number} userId
   * @param {string} startDate "yyyy-mm-dd"
   * @param {string} endDate "yyyy-mm-dd"
   * @returns {Promise<Partial<CalendarRespone>>} Returns array of event objects
   * @example 
   *  let date = new Date().toISOstring().slice(0, 10)
   *  client.getCalendarEventsByUser(client.userId,date,date)
   */
  getCalendarEventsByUser(userId,startDate,endDate){
    /** @type {CalendarRequest} */
    let data = {"userId":userId,"startDate":startDate,"endDate":endDate}
    return this.client.newRequest("Calendar",'GetCalendarEventsByUser',data)
  }
}