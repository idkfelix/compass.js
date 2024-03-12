/**
 * Activity.svc Requests
 * @namespace Activity
 * @memberof module:CompassClient
 * @param {module:CompassClient.newRequest} newRequest
 */
function Activity(newRequest) {
  /**
   * Requests upcoming lesson and activity info by Activity Id
   * @memberof module:CompassClient.Activity
   * @param {number} activityId
   * @returns {Promise<LessonResponse>} Returns Lesson object (includes activity info)
   */
  function getLessonsByActivityIdQuick(activityId){
    /** @type {LessonsActivityIdRequest} */
    let data = {'activityId':activityId}
    return newRequest("Activity",'GetLessonsByActivityIdQuick',data)
  }

  /**
   * Requests all lessons and activity info by Activity Id
   * @memberof module:CompassClient.Activity
   * @param {number} activityId
   * @returns {Promise<LessonSummaryResponse>} Returns Activity info with array of Lesson objects
   */
  function getLessonsByActivityId(activityId){
    /** @type {LessonsActivityIdRequest} */
    let data = {'activityId':activityId}
    return newRequest("Activity",'GetLessonsByActivityId',data)
  }

  /**
   * Requests upcoming lesson and activity info by a childLesson Id
   * @memberof module:CompassClient.Activity
   * @param {number} instanceId
   * @returns {Promise<LessonResponse>} Returns Lesson object (includes activity info)
   */
  function getLessonsByInstanceIdQuick(instanceId){
    /** @type {LessonsInstanceIdRequest} */
    let data = {'instanceId':instanceId}
    return newRequest("Activity",'GetLessonsByInstanceIdQuick',data)
  }

  /**
   * Requests all lessons and activity info by a child Lesson Id
   * @memberof module:CompassClient.Activity
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