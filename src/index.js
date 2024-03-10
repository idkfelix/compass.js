import Users from "./requests/Users.js";
import Calendar from "./requests/Calendar.js";
import Activity from "./requests/Activity.js";
import Accounts from "./requests/Accounts.js";
import TaskService from "./requests/TaskService.js";
import LearningTasks from "./requests/LearningTasks.js";

/** API Client for Compass Edu */
class CompassClient {
  /** 
   * @param {string} domain
   * @param {string} cookies
   * @param {AccountResponse} userInfo 
   * @param {number} userId 
   */
  constructor(domain, cookies, userInfo, userId) {
    this.cookies = cookies;
    this.domain = domain;
    this.userInfo = userInfo;
    this.userId = userId;

    this.Accounts = Accounts(this)
    this.Users = Users(this)
    this.TaskService = TaskService(this)
    this.Activity = Activity(this)
    this.Calendar = Calendar(this)
    this.LearningTasks = LearningTasks(this)
  }

  /**
   * @memberof CompassClient
   * @description Create new client and fetch user info
   * @param {string} domain - Schools Compass Domain Name
   * @param {string} cookies - Session cookies for Authentication
   * @returns {Promise<CompassClient>} Returns Client instance
   */  
  static async init(domain, cookies) {
    /** @type {AccountResponse} */
    let res = await fetch(`https://${domain}/Services/Accounts.svc/GetAccount`,{
      "method": "POST",
      "headers": {
        "accept": "*/*",
        "content-type": "application/json",
        "cookie": cookies,
      },
    }).then(res => {
      if(!res.ok) throw new Error(res.statusText+" "+res.url.replace('https://'+domain,''))
      return res.json()
    }).then(x => x.d)
    return new CompassClient(domain, cookies, res, res.userId);
  }

  /**
   * @memberof CompassClient
   * @param {"Accounts"|"Calendar"|"Activity"|"FileAssets"|"TaskService"|"LearningTasks"|"User"} service - API service to use
   * @param {string} location - API location to use
   * @param {any} [data] - Data to send with request (optional).
   * @param {"POST"|"GET"} [method] - HTTP Method for request, default to POST
   * @returns {Promise<any>} Promise resolves reponse JSON
   */
  async newRequest(service,location,data,method) {
    let url = `https://${this.domain}/Services/${service}.svc/${location}`
    const res = await fetch(url, {
      "method": method || "POST",
      "body": JSON.stringify(data),
      "headers": {
        "accept": "*/*",
        "content-type": "application/json",
        "cookie": this.cookies,
      },
    })
    if(!res.ok) throw new Error(res.statusText+" "+res.url.replace('https://'+this.domain,''))
    let json = await res.json()
    return json.d
  }

  /**
   * @memberof CompassClient
   * @param {string} id 
   * @param {string} nodeId 
   * @returns {Promise<string>} Returns file as String
   */
  async downloadFile(id,nodeId) {
    let url = `https://${this.domain}/Services/FileAssets.svc/DownloadFile?id=${id}&nodeId=${nodeId}`
    const res = await fetch(url, {
      "method": "GET",
      "headers": {
        "accept": "*/*",
        "content-type": "application/json",
        "cookie": this.cookies,
      },
    })
    if(!res.ok) throw new Error(res.statusText+" "+res.url.replace('https://'+this.domain,''))
    return res.text()
  }
}
export default CompassClient