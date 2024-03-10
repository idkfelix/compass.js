import CompassClient from "../index.js";

/** 
 * @module Accounts
 * @param {CompassClient} client
 * @returns {object} Account methods
 */
export default function Accounts(client) {
  /**
   * @memberof module:Accounts
   * @description Request current user info from cookies
   * @description This is called on init(), use the .userInfo object instead
   * @returns {Promise<AccountResponse>} Returns account details object
   */
  function getAccount(){
    return client.newRequest("Accounts",'GetAccount')
  }
  
  return {
    getAccount
  }
}