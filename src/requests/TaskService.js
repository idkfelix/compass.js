/**
 * @module TaskService
 * @param {*} newRequest
 */
function TaskService(newRequest){
  /** 
   * @memberof module:TaskService
   * @description  Requests all task items
   * @param {number} [limit]
   * @returns {Promise<TaskItemResponse>} Array of user task objects
   */
  function getAllTaskItems(limit){
    return newRequest("TaskService",'GetAllTaskItems',
      {"page": 1,"start": 0,"limit": limit || 1000})
  }

  /** 
   * @memberof module:TaskService
   * @description Requests all task items with status: False (visable on home page)
   * @param {number} [limit]
   * @returns {Promise<TaskItemResponse>} Array of user task objects
   */
  function getTaskItems(limit){
    return newRequest("TaskService",'GetTaskItems',
      {"page": 1,"start": 0,"limit": limit || 1000})
  }
  
  /**
   * @memberof module:TaskService
   * @description Creates a task
   * @param {TaskItemBody} task
   * @returns {Promise<number>} Task Id
   */
  function saveTaskItem(task){
    /** @type {TaskItemRequest} */
    let data = {"task":task}
    return newRequest("TaskService",'SaveTaskItem',data)
  }

  /**
   * @memberof module:TaskService
   * @description Deletes a task item 
   * @param {TaskItemBody} task
   * @returns {Promise<number>} Task Id
   */
  function deleteTaskItem(task){
    /** @type {TaskItemRequest} */
    let data = {"task":task}
    return newRequest("TaskService",'DeleteTaskItem',data)
  }

  /**
   * @memberof module:TaskService
   * @description Updates a task item by Id
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