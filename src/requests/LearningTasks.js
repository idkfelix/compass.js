import CompassClient from "../index.js";

export default class LearningTasks{
  /**
   * @description Create Class with CompassClient
   * @param {CompassClient} client 
   */
  constructor(client){
    /** @private */
    this.client = client
  }

  /**
   * @description Requests Learning Tasks by UserId
   * @param {number} userId 
   * @param {number} [limit] 
   * @param {boolean} [showHiddenTasks]
   * @returns {Promise<Partial<LearningTaskResponse>>} Returns array of users learning tasks
   */
  getAllLearningTasksByUserId(userId,limit,showHiddenTasks){
    /** @type {Partial<LearningTaskUserIdRequest>} */
    let data = {'userId':userId,'limit':limit || 1000,'showHiddenTasks':showHiddenTasks || false}
    return this.client.newRequest("LearningTasks",'GetAllLearningTasksByUserId',data)
  }

  /**
   * @description Requests Learning tasks by Activity Id
   * @param {number} activityId 
   * @param {number} [limit] 
   * @param {boolean} [showHiddenTasks]
   * @returns {Promise<Partial<LearningTaskResponse>>} Returns array of Activity's learning tasks
   */
  getAllLearningTasksByActivityId(activityId,limit,showHiddenTasks){
    /** @type {Partial<LearningTaskActivityIdRequest>} */
    let data = {'activityId':activityId,'limit':limit || 1000,'showHiddenTasks':showHiddenTasks || false}
    return this.client.newRequest("LearningTasks",'GetAllLearningTasksByActivityId',data)
  }
}