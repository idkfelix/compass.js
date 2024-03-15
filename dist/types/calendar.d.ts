/**
 * Request Object for GetCalendarEventsByUser endpoint
 */
type CalendarRequest = {
    userId: number;
    /**
     * "yyyy-mm-dd"
     */
    startDate: string;
    /**
     * "yyyy-mm-dd"
     */
    endDate: string;
    page?: number;
    start?: number;
    limit?: number;
    homePage?: boolean;
    activityId?: number;
    locationId?: number;
    staffIds?: number[];
};
/**
 * Response Object for GetCalendarEventsByUser endpoint
 */
type CalendarRespone = CalendarEvent[];
/**
 * Child Object of CalendarResponse
 */
type CalendarEvent = {
    activityId: number;
    allDay: boolean;
    attendanceMode: number;
    attendeeUserId: number;
    backgroundColor: string;
    description: string;
    finish: string;
    guid: string;
    inClassStatus: boolean;
    instanceId: number;
    learningTaskId: number;
    lessonPlanConfigured: boolean;
    longTitle: string;
    longTitleWithoutTime: string;
    managerId: number;
    managers: Manager[];
    period: string;
    rollMarked: boolean;
    runningStatus: number;
    start: string;
    targetStudentId: number;
    teachingDaysOnly: boolean;
    textColor: string;
    title: string;
};
//# sourceMappingURL=calendar.d.ts.map