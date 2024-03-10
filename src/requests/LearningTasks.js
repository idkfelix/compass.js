/**
 * @module LearningTasks
 * @param {*} newRequest
 */
function LearningTasks(newRequest){
  /**
   * @memberof module:LearningTasks
   * @description Requests Learning Tasks by UserId
   * @param {number} userId 
   * @param {number} [limit] 
   * @param {boolean} [showHiddenTasks]
   * @returns {Promise<Partial<LearningTaskResponse>>} Returns array of users learning tasks
   */
  function getAllLearningTasksByUserId(userId,limit,showHiddenTasks){
    /** @type {Partial<LearningTaskUserIdRequest>} */
    let data = {'userId':userId,'limit':limit || 1000,'showHiddenTasks':showHiddenTasks || false}
    return newRequest("LearningTasks",'GetAllLearningTasksByUserId',data)
  }

  /**
   * @memberof module:LearningTasks
   * @description Requests Learning tasks by Activity Id
   * @param {number} activityId 
   * @param {number} [limit] 
   * @param {boolean} [showHiddenTasks]
   * @returns {Promise<Partial<LearningTaskResponse>>} Returns array of Activity's learning tasks
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