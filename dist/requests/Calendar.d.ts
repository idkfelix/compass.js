export default Calendar;
/**
 * Calendar.svc Requests
 * @namespace Calendar
 * @memberof module:CompassClient
 * @param {module:CompassClient.newRequest} newRequest
 */
declare function Calendar(newRequest: any): {
    getCalendarEventsByUser: (userId: number, startDate: string, endDate: string) => Promise<CalendarRespone>;
};
//# sourceMappingURL=Calendar.d.ts.map