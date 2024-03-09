import CompassClient from "../index.js";

export default class TaskService{
  /**
   * @description Create Class with CompassClient
   * @param {CompassClient} client 
   */
  constructor(client){
    /** @private */
    this.client = client
  }

  /** 
   * @description  Requests all task items
   * @param {number} [limit]
   * @returns {Promise<TaskItemResponse>} Array of user task objects
   */
  getAllTaskItems(limit){
    return this.client.newRequest("TaskService",'GetAllTaskItems',
      {"page": 1,"start": 0,"limit": limit || 1000})
  }

  /** 
   * @description Requests all task items with status: False (visable on home page)
   * @param {number} [limit]
   * @returns {Promise<TaskItemResponse>} Array of user task objects
   */
  getTaskItems(limit){
    return this.client.newRequest("TaskService",'GetTaskItems',
      {"page": 1,"start": 0,"limit": limit || 1000})
  }
  
  /**
   * @description Creates a task
   * @param {TaskItemBody} task
   * @returns {Promise<number>} Task Id
   */
  saveTaskItem(task){
    /** @type {TaskItemRequest} */
    let data = {"task":task}
    return this.client.newRequest("TaskService",'SaveTaskItem',data)
  }

  /**
   * @description Deletes a task item 
   * @param {TaskItemBody} task
   * @returns {Promise<number>} Task Id
   */
  deleteTaskItem(task){
    /** @type {TaskItemRequest} */
    let data = {"task":task}
    return this.client.newRequest("TaskService",'DeleteTaskItem',data)
  }

  /**
   * @description Updates a task item by Id
   * @param {TaskItemBody} task
   * @returns {Promise<null>} Returns nothing
   */
  updateTaskItem(task){
    /** @type {TaskItemRequest} */
    let data = {"task":task}
    return this.client.newRequest("TaskService",'UpdateTaskItem',data)
  }
}