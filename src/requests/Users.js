/** 
 * Users.svc Requests
 * @namespace Users
 * @memberof module:CompassClient
 * @param {module:CompassClient.newRequest} newRequest
 */
function Users(newRequest){
  /**
   * Request all staff user info
   * @memberof module:CompassClient.Users
   * @param {number} [limit] 
   * @returns {Promise<Partial<StaffResponse>>} Returns array of staff object
   */
  function getAllStaff(limit){
    /** @type {{limit:number}} */
    let data = {"limit":limit || 1000}
    return newRequest("User",'GetAllStaff',data)
  }
  
  return{
    getAllStaff
  }
}
export default Users