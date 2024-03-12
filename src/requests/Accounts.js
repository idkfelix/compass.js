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
   * @returns {Promise<AccountResponse>} Resolves account details object
   * @deprecated This function is called on init, use {@link CompassClient.userInfo} instead
   */
  function getAccount(){
    return newRequest("Accounts",'GetAccount')
  }
  
  return {
    getAccount
  }
}
export default Accounts