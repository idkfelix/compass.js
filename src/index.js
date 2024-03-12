import Users from "./requests/Users.js";
import Calendar from "./requests/Calendar.js";
import Activity from "./requests/Activity.js";
import Accounts from "./requests/Accounts.js";
import TaskService from "./requests/TaskService.js";
import LearningTasks from "./requests/LearningTasks.js";
/**
 * API Client for Compass Edu
 * @module CompassClient
 * @param {string} domain - School domain for Compass
 * @param {string} cookies - Cookies to authorise API requests
 * @example const client = CompassClient('school.compass.education','ASP.NET_SessionId=...')
 */
async function CompassClient(domain, cookies){
  /**
   * @memberof module:CompassClient
   * @param {"Accounts"|"Calendar"|"Activity"|"FileAssets"|"TaskService"|"LearningTasks"|"User"} service - API service to use
   * @param {string} location - API location to use
   * @param {any} [data] - Data to send with request (optional).
   * @param {"POST"|"GET"} [method] - HTTP Method for request, default to POST
   * @returns {Promise<any>} Promise resolves reponse JSON
   * @example client.newRequest("Accounts","getAccount",null,"POST")
   */
  async function newRequest(service,location,data,method) {
    let url = `https://${domain}/Services/${service}.svc/${location}`
    const res = await fetch(url, {
      "method": method || "POST",
      "body": JSON.stringify(data),
      "headers": {
        "accept": "*/*",
        "content-type": "application/json",
        "cookie": cookies,
      },
    })
    if(!res.ok) throw new Error(res.statusText+" "+res.url.replace('https://'+domain,''))
    let json = await res.json()
    return json.d
  }

  /**
   * @memberof module:CompassClient
   * @param {string} id - Compass File Id
   * @param {string} nodeId - Compass Node Id
   * @returns {Promise<string>} Returns file as String
   */
  async function downloadFile(id,nodeId) {
    let url = `https://${domain}/Services/FileAssets.svc/DownloadFile?id=${id}&nodeId=${nodeId}`
    const res = await fetch(url, {
      "method": "GET",
      "headers": {
        "accept": "*/*",
        "content-type": "application/json",
        "cookie": cookies,
      },
    })
    if(!res.ok) throw new Error(res.statusText+" "+res.url.replace('https://'+domain,''))
    return res.text()
  }

  const _Accounts = Accounts(newRequest)
  const initRes = await _Accounts.getAccount()

  return{
    domain: domain,
    userId: initRes.userId,
    userInfo: initRes,

    newRequest,
    downloadFile,
    
    Accounts: _Accounts,
    Activity: Activity(newRequest),
    Calendar: Calendar(newRequest),
    LearningTasks: LearningTasks(newRequest),
    TaskService: TaskService(newRequest),
    Users: Users(newRequest)
  }
}
export default CompassClient