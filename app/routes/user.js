const express = require('express');
const router = express.Router();
const userController = require("./../../app/controller/user");
const appConfig = require("./../../config/config")
const allUsersController = require("./../../app/controller/allUsers");
module.exports.setRouter = (app) => {

    let baseUrl = appConfig.apiVersion;

    // defining routes.
     

    

    // params: firstName, lastName, email, mobileNumber, password
    app.post(`${baseUrl}/signup`, userController.signUpFunction);
      /**
	 * @api {post} /api/v1/signup do signup
	 * @apiVersion 0.0.1
	 * @apiGroup user
	 *

	 * @apiParam {String} firstName firstName passed as a body parameter
     * @apiParam {String} lastName   lastName passed as a body parameter
     * @apiParam {String} email email as a body parameter
     * @apiParam {String} password password passed as a body parameter
     * @apiParam {String} mobileNumber mobileNumber passed as a body parameter
     * @apiParam {String} code code passed as a body parameter
	
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "signup successfully",
	    "status": 200,
	    "data": [
					{
						firstName: "string",
						lastName: "string",
						email: "string",
						password: boolean,
						mobileNumber: "string",
						code :number
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
   

    
    app.post(`${baseUrl}/login`, userController.loginFunction);
    
     /**
	 * @api {post} /api/v1/login do login
	 * @apiVersion 0.0.1
	 * @apiGroup user
	 *

	
     * @apiParam {String} email email as a body parameter
     * @apiParam {String} password password passed as a body parameter
   
	
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "login successfully",
	    "status": 200,
	    "data": [
					{
						userId: "string",
						authToken: "string",
						email: "string",
						
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
   

   
    app.post(`${baseUrl}/logout`, userController.logout);

	app.get(`${baseUrl}/getAllUsers`, allUsersController.getListOfAllUsers);
	
	  /**
	 * @api {get} /api/v1/getAllUsers all users
	 * @apiVersion 0.0.1
	 * @apiGroup get
	 *
   
	
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "Users on this platform",
	    "status": 200,
	    "data": [
					{
						userId: "string",
						firstName: "string",
						lastName: "string",
						
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
	app.post(`${baseUrl}/forgotPassword`, userController.forgotPassword);
	 /**
	 * @api {post} /api/v1/forgotPassword forgot password
	 * @apiVersion 0.0.1
	 * @apiGroup user
	 *
   
	 * @apiParam {String} email email as a body parameter
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "We have send an email.",
	    "status": 200,
	    "data": [
					{
						email: "string",
						code: "string",
						
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
	app.post(`${baseUrl}/changePassword`, userController.changePassword);
	 /**
	 * @api {post} /api/v1/changePassword change password
	 * @apiVersion 0.0.1
	 * @apiGroup user
	 *
   
	 * @apiParam {String} email email as a body parameter
	 * @apiParam {String} code code as a body parameter
	 * @apiParam {String} password password as a body parameter
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "Password has been changed",
	    "status": 200,
	    "data": [
					{
						 notification:1
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
