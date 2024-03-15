/**
 * Request Object for GetLessonsByActivityId\* endpoint
 */
type LessonsActivityIdRequest = {
    activityId: number;
};
/**
 * Request Object for GetLessonsByInstanceId\* endpoint
 */
type LessonsInstanceIdRequest = {
    instanceId: number;
};
/**
 * Response Object for GetLessonsBy\* endpoint
 */
type LessonSummaryResponse = {
    AcademicYearLevel: string;
    ActivityDisplayName: string;
    ActivityFinish: string;
    ActivityId: number;
    ActivityImportIdentifier: string;
    ActivityManagerId: string;
    ActivityStart: string;
    Instances: LessonResponse[];
    IsClub: boolean;
    IsExam: boolean;
    IsLearningTasksAdmin: boolean;
    IsMeeting: boolean;
    IsSchoolApproval: boolean;
    IsStandardClass: boolean;
    SubjectId: number;
    SubjectName: string;
    SubjectShortName: string;
};
/**
 * Response Object for GetLessonsBy*Quick endpoint
 */
type LessonResponse = {
    /**
     * - Class Abereviation
     */
    ActivityDisplayName: string;
    ActivityId: string;
    ActivityImportIdentifier: string;
    /**
     * - Manager ID
     */
    ActivityManagerId: number;
    AttendanceMode: number;
    AttendeeCount: number;
    /**
     * - ID's of students in class
     */
    AttendeeUserIdList: number[];
    CampusId: number;
    CoveringIid: string;
    CoveringPhotoPath: string;
    CoveringUid: number;
    CurrentInstance: boolean;
    ExtendedStatusId: number;
    FutureInstance: boolean;
    IsClub: boolean;
    IsExam: boolean;
    IsMeeting: boolean;
    IsSchoolApproval: boolean;
    /**
     * - Is a standard Class
     */
    IsStandardClass: boolean;
    LocationId: number;
    /**
     * - Teacher PFP
     */
    ManagerPhotoPath: string;
    /**
     * - Teacher Name
     */
    ManagerTextReadable: string;
    PastInstance: boolean;
    ReadableAttendeeCount: string;
    RunningStatus: boolean;
    SubjectId: string;
    /**
     * - Class Title Full
     */
    SubjectName: string;
    SubjectShortname: string;
    UpcomingInstance: boolean;
    /**
     * - Finish Time
     */
    fn: string;
    /**
     * - Lesson ID
     */
    id: string;
    /**
     * - Lesson Room
     */
    l: string;
    lp: LessonPlan;
    /**
     * - Teacher Name Abreviation
     */
    m: string;
    /**
     * - Teachers
     */
    managers: Manager[];
    mi: number;
    rollTapThreshold: number;
    sessionCost: number;
    st: string;
    wsv: string;
};
/**
 * Child Object of LessonResponse
 */
type LessonPlan = {
    fileAssetId: string;
    mp: string;
    name: string;
    sp: string;
    /**
     * - nodeId
     */
    wnid: string;
};
//# sourceMappingURL=activity.d.ts.map