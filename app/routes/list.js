
const express = require('express');
const router = express.Router();

const appConfig = require("./../../config/config")
const taskController = require("./../../app/controller/taskList");
module.exports.setRouter = (app) => {
    let baseUrl = appConfig.apiVersion;


  app.post(`${baseUrl}/addNewTask`, taskController.addNewTask);
   /**
	 * @api {post} /api/v1/addNewTask add task
	 * @apiVersion 0.0.1
	 * @apiGroup Task
	 *

	 * @apiParam {String} userId userId passed as a body parameter
    * @apiParam {String} listName listname passed as a body parameter
	 * @apiParam {String} taskName taskName passed as a body parameter
	
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "Task created",
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
  app.post(`${baseUrl}/getAllTask`, taskController.getTaskFromList);
   /**
	 * @api {post} /api/v1/getAllTask get tasks
	 * @apiVersion 0.0.1
	 * @apiGroup Task
	 *

	 * @apiParam {String} userId userId passed as a body parameter
    * @apiParam {String} listName listname passed as a body parameter
	
	
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "All tasks of a list",
	    "status": 200,
	    "data": [
					{
            id: "string",
            userId:"string",
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

  app.post(`${baseUrl}/deleteTaskFromList`, taskController.deleteTaskFromList);
   /**
	 * @api {post} /api/v1/deleteTaskFromList delete task
	 * @apiVersion 0.0.1
	 * @apiGroup Task
	 *

	 * @apiParam {String} id id passed as a body parameter
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "deletion successful",
	    "status": 200,
	    "data": [
					{
						id: "string",

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
  app.post(`${baseUrl}/updateTaskFromList`, taskController.updateTask);
    /**
	 * @api {post} /api/v1/updateTaskFromList update task
	 * @apiVersion 0.0.1
	 * @apiGroup Task
	 *

	 * @apiParam {String} id id passed as a body parameter
    * @apiParam {String} taskName taskName passed as a body parameter
	
	
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "task updated",
	    "status": 200,
	    "data": [
					{
					ok:"1"

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
  app.post(`${baseUrl}/addNewTodoList`, taskController.addNewEmptyList);
   /**
	 * @api {post} /api/v1/addNewTodoList new todolist
	 * @apiVersion 0.0.1
	 * @apiGroup TodoList
	 *

	 * @apiParam {String} userId userId passed as a body parameter
   * @apiParam {String} listname listName passed as a body parameter
   
	
	
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "new empty list created",
	    "status": 200,
	    "data": [
					{
            id: "string",
            userId:"string",
            listname:"string",

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
  app.post(`${baseUrl}/getAllTodoList`, taskController.getAllTodoLists);
   /**
	 * @api {post} /api/v1/getAllTodoList  todolists
	 * @apiVersion 0.0.1
	 * @apiGroup TodoList
	 *

	 * @apiParam {String} userId userId passed as a body parameter
  
   
	
	
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "All todo list",
	    "status": 200,
	    "data": [
					{
            id: "string",
            userId:"string",
            listname:"string",

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
  app.post(`${baseUrl}/deleteTodoList`, taskController.deleteTodoList);
    /**
	 * @api {post} /api/v1/deleteTodoList delete list
	 * @apiVersion 0.0.1
	 * @apiGroup TodoList
	 *

	 * @apiParam {String} id id passed as a body parameter
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "List deletion successful",
	    "status": 200,
	    "data": [
					{
						id: "string",

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