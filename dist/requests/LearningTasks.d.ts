export default LearningTasks;
/**
 * LearningTasks.svc Requests
 * @namespace LearningTasks
 * @memberof module:CompassClient
 * @param {module:CompassClient.newRequest} newRequest
 */
declare function LearningTasks(newRequest: any): {
    getAllLearningTasksByActivityId: (activityId: number, limit?: number, showHiddenTasks?: boolean) => Promise<LearningTaskResponse>;
    getAllLearningTasksByUserId: (userId: number, limit?: number, showHiddenTasks?: boolean) => Promise<LearningTaskResponse>;
};
//# sourceMappingURL=LearningTasks.d.ts.map