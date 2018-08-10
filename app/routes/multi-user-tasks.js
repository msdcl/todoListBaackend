const express = require('express');
const router = express.Router();

const appConfig = require("./../../config/config")
const multiUserController = require("./../../app/controller/multiUserTasks");
module.exports.setRouter = (app) => {
    let baseUrl = appConfig.apiVersion;
  
 
  app.post(`${baseUrl}/addTaskToMultiUserList`,multiUserController.addNewTask);
   /**
	 * @api {post} /api/v1/addTaskToMultiUserList add task
	 * @apiVersion 0.0.1
	 * @apiGroup Multi-user-task
	 *

	 * @apiParam {String} userId userId passed as a body parameter
    * @apiParam {String} listName listname passed as a body parameter
	 * @apiParam {String} taskName taskName passed as a body parameter
	
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "new task created in multi user list",
	    "status": 200,
	    "data": [
					{
            id:"string",
						userId: "string",
						listname: "string",
						 taskName: "string",
					   isDone : boolean
					}
	    		]
	    	}
		}
	}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Error Occured.,
	    "status": 500,
	    "data": null
	   }
	 */
  app.post(`${baseUrl}/getAllTasksOfMultiUserList`, multiUserController.getAllTaskOfMultiUserList);

   /**
	 * @api {post} /api/v1/getAllTasksOfMultiUserList all tasks
	 * @apiVersion 0.0.1
	 * @apiGroup Multi-user-task
	 *
   * @apiParam {String} listName listname passed as a body parameter
	
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "All tasks of multi user list",
	    "status": 200,
	    "data": [
					{
            id:"string",
						userId: "string",
						listname: "string",
						 taskName: "string",
					   isDone : boolean
					}
	    		]
	    	}
		}
	}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Error Occured.,
	    "status": 500,
	    "data": null
	   }
	 */

  app.post(`${baseUrl}/deleteTasksOfMultiUserList`, multiUserController.deleteTaskFromMultiUserList);
   
    /**
	 * @api {post} /api/v1/deleteTasksOfMultiUserList delete task
	 * @apiVersion 0.0.1
	 * @apiGroup Multi-user-task
	 *
   * @apiParam {String} id id passed as a body parameter
	
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "deletion successful-task-multiuser",
	    "status": 200,
	    "data": [
					{
            id:"string",
						userId: "string",
						listname: "string",
						 taskName: "string",
					   isDone : boolean
					}
	    		]
	    	}
		}
	}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Error Occured.,
	    "status": 500,
	    "data": null
	   }
	 */

  app.post(`${baseUrl}/updateTaskOfMultiUserList`, multiUserController.updateTaskOfMultiUserList);
   /**
	 * @api {post} /api/v1/updateTaskOfMultiUserList update task
	 * @apiVersion 0.0.1
	 * @apiGroup Multi-user-task
	 *
   * @apiParam {String} id id passed as a body parameter
   *  @apiParam {String} taskName taskName passed as a body parameter
   *  @apiParam {String} isDone isDone passed as a body parameter
	
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "Edition successful-task-multiuser",
	    "status": 200,
	    "data": [
					{
           ok:1
					}
	    		]
	    	}
		}
	}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Error Occured.,
	    "status": 500,
	    "data": null
	   }
	 */
}