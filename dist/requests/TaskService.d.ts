export default TaskService;
/**
 * TaskService.svc Requests
 * @namespace TaskService
 * @memberof module:CompassClient
 * @param {module:CompassClient.newRequest} newRequest
 */
declare function TaskService(newRequest: any): {
    getAllTaskItems: (limit?: number) => Promise<TaskItemResponse>;
    getTaskItems: (limit?: number) => Promise<TaskItemResponse>;
    saveTaskItem: (task: TaskItemBody) => Promise<number>;
    deleteTaskItem: (task: TaskItemBody) => Promise<number>;
    updateTaskItem: (task: TaskItemBody) => Promise<null>;
};
//# sourceMappingURL=TaskService.d.ts.map