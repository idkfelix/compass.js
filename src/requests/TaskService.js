/** 
 * TaskService.svc Requests
 * @namespace TaskService
 * @memberof module:CompassClient
 * @param {module:CompassClient.newRequest} newRequest
 */
function TaskService(newRequest){
  /** 
   * Requests all task items
   * @memberof module:CompassClient.TaskService
   * @param {number} [limit]
   * @returns {Promise<TaskItemResponse>} Array of user task objects
   */
  function getAllTaskItems(limit){
    return newRequest("TaskService",'GetAllTaskItems',
      {"page": 1,"start": 0,"limit": limit || 1000})
  }

  /** 
   * Requests all task items with status: False (visable on home page)
   * @memberof module:CompassClient.TaskService
   * @param {number} [limit]
   * @returns {Promise<TaskItemResponse>} Array of user task objects
   */
  function getTaskItems(limit){
    return newRequest("TaskService",'GetTaskItems',
      {"page": 1,"start": 0,"limit": limit || 1000})
  }
  
  /**
   * Creates a task
   * @memberof module:CompassClient.TaskService
   * @param {TaskItemBody} task
   * @returns {Promise<number>} Task Id
   */
  function saveTaskItem(task){
    /** @type {TaskItemRequest} */
    let data = {"task":task}
    return newRequest("TaskService",'SaveTaskItem',data)
  }

  /**
   * Deletes a task item 
   * @memberof module:CompassClient.TaskService
   * @param {TaskItemBody} task
   * @returns {Promise<number>} Task Id
   */
  function deleteTaskItem(task){
    /** @type {TaskItemRequest} */
    let data = {"task":task}
    return newRequest("TaskService",'DeleteTaskItem',data)
  }

  /**
   * Updates a task item by Id
   * @memberof module:CompassClient.TaskService
   * @param {TaskItemBody} task
   * @returns {Promise<null>} Returns nothing
   */
  function updateTaskItem(task){
    /** @type {TaskItemRequest} */
    let data = {"task":task}
    return newRequest("TaskService",'UpdateTaskItem',data)
  }

  return {
    getAllTaskItems,
    getTaskItems,
    saveTaskItem,
    deleteTaskItem,
    updateTaskItem
  }
}
export default TaskService