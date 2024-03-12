/**
 * LearningTasks.svc Requests
 * @namespace LearningTasks
 * @memberof module:CompassClient
 * @param {module:CompassClient.newRequest} newRequest
 */
function LearningTasks(newRequest){
  /**
   * Requests Learning Tasks by UserId
   * @memberof module:CompassClient.LearningTasks
   * @param {number} userId - Client UserId
   * @param {number} [limit] - Limit amount of results
   * @param {boolean} [showHiddenTasks] - Show hidden task boolean (defaults to false)
   * @returns {Promise<LearningTaskResponse>} Resolves array of users learning tasks
   */
  function getAllLearningTasksByUserId(userId,limit,showHiddenTasks){
    /** @type {Partial<LearningTaskUserIdRequest>} */
    let data = {'userId':userId,'limit':limit || 1000,'showHiddenTasks':showHiddenTasks || false}
    return newRequest("LearningTasks",'GetAllLearningTasksByUserId',data)
  }

  /**
   * Requests Learning tasks by Activity Id
   * @memberof module:CompassClient.LearningTasks
   * @param {number} activityId - ActivityId of learning tasks
   * @param {number} [limit]  - Limit amount of results
   * @param {boolean} [showHiddenTasks] - Show hidden task boolean (defaults to false)
   * @returns {Promise<LearningTaskResponse>} Resolves array of Activity's learning tasks
   */
  function getAllLearningTasksByActivityId(activityId,limit,showHiddenTasks){
    /** @type {Partial<LearningTaskActivityIdRequest>} */
    let data = {'activityId':activityId,'limit':limit || 1000,'showHiddenTasks':showHiddenTasks || false}
    return newRequest("LearningTasks",'GetAllLearningTasksByActivityId',data)
  }

  return {
    getAllLearningTasksByActivityId,
    getAllLearningTasksByUserId
  }
}
export default LearningTasks