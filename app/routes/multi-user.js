const express = require('express');
const router = express.Router();

const appConfig = require("./../../config/config")
const multiController = require("./../../app/controller/multiTaskList");
module.exports.setRouter = (app) => {
    let baseUrl = appConfig.apiVersion;
  
 app.post(`${baseUrl}/shareTodoListWithFriend`, multiController.shareTodoListWithFriend);
  /**
	 * @api {post} /api/v1/shareTodoListWithFriend to share
	 * @apiVersion 0.0.1
	 * @apiGroup Multi-TodoList
	 *

	 * @apiParam {String} listName listName passed as a body parameter
	 * @apiParam {String} friendid friendId passed as a body parameter
 
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "sharing todolist Successful",
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

  app.post(`${baseUrl}/addNewMultiUserTodoList`,multiController.addNewEmptyList);
   /**
	 * @api {post} /api/v1/addNewMultiUserTodoList new todolist
	 * @apiVersion 0.0.1
	 * @apiGroup Multi-TodoList
	 *

	 * @apiParam {String} userId userId passed as a body parameter
   * @apiParam {String} listname listName passed as a body parameter
   
	
	
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "new empty multi-list created",
	    "status": 200,
	    "data": [
					{
            id: "string",
            userId:"string",
            listname:"string",
            sharedWith:Array
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



  app.post(`${baseUrl}/getAllMultiUserTodoLists`, multiController.getAllTodoLists);
   /**
	 * @api {post} /api/v1/getAllMultiUserTodoLists all todolist
	 * @apiVersion 0.0.1
	 * @apiGroup Multi-TodoList
	 *

	 * @apiParam {String} userId userId passed as a body parameter
 
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "All multi-todo list",
	    "status": 200,
	    "data": [
					{
            id: "string",
            userId:"string",
            listname:"string",
            sharedWith:Array
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
  app.post(`${baseUrl}/allfriendsToListShared`, multiController.friendsToListShared);
   /**
	 * @api {post} /api/v1/allfriendsToListShared sharedWith
	 * @apiVersion 0.0.1
	 * @apiGroup Multi-TodoList
	 *

	 * @apiParam {String} listName listName passed as a body parameter
 
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "All freinds, list shared",
	    "status": 200,
	    "data": [
					{
            id: "string",
            userId:"string"
            listname:"string",
            sharedWith:Array
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

  app.post(`${baseUrl}/removeFriendFromSharedList`, multiController.removeFriendFromSharedList);
     /**
	 * @api {post} /api/v1/removeFriendFromSharedList remove sharing
	 * @apiVersion 0.0.1
	 * @apiGroup Multi-TodoList
	 *

	 * @apiParam {String} listName listName passed as a body parameter
 	 * @apiParam {String} friendId friendId passed as a body parameter
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "Deletion successfull from list shared",
	    "status": 200,
	    "data": [
					{
            id: "string",
            userId:"string"
            listname:"string",
            sharedWith:Array
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


  app.post(`${baseUrl}/getAllTextNotification`, multiController.getAllTextNotification);

     /**
	 * @api {post} /api/v1/getAllTextNotification get notification
	 * @apiVersion 0.0.1
	 * @apiGroup Notifications
	 *
 	 * @apiParam {String} userId userId passed as a body parameter
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "All text notifications",
	    "status": 200,
	    "data": [
					{
            id: "string",
            userId:"string"
            text:"string",
            isSeen :boolean
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
  app.post(`${baseUrl}/updateTextNotification`, multiController.updateTextNotification);

     /**
	 * @api {post} /api/v1/updateTextNotification update notification
	 * @apiVersion 0.0.1
	 * @apiGroup Notifications
	 *
 	 * @apiParam {String} userId userId passed as a body parameter
  * @apiParam {String} isSeen isSeen passed as a body parameter
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "text notification updated",
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

  app.post(`${baseUrl}/deleteMultiUserList`, multiController.deleteMultiUserList);
      /**
	 * @api {post} /api/v1/deleteMultiUserList delete list
	 * @apiVersion 0.0.1
	 * @apiGroup Multi-TodoList
	 *
 	 * @apiParam {String} id id passed as a body parameter
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "deletion successfull",
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