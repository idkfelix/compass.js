export default Activity;
/**
 * Activity.svc Requests
 * @namespace Activity
 * @memberof module:CompassClient
 * @param {module:CompassClient.newRequest} newRequest
 */
declare function Activity(newRequest: any): {
    getLessonsByActivityId: (activityId: number) => Promise<LessonSummaryResponse>;
    getLessonsByActivityIdQuick: (activityId: number) => Promise<LessonResponse>;
    getLessonsByInstanceId: (instanceId: number) => Promise<LessonSummaryResponse>;
    getLessonsByInstanceIdQuick: (instanceId: number) => Promise<LessonResponse>;
};
//# sourceMappingURL=Activity.d.ts.map