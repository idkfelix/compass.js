/** 
 * Accounts.svc Requests
 * @namespace Accounts
 * @memberof module:CompassClient
 * @param {module:CompassClient.newRequest} newRequest
 */
function Accounts(newRequest) {
  /**
   * Request current user info from cookies
   * @memberof module:CompassClient.Accounts
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