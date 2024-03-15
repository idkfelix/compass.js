/**
 * Request Object of GetAllLearningTasksByUserId endpoint
 */
type LearningTaskUserIdRequest = {
    showHiddenTasks: boolean;
    limit: number;
    userId: number;
};
/**
 * Request Object of GetAllLearningTasksByActivityId endpoint
 */
type LearningTaskActivityIdRequest = {
    showHiddenTasks: boolean;
    limit: number;
    activityId: number;
};
/**
 * Response Object of GetAllLearningTasksBy\* endpoint
 */
type LearningTaskResponse = {
    data: LearningTask[];
    total: number;
};
/**
 * Child Object of LearningTaskResponse
 */
type LearningTask = {
    activityId: number;
    activityName: string;
    activityStart: string;
    attachments: Attachments[];
    canEditResults: boolean;
    canManage: boolean;
    categoryId: number;
    createdTimestamp: string;
    description: string;
    displayPrimaryGrading: boolean;
    distributionType: number;
    dueDateTimestamp: string;
    groupName: string;
    hidden: boolean;
    id: number;
    important: boolean;
    includeBreakdownHeading: boolean;
    includeInOverall: boolean;
    includeInSemesterReports: boolean;
    includeTitleOnSummaryVertical: boolean;
    isAggregateTask: boolean;
    isContributingTask: boolean;
    name: string;
    showTaskDueDates: boolean;
    students: Student[];
    subjectName: string;
    taskReportDescription: string;
    taskTitleOnReport: string;
    verticalBreakdownHeadings: boolean;
    wikiNodeId: number;
};
/**
 * Child Object of LearningTask
 */
type Student = {
    comments: Comments[];
    dueDateTimestamp: string;
    id: number;
    lastSubmittedTimestamp: string;
    primaryResult: unknown;
    results: Result[];
    selfAssessmentEnabled: boolean;
    smsOutstandingSentTimestamp: string;
    submissionStatus: number;
    submissions: Submission[];
    submittedTimestamp: string;
    taskId: number;
    teacherResponses: unknown;
    userId: number;
    userName: string;
};
/**
 * Child Object of LearningTask
 */
type Attachments = {
    contentUrl: string;
    fileName: string;
    id: string;
    name: string;
    wikiNodeId: number;
    wikiNodeType: number;
};
/**
 * Child Object of Student
 */
type Result = {
    flaggedResultType: number;
    id: number;
    isCalculatedResult: boolean;
    isEstimatedResult: boolean;
    lockedTimestamp: string;
    modifiedByUserId: number;
    modifiedTimestamp: string;
    reportGradingSchemeOptionId: string;
    result: string;
    taskGradingItemId: number;
    taskStudentId: number;
    userIdLocked: number;
};
/**
 * Child Object of Student
 */
type Submission = {
    contentUrl: string;
    fileId: string;
    fileName: string;
    id: number;
    submissionFileType: number;
    submitterBaseRole: number;
    taskStudentId: number;
    taskSubmissionItemId: number;
    timestamp: string;
    wikiNodeId: number;
};
/**
 * Child Object of Student
 */
type Comments = {
    comment: string;
    id: number;
    status: number;
    taskStudentId: number;
    timestamp: string;
    userIdPoster: number;
    userNamePoster: string;
};
//# sourceMappingURL=learningTasks.d.ts.map