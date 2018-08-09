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
	 * @apiGroup create
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
    
   

   
    app.post(`${baseUrl}/logout`, userController.logout);

    app.get(`${baseUrl}/getAllUsers`, allUsersController.getListOfAllUsers);
    app.post(`${baseUrl}/forgotPassword`, userController.forgotPassword);
    app.post(`${baseUrl}/changePassword`, userController.changePassword);
}
