export default CompassClient;
/**
 * API Client for Compass Edu
 * @module CompassClient
 * @param {string} domain - School domain for Compass
 * @param {string} cookies - Cookies to authorise API requests
 * @example const client = CompassClient('school.compass.education','ASP.NET_SessionId=...')
 */
declare function CompassClient(domain: string, cookies: string): Promise<{
    domain: string;
    userId: number;
    userInfo: AccountResponse;
    newRequest: (service: "Accounts" | "Calendar" | "Activity" | "FileAssets" | "TaskService" | "LearningTasks" | "User", location: string, data?: any, method?: "POST" | "GET") => Promise<any>;
    downloadFile: (id: string, nodeId: string) => Promise<string>;
    Accounts: {
        getAccount: () => Promise<AccountResponse>;
    };
    Activity: {
        getLessonsByActivityId: (activityId: number) => Promise<LessonSummaryResponse>;
        getLessonsByActivityIdQuick: (activityId: number) => Promise<LessonResponse>;
        getLessonsByInstanceId: (instanceId: number) => Promise<LessonSummaryResponse>;
        getLessonsByInstanceIdQuick: (instanceId: number) => Promise<LessonResponse>;
    };
    Calendar: {
        getCalendarEventsByUser: (userId: number, startDate: string, endDate: string) => Promise<CalendarRespone>;
    };
    LearningTasks: {
        getAllLearningTasksByActivityId: (activityId: number, limit?: number, showHiddenTasks?: boolean) => Promise<LearningTaskResponse>;
        getAllLearningTasksByUserId: (userId: number, limit?: number, showHiddenTasks?: boolean) => Promise<LearningTaskResponse>;
    };
    TaskService: {
        getAllTaskItems: (limit?: number) => Promise<TaskItemResponse>;
        getTaskItems: (limit?: number) => Promise<TaskItemResponse>;
        saveTaskItem: (task: TaskItemBody) => Promise<number>;
        deleteTaskItem: (task: TaskItemBody) => Promise<number>;
        updateTaskItem: (task: TaskItemBody) => Promise<null>;
    };
    Users: {
        getAllStaff: (limit?: number) => Promise<StaffResponse>;
    };
}>;
//# sourceMappingURL=index.d.ts.map