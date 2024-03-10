import CompassClient from "../index.js";

/**
 * @module Users
 * @param {CompassClient} client 
 * @returns {object} Users methods
 */
export default function Users(client){
  /**
   * @memberof module:Users
   * @description Request all staff user info
   * @param {number} [limit] 
   * @returns {Promise<Partial<StaffResponse>>} Returns array of staff object
   */
  function getAllStaff(limit){
    /** @type {{limit:number}} */
    let data = {"limit":limit || 1000}
    return client.newRequest("User",'GetAllStaff',data)
  }
  
  return{
    getAllStaff
  }
}