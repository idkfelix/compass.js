import Users from "./requests/Users.js";
import Calendar from "./requests/Calendar.js";
import Activity from "./requests/Activity.js";
import Accounts from "./requests/Accounts.js";
import TaskService from "./requests/TaskService.js";
import LearningTasks from "./requests/LearningTasks.js";

/** Compass API client */
export default class CompassClient {
  /**
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
   * @param {string} domain
   * @param {string} cookies
   * @param {AccountResponse} userInfo 
   * @param {number} userId 
   */
  constructor(domain, cookies, userInfo, userId) {
    /** @private */
    this.cookies = cookies;
    /** @readonly */
    this.domain = domain;
    /** @readonly */
    this.userInfo = userInfo;
    /** @readonly */
    this.userId = userId;

    this.Accounts = new Accounts(this)
    this.Users = new Users(this)
    this.TaskService = new TaskService(this)
    this.Activity = new Activity(this)
    this.Calendar = new Calendar(this)
    this.LearningTasks = new LearningTasks(this)
  }

  /**
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