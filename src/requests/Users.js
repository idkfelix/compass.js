/**
 * @module Users
 * @param {*} newRequest
 */
function Users(newRequest){
  /**
   * @memberof module:Users
   * @description Request all staff user info
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