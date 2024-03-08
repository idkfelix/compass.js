/**
 * Request Object of \*TaskItem\* endpoint
 * @typedef {object} TaskItemRequest
 * @property {TaskItemBody} task
 */

/** 
 * Response Object of Get\*TaskItems endpoint
 * @typedef {TaskItemBody[]} TaskItemResponse 
 */

/**
 * Child Object of \*TaskItem\* request and response
 * @typedef {object} TaskItemBody
 * @property {number} [id=0]
 * @property {boolean} [status=false]
 * @property {string} taskName
 * @property {string} [dueDate=null]
 */