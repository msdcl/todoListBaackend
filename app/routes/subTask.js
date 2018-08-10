const express = require('express');
const router = express.Router();

const appConfig = require("./../../config/config")
const subTaskController = require("./../../app/controller/subTask");
module.exports.setRouter = (app) => {
    let baseUrl = appConfig.apiVersion;
  
 app.post(`${baseUrl}/updateSubTaskStatus`, subTaskController.updateSubTask);

  /**
	 * @api {post} /api/v1/updateSubTaskStatus update status
	 * @apiVersion 0.0.1
	 * @apiGroup Sub-Task
	 *

	 * @apiParam {String} id id passed as a body parameter
	 * @apiParam {String} isDone isDone passed as a body parameter
	
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "sub task updated",
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

  app.post(`${baseUrl}/addNewSubTask`, subTaskController.addNewSubTask);
  /**
	 * @api {post} /api/v1/addNewSubTask add task
	 * @apiVersion 0.0.1
	 * @apiGroup Sub-Task
	 *

	 * @apiParam {String} parentId parentId passed as a body parameter
	 * @apiParam {String} subTask subTask passed as a body parameter
	
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "Task created",
	    "status": 200,
	    "data": [
					{
            id:"string",
						parentId: "string",
						 subTask: "string",
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
  app.post(`${baseUrl}/getAllSubTasks`, subTaskController.getAllSubTaskOfTask);

  /**
	 * @api {post} /api/v1/getAllSubTasks all task
	 * @apiVersion 0.0.1
	 * @apiGroup Sub-Task
	 *

	 * @apiParam {String} parentId parentId passed as a body parameter
	 
	
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "All sub task in task",
	    "status": 200,
	    "data": [
					{
            id:"string",
						parentId: "string",
						 subTask: "string",
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

  app.post(`${baseUrl}/deleteSubTask`, subTaskController.deleteSubTaskFromList);
  /**
	 * @api {post} /api/v1/deleteSubTask delete task
	 * @apiVersion 0.0.1
	 * @apiGroup Sub-Task
	 *

	 * @apiParam {String} id id passed as a body parameter
	 
	
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "deletion successful",
	    "status": 200,
	    "data": [
					{
            id:"string"
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