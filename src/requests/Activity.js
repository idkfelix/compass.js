/**
 * @module Activity
 * @param {*} newRequest
 */
function Activity(newRequest) {
  /**
   * @memberof module:Activity
   * @description Requests upcoming lesson and activity info by Activity Id
   * @param {number} activityId
   * @returns {Promise<LessonResponse>} Returns Lesson object (includes activity info)
   */
  function getLessonsByActivityIdQuick(activityId){
    /** @type {LessonsActivityIdRequest} */
    let data = {'activityId':activityId}
    return newRequest("Activity",'GetLessonsByActivityIdQuick',data)
  }

  /**
   * @memberof module:Activity
   * @description Requests all lessons and activity info by Activity Id
   * @param {number} activityId
   * @returns {Promise<LessonSummaryResponse>} Returns Activity info with array of Lesson objects
   */
  function getLessonsByActivityId(activityId){
    /** @type {LessonsActivityIdRequest} */
    let data = {'activityId':activityId}
    return newRequest("Activity",'GetLessonsByActivityId',data)
  }

  /**
   * @memberof module:Activity
   * @description Requests upcoming lesson and activity info by a childLesson Id
   * @param {number} instanceId
   * @returns {Promise<LessonResponse>} Returns Lesson object (includes activity info)
   */
  function getLessonsByInstanceIdQuick(instanceId){
    /** @type {LessonsInstanceIdRequest} */
    let data = {'instanceId':instanceId}
    return newRequest("Activity",'GetLessonsByInstanceIdQuick',data)
  }

  /**
   * @memberof module:Activity
   * @description Requests all lessons and activity info by a child Lesson Id
   * @param {number} instanceId
   * @returns {Promise<LessonSummaryResponse>} Returns Activity info with array of Lesson objects
   */
  function getLessonsByInstanceId(instanceId){
    /** @type {LessonsInstanceIdRequest} */
    let data = {'instanceId':instanceId}
    return newRequest("Activity",'GetLessonsByInstanceId',data)
  }

  return {
    getLessonsByActivityId,
    getLessonsByActivityIdQuick,
    getLessonsByInstanceId,
    getLessonsByInstanceIdQuick
  }
}
export default Activity