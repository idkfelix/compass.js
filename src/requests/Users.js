import CompassClient from "../index.js";

export default class Users{
  /**
   * @description Create Class with CompassClient
   * @param {CompassClient} client 
   */
  constructor(client){
    /** @private */
    this.client = client
  }

  /**
   * @description Request all staff user info
   * @param {number} [limit] 
   * @returns {Promise<Partial<StaffResponse>>} Returns array of staff object
   */
  getAllStaff(limit){
    /** @type {{limit:number}} */
    let data = {"limit":limit || 1000}
    return this.client.newRequest("User",'GetAllStaff',data)
  }
}