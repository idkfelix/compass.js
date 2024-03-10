import CompassClient from "../index.js";

/**
 * @module Activity
 * @param {CompassClient} client 
 * @returns {object} Activity methods
 */
export default function Activity(client) {
  /**
   * @memberof module:Activity
   * @description Requests upcoming lesson and activity info by Activity Id
   * @param {number} activityId
   * @returns {Promise<Partial<LessonResponse>>} Returns Lesson object (includes activity info)
   */
  function getLessonsByActivityIdQuick(activityId){
    /** @type {LessonsActivityIdRequest} */
    let data = {'activityId':activityId}
    return client.newRequest("Activity",'GetLessonsByActivityIdQuick',data)
  }

  /**
   * @memberof module:Activity
   * @description Requests all lessons and activity info by Activity Id
   * @param {number} activityId
   * @returns {Promise<Partial<LessonSummaryResponse>>} Returns Activity info with array of Lesson objects
   */
  function getLessonsByActivityId(activityId){
    /** @type {LessonsActivityIdRequest} */
    let data = {'activityId':activityId}
    return client.newRequest("Activity",'GetLessonsByActivityId',data)
  }

  /**
   * @memberof module:Activity
   * @description Requests upcoming lesson and activity info by a childLesson Id
   * @param {number} instanceId
   * @returns {Promise<Partial<LessonResponse>>} Returns Lesson object (includes activity info)
   */
  function getLessonsByInstanceIdQuick(instanceId){
    /** @type {LessonsInstanceIdRequest} */
    let data = {'instanceId':instanceId}
    return client.newRequest("Activity",'GetLessonsByInstanceIdQuick',data)
  }

  /**
   * @memberof module:Activity
   * @description Requests all lessons and activity info by a child Lesson Id
   * @param {number} instanceId
   * @returns {Promise<Partial<LessonSummaryResponse>>} Returns Activity info with array of Lesson objects
   */
  function getLessonsByInstanceId(instanceId){
    /** @type {LessonsInstanceIdRequest} */
    let data = {'instanceId':instanceId}
    return client.newRequest("Activity",'GetLessonsByInstanceId',data)
  }

  return {
    getLessonsByActivityId,
    getLessonsByActivityIdQuick,
    getLessonsByInstanceId,
    getLessonsByInstanceIdQuick
  }
}