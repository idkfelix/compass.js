/**
 * Request Object for GetLessonsByActivityId\* endpoint
 * @typedef {object} LessonsActivityIdRequest
 * @property {number} activityId
 */

/**
 * Request Object for GetLessonsByInstanceId\* endpoint
 * @typedef {object} LessonsInstanceIdRequest
 * @property {number} instanceId
 */

/**
 * Response Object for GetLessonsBy\* endpoint
 * @typedef {object} LessonSummaryResponse
 * @property {string} AcademicYearLevel
 * @property {string} ActivityDisplayName
 * @property {string} ActivityFinish
 * @property {number} ActivityId
 * @property {string} ActivityImportIdentifier
 * @property {string} ActivityManagerId
 * @property {string} ActivityStart
 * @property {LessonResponse[]} Instances
 * @property {boolean} IsClub
 * @property {boolean} IsExam
 * @property {boolean} IsLearningTasksAdmin
 * @property {boolean} IsMeeting
 * @property {boolean} IsSchoolApproval
 * @property {boolean} IsStandardClass
 * @property {number} SubjectId
 * @property {string} SubjectName
 * @property {string} SubjectShortName
 */

/**
 * Response Object for GetLessonsBy*Quick endpoint
 * @typedef {object} LessonResponse
 * @property {string} ActivityDisplayName - Class Abereviation
 * @property {string} ActivityId
 * @property {string} ActivityImportIdentifier
 * @property {number} ActivityManagerId - Manager ID
 * @property {number} AttendanceMode
 * @property {number} AttendeeCount
 * @property {number[]} AttendeeUserIdList - ID's of students in class
 * @property {number} CampusId
 * @property {string} CoveringIid
 * @property {string} CoveringPhotoPath
 * @property {number} CoveringUid
 * @property {boolean} CurrentInstance
 * @property {number} ExtendedStatusId
 * @property {boolean} FutureInstance
 * @property {boolean} IsClub
 * @property {boolean} IsExam
 * @property {boolean} IsMeeting
 * @property {boolean} IsSchoolApproval
 * @property {boolean} IsStandardClass - Is a standard Class
 * @property {number} LocationId
 * @property {string} ManagerPhotoPath - Teacher PFP
 * @property {string} ManagerTextReadable - Teacher Name
 * @property {boolean} PastInstance
 * @property {string} ReadableAttendeeCount
 * @property {boolean} RunningStatus
 * @property {string} SubjectId
 * @property {string} SubjectName - Class Title Full
 * @property {string} SubjectShortname
 * @property {boolean} UpcomingInstance
 * @property {string} fn - Finish Time
 * @property {string} id - Lesson ID
 * @property {string} l - Lesson Room
 * @property {LessonPlan} lp
 * @property {string} m - Teacher Name Abreviation
 * @property {Manager[]} managers - Teachers
 * @property {number} mi
 * @property {number} rollTapThreshold
 * @property {number} sessionCost
 * @property {string} st
 * @property {string} wsv
 */

/**
 * Child Object of LessonResponse
 * @typedef {object} LessonPlan
 * @property {string} fileAssetId
 * @property {string} mp
 * @property {string} name
 * @property {string} sp
 * @property {string} wnid - nodeId
 */