/**
 * Request Object of GetAllLearningTasksByUserId endpoint
 * @typedef {object} LearningTaskUserIdRequest
 * @property {boolean} showHiddenTasks
 * @property {number} limit
 * @property {number} userId
 */

/**
 * Request Object of GetAllLearningTasksByActivityId endpoint
 * @typedef {object} LearningTaskActivityIdRequest
 * @property {boolean} showHiddenTasks
 * @property {number} limit
 * @property {number} activityId
 */


/**
 * Response Object of GetAllLearningTasksBy\* endpoint
 * @typedef {object} LearningTaskResponse
 * @property {LearningTask[]} data
 * @property {number} total
 */

/**
 * Child Object of LearningTaskResponse
 * @typedef {object} LearningTask
 * @property {number} activityId
 * @property {string} activityName
 * @property {string} activityStart
 * @property {Attachments[]} attachments
 * @property {boolean} canEditResults
 * @property {boolean} canManage
 * @property {number} categoryId
 * @property {string} createdTimestamp
 * @property {string} description
 * @property {boolean} displayPrimaryGrading
 * @property {number} distributionType
 * @property {string} dueDateTimestamp
 * @property {string} groupName
 * @property {boolean} hidden
 * @property {number} id
 * @property {boolean} important
 * @property {boolean} includeBreakdownHeading
 * @property {boolean} includeInOverall
 * @property {boolean} includeInSemesterReports
 * @property {boolean} includeTitleOnSummaryVertical
 * @property {boolean} isAggregateTask
 * @property {boolean} isContributingTask
 * @property {string} name
 * @property {boolean} showTaskDueDates
 * @property {Student[]} students
 * @property {string} subjectName
 * @property {string} taskReportDescription
 * @property {string} taskTitleOnReport
 * @property {boolean} verticalBreakdownHeadings
 * @property {number} wikiNodeId
 */

/**
 * Child Object of LearningTask
 * @typedef {object} Student
 * @property {Comments[]} comments
 * @property {string} dueDateTimestamp
 * @property {number} id
 * @property {string} lastSubmittedTimestamp
 * @property {?} primaryResult
 * @property {Result[]} results
 * @property {boolean} selfAssessmentEnabled
 * @property {string} smsOutstandingSentTimestamp
 * @property {number} submissionStatus
 * @property {Submission[]} submissions
 * @property {string} submittedTimestamp
 * @property {number} taskId
 * @property {?} teacherResponses
 * @property {number} userId
 * @property {string} userName
 */

/**
 * Child Object of LearningTask
 * @typedef {object} Attachments
 * @property {string} contentUrl
 * @property {string} fileName
 * @property {string} id
 * @property {string} name
 * @property {number} wikiNodeId
 * @property {number} wikiNodeType
 */

/**
 * Child Object of Student
 * @typedef {object} Result
 * @property {number} flaggedResultType
 * @property {number} id
 * @property {boolean} isCalculatedResult
 * @property {boolean} isEstimatedResult
 * @property {string} lockedTimestamp
 * @property {number} modifiedByUserId
 * @property {string} modifiedTimestamp
 * @property {string} reportGradingSchemeOptionId
 * @property {string} result
 * @property {number} taskGradingItemId
 * @property {number} taskStudentId
 * @property {number} userIdLocked
 */

/**
 * Child Object of Student
 * @typedef {object} Submission
 * @property {string} contentUrl
 * @property {string} fileId
 * @property {string} fileName
 * @property {number} id
 * @property {number} submissionFileType
 * @property {number} submitterBaseRole
 * @property {number} taskStudentId
 * @property {number} taskSubmissionItemId
 * @property {string} timestamp
 * @property {number} wikiNodeId
 */

/**
 * Child Object of Student 
 * @typedef {object} Comments
 * @property {string} comment
 * @property {number} id
 * @property {number} status
 * @property {number} taskStudentId
 * @property {string} timestamp
 * @property {number} userIdPoster
 * @property {string} userNamePoster
 */
