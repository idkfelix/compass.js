/** 
 * @module Accounts
 * @param {*} newRequest
 */
function Accounts(newRequest) {
  /**
   * @memberof module:Accounts
   * @description Request current user info from cookies
   * @returns {Promise<AccountResponse>} Returns account details object
   */
  function getAccount(){
    return newRequest("Accounts",'GetAccount')
  }
  
  return {
    getAccount
  }
}
export default Accounts