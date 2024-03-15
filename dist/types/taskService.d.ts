/**
 * Request Object of \*TaskItem\* endpoint
 */
type TaskItemRequest = {
    task: TaskItemBody;
};
/**
 * Response Object of Get\*TaskItems endpoint
 */
type TaskItemResponse = TaskItemBody[];
/**
 * Child Object of \*TaskItem\* request and response
 */
type TaskItemBody = {
    id?: number;
    status?: boolean;
    taskName: string;
    dueDate?: string;
};
//# sourceMappingURL=taskService.d.ts.map