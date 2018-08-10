const express = require('express');
const router = express.Router();

const appConfig = require("./../../config/config")
const friendController = require("./../../app/controller/friends");
module.exports.setRouter = (app) => {
    let baseUrl = appConfig.apiVersion;
  

  app.post(`${baseUrl}/addNotification`, friendController.addNotification);
   /**
	 * @api {post} /api/v1/addNotification notification
	 * @apiVersion 0.0.1
	 * @apiGroup friend
	 *

	 * @apiParam {String} name name passed as a body parameter
     * @apiParam {String} nameBy   namBy passed as a body parameter
     * @apiParam {String} requestedTo requestedTo as a body parameter
     * @apiParam {String} requestedBy requestedBy passed as a body parameter
   
	
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "notification added",
	    "status": 200,
	    "data": [
					{
						name: "string",
						nameBy: "string",
						requestedTo: "string",
						requestedBy: "string",
					  createdOn :date
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
  app.post(`${baseUrl}/getAllNotification`, friendController.getPendingRequestsForUser);
   /**
	 * @api {post} /api/v1/addNotification notification
	 * @apiVersion 0.0.1
	 * @apiGroup friend
	 *

	 * @apiParam {String} userId userId passed as a body parameter
   
	
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "all notification to user",
	    "status": 200,
	    "data": [
					{
						name: "string",
						nameBy: "string",
						requestedTo: "string",
						requestedBy: "string",
					 
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
  app.post(`${baseUrl}/friendRequestAccepted`, friendController.addNewFriend);
   /**
	 * @api {post} /api/v1/friendRequestAccepted request accepted
	 * @apiVersion 0.0.1
	 * @apiGroup friend
	 *

	 * @apiParam {String} userId userId passed as a body parameter
   * @apiParam {String} friendId userId passed as a body parameter
   * @apiParam {String} userName userId passed as a body parameter
   * @apiParam {String} friendName userId passed as a body parameter
   
	
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "add friend and delete notification",
	    "status": 200,
	    "data": [
					{
						userId: "string",
						friendId: "string",
						 friendName: "string",
					 
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

app.post(`${baseUrl}/getAllFriends`, friendController.getAllFriendsOfUser);

  /**
	 * @api {post} /api/v1/getAllFriends all friends
	 * @apiVersion 0.0.1
	 * @apiGroup friend
	 *

	 * @apiParam {String} userId userId passed as a body parameter
   
	
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "add friend and delete notification",
	    "status": 200,
	    "data": [
					{
						userId: "string",
						friendId: "string",
						 friendName: "string",
					 
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
app.post(`${baseUrl}/deleteUserFriend`, friendController.deleteUserFriend);
 /**
	 * @api {post} /api/v1/getAllFriends all friends
	 * @apiVersion 0.0.1
	 * @apiGroup friend
	 *

	 * @apiParam {String} userId userId passed as a body parameter
    * @apiParam {String} friendId friendId passed as a body parameter
	
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "friend deletion successful",
	    "status": 200,
	    "data": [
					{
					
					 
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

app.post(`${baseUrl}/updateUserNotificationList`, friendController.updateUserNotificationList);

}