import CompassClient from "../index.js";

export default class Activity{
  /**
   * @description Create Class with CompassClient
   * @param {CompassClient} client 
   */
  constructor(client){
    /** @private */
    this.client = client
  }

  /**
   * @description Requests upcoming lesson and activity info by Acticity Id
   * @param {number} activityId
   * @returns {Promise<Partial<LessonResponse>>} Returns Lesson object (includes activity info)
   */
  getLessonsByActivityIdQuick(activityId){
    /** @type {LessonsActivityIdRequest} */
    let data = {'activityId':activityId}
    return this.client.newRequest("Activity",'GetLessonsByActivityIdQuick',data)
  }

  /**
   * @description Requests all lessons and activity info by Activity Id
   * @param {number} activityId
   * @returns {Promise<Partial<LessonSummaryResponse>>} Returns Activity info with array of Lesson objects
   */
  getLessonsByActivityId(activityId){
    /** @type {LessonsActivityIdRequest} */
    let data = {'activityId':activityId}
    return this.client.newRequest("Activity",'GetLessonsByActivityId',data)
  }

  /**
   * @description Requests upcoming lesson and activity info by a childLesson Id
   * @param {number} instanceId
   * @returns {Promise<Partial<LessonResponse>>} Returns Lesson object (includes activity info)
   */
  getLessonsByInstanceIdQuick(instanceId){
    /** @type {LessonsInstanceIdRequest} */
    let data = {'instanceId':instanceId}
    return this.client.newRequest("Activity",'GetLessonsByInstanceIdQuick',data)
  }

  /**
   * @description Requests all lessons and activity info by a child Lesson Id
   * @param {number} instanceId
   * @returns {Promise<Partial<LessonSummaryResponse>>} Returns Activity info with array of Lesson objects
   */
  getLessonsByInstanceId(instanceId){
    /** @type {LessonsInstanceIdRequest} */
    let data = {'instanceId':instanceId}
    return this.client.newRequest("Activity",'GetLessonsByInstanceId',data)
  }
}