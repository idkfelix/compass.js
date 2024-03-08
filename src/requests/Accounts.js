import CompassClient from "../index.js";

export default class Accounts{
  /**
   * @description Create Class with CompassClient
   * @param {CompassClient} client 
   */
  constructor(client){
    /** @private */
    this.client = client
  }

  /**
   * @description Request current user info from cookies
   * @description This is called on init(), use the .userInfo object instead
   * @returns {Promise<AccountResponse>} Returns account details object
   */
  getAccount(){
    return this.client.newRequest("Accounts",'GetAccount')
  }
}