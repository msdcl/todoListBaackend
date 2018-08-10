define({ "api": [
  {
    "type": "post",
    "url": "/api/v1/addNewMultiUserTodoList",
    "title": "new todolist",
    "version": "0.0.1",
    "group": "Multi_TodoList",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>userId passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "listname",
            "description": "<p>listName passed as a body parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"new empty multi-list created\",\n\t    \"status\": 200,\n\t    \"data\": [\n\t\t\t\t\t{\n            id: \"string\",\n            userId:\"string\",\n            listname:\"string\",\n            sharedWith:Array\n\t\t\t\t\t}\n\t    \t\t]\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.,\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/multi-user.js",
    "groupTitle": "Multi_TodoList",
    "name": "PostApiV1Addnewmultiusertodolist"
  },
  {
    "type": "post",
    "url": "/api/v1/allfriendsToListShared",
    "title": "sharedWith",
    "version": "0.0.1",
    "group": "Multi_TodoList",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "listName",
            "description": "<p>listName passed as a body parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"All freinds, list shared\",\n\t    \"status\": 200,\n\t    \"data\": [\n\t\t\t\t\t{\n            id: \"string\",\n            userId:\"string\"\n            listname:\"string\",\n            sharedWith:Array\n\t\t\t\t\t}\n\t    \t\t]\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.,\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/multi-user.js",
    "groupTitle": "Multi_TodoList",
    "name": "PostApiV1Allfriendstolistshared"
  },
  {
    "type": "post",
    "url": "/api/v1/deleteMultiUserList",
    "title": "delete list",
    "version": "0.0.1",
    "group": "Multi_TodoList",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>id passed as a body parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"deletion successfull\",\n\t    \"status\": 200,\n\t    \"data\": [\n\t\t\t\t\t{\n           id:\"string\"\n\t\t\t\t\t}\n\t    \t\t]\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.,\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/multi-user.js",
    "groupTitle": "Multi_TodoList",
    "name": "PostApiV1Deletemultiuserlist"
  },
  {
    "type": "post",
    "url": "/api/v1/getAllMultiUserTodoLists",
    "title": "all todolist",
    "version": "0.0.1",
    "group": "Multi_TodoList",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>userId passed as a body parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"All multi-todo list\",\n\t    \"status\": 200,\n\t    \"data\": [\n\t\t\t\t\t{\n            id: \"string\",\n            userId:\"string\",\n            listname:\"string\",\n            sharedWith:Array\n\t\t\t\t\t}\n\t    \t\t]\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.,\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/multi-user.js",
    "groupTitle": "Multi_TodoList",
    "name": "PostApiV1Getallmultiusertodolists"
  },
  {
    "type": "post",
    "url": "/api/v1/removeFriendFromSharedList",
    "title": "remove sharing",
    "version": "0.0.1",
    "group": "Multi_TodoList",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "listName",
            "description": "<p>listName passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "friendId",
            "description": "<p>friendId passed as a body parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"Deletion successfull from list shared\",\n\t    \"status\": 200,\n\t    \"data\": [\n\t\t\t\t\t{\n            id: \"string\",\n            userId:\"string\"\n            listname:\"string\",\n            sharedWith:Array\n\t\t\t\t\t}\n\t    \t\t]\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.,\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/multi-user.js",
    "groupTitle": "Multi_TodoList",
    "name": "PostApiV1Removefriendfromsharedlist"
  },
  {
    "type": "post",
    "url": "/api/v1/shareTodoListWithFriend",
    "title": "to share",
    "version": "0.0.1",
    "group": "Multi_TodoList",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "listName",
            "description": "<p>listName passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "friendid",
            "description": "<p>friendId passed as a body parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"sharing todolist Successful\",\n\t    \"status\": 200,\n\t    \"data\": [\n\t\t\t\t\t{\n                  ok:1\n\t\t\t\t\t}\n\t    \t\t]\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.,\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/multi-user.js",
    "groupTitle": "Multi_TodoList",
    "name": "PostApiV1Sharetodolistwithfriend"
  },
  {
    "type": "post",
    "url": "/api/v1/addTaskToMultiUserList",
    "title": "add task",
    "version": "0.0.1",
    "group": "Multi_user_task",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>userId passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "listName",
            "description": "<p>listname passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "taskName",
            "description": "<p>taskName passed as a body parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"new task created in multi user list\",\n\t    \"status\": 200,\n\t    \"data\": [\n\t\t\t\t\t{\n            id:\"string\",\n\t\t\t\t\t\tuserId: \"string\",\n\t\t\t\t\t\tlistname: \"string\",\n\t\t\t\t\t\t taskName: \"string\",\n\t\t\t\t\t   isDone : boolean\n\t\t\t\t\t}\n\t    \t\t]\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.,\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/multi-user-tasks.js",
    "groupTitle": "Multi_user_task",
    "name": "PostApiV1Addtasktomultiuserlist"
  },
  {
    "type": "post",
    "url": "/api/v1/deleteTasksOfMultiUserList",
    "title": "delete task",
    "version": "0.0.1",
    "group": "Multi_user_task",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>id passed as a body parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"deletion successful-task-multiuser\",\n\t    \"status\": 200,\n\t    \"data\": [\n\t\t\t\t\t{\n            id:\"string\",\n\t\t\t\t\t\tuserId: \"string\",\n\t\t\t\t\t\tlistname: \"string\",\n\t\t\t\t\t\t taskName: \"string\",\n\t\t\t\t\t   isDone : boolean\n\t\t\t\t\t}\n\t    \t\t]\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.,\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/multi-user-tasks.js",
    "groupTitle": "Multi_user_task",
    "name": "PostApiV1Deletetasksofmultiuserlist"
  },
  {
    "type": "post",
    "url": "/api/v1/getAllTasksOfMultiUserList",
    "title": "all tasks",
    "version": "0.0.1",
    "group": "Multi_user_task",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "listName",
            "description": "<p>listname passed as a body parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"All tasks of multi user list\",\n\t    \"status\": 200,\n\t    \"data\": [\n\t\t\t\t\t{\n            id:\"string\",\n\t\t\t\t\t\tuserId: \"string\",\n\t\t\t\t\t\tlistname: \"string\",\n\t\t\t\t\t\t taskName: \"string\",\n\t\t\t\t\t   isDone : boolean\n\t\t\t\t\t}\n\t    \t\t]\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.,\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/multi-user-tasks.js",
    "groupTitle": "Multi_user_task",
    "name": "PostApiV1Getalltasksofmultiuserlist"
  },
  {
    "type": "post",
    "url": "/api/v1/updateTaskOfMultiUserList",
    "title": "update task",
    "version": "0.0.1",
    "group": "Multi_user_task",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>id passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "taskName",
            "description": "<p>taskName passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "isDone",
            "description": "<p>isDone passed as a body parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"Edition successful-task-multiuser\",\n\t    \"status\": 200,\n\t    \"data\": [\n\t\t\t\t\t{\n           ok:1\n\t\t\t\t\t}\n\t    \t\t]\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.,\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/multi-user-tasks.js",
    "groupTitle": "Multi_user_task",
    "name": "PostApiV1Updatetaskofmultiuserlist"
  },
  {
    "type": "post",
    "url": "/api/v1/getAllTextNotification",
    "title": "get notification",
    "version": "0.0.1",
    "group": "Notifications",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>userId passed as a body parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"All text notifications\",\n\t    \"status\": 200,\n\t    \"data\": [\n\t\t\t\t\t{\n            id: \"string\",\n            userId:\"string\"\n            text:\"string\",\n            isSeen :boolean\n\t\t\t\t\t}\n\t    \t\t]\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.,\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/multi-user.js",
    "groupTitle": "Notifications",
    "name": "PostApiV1Getalltextnotification"
  },
  {
    "type": "post",
    "url": "/api/v1/updateTextNotification",
    "title": "update notification",
    "version": "0.0.1",
    "group": "Notifications",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>userId passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "isSeen",
            "description": "<p>isSeen passed as a body parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"text notification updated\",\n\t    \"status\": 200,\n\t    \"data\": [\n\t\t\t\t\t{\n           ok:1\n\t\t\t\t\t}\n\t    \t\t]\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.,\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/multi-user.js",
    "groupTitle": "Notifications",
    "name": "PostApiV1Updatetextnotification"
  },
  {
    "type": "post",
    "url": "/api/v1/addNewSubTask",
    "title": "add task",
    "version": "0.0.1",
    "group": "Sub_Task",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "parentId",
            "description": "<p>parentId passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "subTask",
            "description": "<p>subTask passed as a body parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"Task created\",\n\t    \"status\": 200,\n\t    \"data\": [\n\t\t\t\t\t{\n            id:\"string\",\n\t\t\t\t\t\tparentId: \"string\",\n\t\t\t\t\t\t subTask: \"string\",\n\t\t\t\t\t   isDone : boolean\n\t\t\t\t\t}\n\t    \t\t]\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.,\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/subTask.js",
    "groupTitle": "Sub_Task",
    "name": "PostApiV1Addnewsubtask"
  },
  {
    "type": "post",
    "url": "/api/v1/deleteSubTask",
    "title": "delete task",
    "version": "0.0.1",
    "group": "Sub_Task",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>id passed as a body parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"deletion successful\",\n\t    \"status\": 200,\n\t    \"data\": [\n\t\t\t\t\t{\n            id:\"string\"\n\t\t\t\t\t}\n\t    \t\t]\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.,\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/subTask.js",
    "groupTitle": "Sub_Task",
    "name": "PostApiV1Deletesubtask"
  },
  {
    "type": "post",
    "url": "/api/v1/getAllSubTasks",
    "title": "all task",
    "version": "0.0.1",
    "group": "Sub_Task",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "parentId",
            "description": "<p>parentId passed as a body parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"All sub task in task\",\n\t    \"status\": 200,\n\t    \"data\": [\n\t\t\t\t\t{\n            id:\"string\",\n\t\t\t\t\t\tparentId: \"string\",\n\t\t\t\t\t\t subTask: \"string\",\n\t\t\t\t\t   isDone : boolean\n\t\t\t\t\t}\n\t    \t\t]\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.,\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/subTask.js",
    "groupTitle": "Sub_Task",
    "name": "PostApiV1Getallsubtasks"
  },
  {
    "type": "post",
    "url": "/api/v1/updateSubTaskStatus",
    "title": "update status",
    "version": "0.0.1",
    "group": "Sub_Task",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>id passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "isDone",
            "description": "<p>isDone passed as a body parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"sub task updated\",\n\t    \"status\": 200,\n\t    \"data\": [\n\t\t\t\t\t{\n           ok:1\n\t\t\t\t\t}\n\t    \t\t]\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.,\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/subTask.js",
    "groupTitle": "Sub_Task",
    "name": "PostApiV1Updatesubtaskstatus"
  },
  {
    "type": "post",
    "url": "/api/v1/addNewTask",
    "title": "add task",
    "version": "0.0.1",
    "group": "Task",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>userId passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "listName",
            "description": "<p>listname passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "taskName",
            "description": "<p>taskName passed as a body parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"Task created\",\n\t    \"status\": 200,\n\t    \"data\": [\n\t\t\t\t\t{\n            id:\"string\",\n\t\t\t\t\t\tuserId: \"string\",\n\t\t\t\t\t\tlistname: \"string\",\n\t\t\t\t\t\t taskName: \"string\",\n\t\t\t\t\t   isDone : boolean\n\t\t\t\t\t}\n\t    \t\t]\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.,\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/list.js",
    "groupTitle": "Task",
    "name": "PostApiV1Addnewtask"
  },
  {
    "type": "post",
    "url": "/api/v1/deleteTaskFromList",
    "title": "delete task",
    "version": "0.0.1",
    "group": "Task",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>id passed as a body parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"deletion successful\",\n\t    \"status\": 200,\n\t    \"data\": [\n\t\t\t\t\t{\n\t\t\t\t\t\tid: \"string\",\n\n\t\t\t\t\t}\n\t    \t\t]\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.,\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/list.js",
    "groupTitle": "Task",
    "name": "PostApiV1Deletetaskfromlist"
  },
  {
    "type": "post",
    "url": "/api/v1/getAllTask",
    "title": "get tasks",
    "version": "0.0.1",
    "group": "Task",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>userId passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "listName",
            "description": "<p>listname passed as a body parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"All tasks of a list\",\n\t    \"status\": 200,\n\t    \"data\": [\n\t\t\t\t\t{\n            id: \"string\",\n            userId:\"string\",\n\t\t\t\t\t\tlistname: \"string\",\n\t\t\t\t\t\t taskName: \"string\",\n\t\t\t\t\t   isDone : boolean\n\t\t\t\t\t}\n\t    \t\t]\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.,\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/list.js",
    "groupTitle": "Task",
    "name": "PostApiV1Getalltask"
  },
  {
    "type": "post",
    "url": "/api/v1/updateTaskFromList",
    "title": "update task",
    "version": "0.0.1",
    "group": "Task",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>id passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "taskName",
            "description": "<p>taskName passed as a body parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"task updated\",\n\t    \"status\": 200,\n\t    \"data\": [\n\t\t\t\t\t{\n\t\t\t\t\tok:\"1\"\n\n\t\t\t\t\t}\n\t    \t\t]\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.,\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/list.js",
    "groupTitle": "Task",
    "name": "PostApiV1Updatetaskfromlist"
  },
  {
    "type": "post",
    "url": "/api/v1/addNewTodoList",
    "title": "new todolist",
    "version": "0.0.1",
    "group": "TodoList",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>userId passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "listname",
            "description": "<p>listName passed as a body parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"new empty list created\",\n\t    \"status\": 200,\n\t    \"data\": [\n\t\t\t\t\t{\n            id: \"string\",\n            userId:\"string\",\n            listname:\"string\",\n\n\t\t\t\t\t}\n\t    \t\t]\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.,\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/list.js",
    "groupTitle": "TodoList",
    "name": "PostApiV1Addnewtodolist"
  },
  {
    "type": "post",
    "url": "/api/v1/deleteTodoList",
    "title": "delete list",
    "version": "0.0.1",
    "group": "TodoList",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>id passed as a body parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"List deletion successful\",\n\t    \"status\": 200,\n\t    \"data\": [\n\t\t\t\t\t{\n\t\t\t\t\t\tid: \"string\",\n\n\t\t\t\t\t}\n\t    \t\t]\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.,\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/list.js",
    "groupTitle": "TodoList",
    "name": "PostApiV1Deletetodolist"
  },
  {
    "type": "post",
    "url": "/api/v1/getAllTodoList",
    "title": "todolists",
    "version": "0.0.1",
    "group": "TodoList",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>userId passed as a body parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"All todo list\",\n\t    \"status\": 200,\n\t    \"data\": [\n\t\t\t\t\t{\n            id: \"string\",\n            userId:\"string\",\n            listname:\"string\",\n\n\t\t\t\t\t}\n\t    \t\t]\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.,\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/list.js",
    "groupTitle": "TodoList",
    "name": "PostApiV1Getalltodolist"
  },
  {
    "type": "post",
    "url": "/api/v1/addNotification",
    "title": "notification",
    "version": "0.0.1",
    "group": "friend",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>name passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nameBy",
            "description": "<p>namBy passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "requestedTo",
            "description": "<p>requestedTo as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "requestedBy",
            "description": "<p>requestedBy passed as a body parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"notification added\",\n\t    \"status\": 200,\n\t    \"data\": [\n\t\t\t\t\t{\n\t\t\t\t\t\tname: \"string\",\n\t\t\t\t\t\tnameBy: \"string\",\n\t\t\t\t\t\trequestedTo: \"string\",\n\t\t\t\t\t\trequestedBy: \"string\",\n\t\t\t\t\t  createdOn :date\n\t\t\t\t\t}\n\t    \t\t]\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.,\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/friends.js",
    "groupTitle": "friend",
    "name": "PostApiV1Addnotification"
  },
  {
    "type": "post",
    "url": "/api/v1/addNotification",
    "title": "notification",
    "version": "0.0.1",
    "group": "friend",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>userId passed as a body parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"all notification to user\",\n\t    \"status\": 200,\n\t    \"data\": [\n\t\t\t\t\t{\n\t\t\t\t\t\tname: \"string\",\n\t\t\t\t\t\tnameBy: \"string\",\n\t\t\t\t\t\trequestedTo: \"string\",\n\t\t\t\t\t\trequestedBy: \"string\",\n\t\t\t\t\t \n\t\t\t\t\t}\n\t    \t\t]\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.,\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/friends.js",
    "groupTitle": "friend",
    "name": "PostApiV1Addnotification"
  },
  {
    "type": "post",
    "url": "/api/v1/friendRequestAccepted",
    "title": "request accepted",
    "version": "0.0.1",
    "group": "friend",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>userId passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "friendId",
            "description": "<p>userId passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userName",
            "description": "<p>userId passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "friendName",
            "description": "<p>userId passed as a body parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"add friend and delete notification\",\n\t    \"status\": 200,\n\t    \"data\": [\n\t\t\t\t\t{\n\t\t\t\t\t\tuserId: \"string\",\n\t\t\t\t\t\tfriendId: \"string\",\n\t\t\t\t\t\t friendName: \"string\",\n\t\t\t\t\t \n\t\t\t\t\t}\n\t    \t\t]\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.,\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/friends.js",
    "groupTitle": "friend",
    "name": "PostApiV1Friendrequestaccepted"
  },
  {
    "type": "post",
    "url": "/api/v1/getAllFriends",
    "title": "all friends",
    "version": "0.0.1",
    "group": "friend",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>userId passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "friendId",
            "description": "<p>friendId passed as a body parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"friend deletion successful\",\n\t    \"status\": 200,\n\t    \"data\": [\n\t\t\t\t\t{\n\t\t\t\t\t\n\t\t\t\t\t \n\t\t\t\t\t}\n\t    \t\t]\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.,\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/friends.js",
    "groupTitle": "friend",
    "name": "PostApiV1Getallfriends"
  },
  {
    "type": "post",
    "url": "/api/v1/getAllFriends",
    "title": "all friends",
    "version": "0.0.1",
    "group": "friend",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>userId passed as a body parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"add friend and delete notification\",\n\t    \"status\": 200,\n\t    \"data\": [\n\t\t\t\t\t{\n\t\t\t\t\t\tuserId: \"string\",\n\t\t\t\t\t\tfriendId: \"string\",\n\t\t\t\t\t\t friendName: \"string\",\n\t\t\t\t\t \n\t\t\t\t\t}\n\t    \t\t]\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.,\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/friends.js",
    "groupTitle": "friend",
    "name": "PostApiV1Getallfriends"
  },
  {
    "type": "get",
    "url": "/api/v1/getAllUsers",
    "title": "all users",
    "version": "0.0.1",
    "group": "get",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"Users on this platform\",\n\t    \"status\": 200,\n\t    \"data\": [\n\t\t\t\t\t{\n\t\t\t\t\t\tuserId: \"string\",\n\t\t\t\t\t\tfirstName: \"string\",\n\t\t\t\t\t\tlastName: \"string\",\n\t\t\t\t\t\t\n\t\t\t\t\t}\n\t    \t\t]\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.,\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/user.js",
    "groupTitle": "get",
    "name": "GetApiV1Getallusers"
  },
  {
    "type": "post",
    "url": "/api/v1/changePassword",
    "title": "change password",
    "version": "0.0.1",
    "group": "user",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>email as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>code as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>password as a body parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"Password has been changed\",\n\t    \"status\": 200,\n\t    \"data\": [\n\t\t\t\t\t{\n\t\t\t\t\t\t notification:1\n\t\t\t\t\t\tok:1\n\t\t\t\t\t\t\n\t\t\t\t\t}\n\t    \t\t]\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.,\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/user.js",
    "groupTitle": "user",
    "name": "PostApiV1Changepassword"
  },
  {
    "type": "post",
    "url": "/api/v1/forgotPassword",
    "title": "forgot password",
    "version": "0.0.1",
    "group": "user",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>email as a body parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"We have send an email.\",\n\t    \"status\": 200,\n\t    \"data\": [\n\t\t\t\t\t{\n\t\t\t\t\t\temail: \"string\",\n\t\t\t\t\t\tcode: \"string\",\n\t\t\t\t\t\t\n\t\t\t\t\t}\n\t    \t\t]\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.,\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/user.js",
    "groupTitle": "user",
    "name": "PostApiV1Forgotpassword"
  },
  {
    "type": "post",
    "url": "/api/v1/login",
    "title": "do login",
    "version": "0.0.1",
    "group": "user",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>email as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>password passed as a body parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"login successfully\",\n\t    \"status\": 200,\n\t    \"data\": [\n\t\t\t\t\t{\n\t\t\t\t\t\tuserId: \"string\",\n\t\t\t\t\t\tauthToken: \"string\",\n\t\t\t\t\t\temail: \"string\",\n\t\t\t\t\t\t\n\t\t\t\t\t}\n\t    \t\t]\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.,\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/user.js",
    "groupTitle": "user",
    "name": "PostApiV1Login"
  },
  {
    "type": "post",
    "url": "/api/v1/signup",
    "title": "do signup",
    "version": "0.0.1",
    "group": "user",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "firstName",
            "description": "<p>firstName passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lastName",
            "description": "<p>lastName passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>email as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>password passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mobileNumber",
            "description": "<p>mobileNumber passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>code passed as a body parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"signup successfully\",\n\t    \"status\": 200,\n\t    \"data\": [\n\t\t\t\t\t{\n\t\t\t\t\t\tfirstName: \"string\",\n\t\t\t\t\t\tlastName: \"string\",\n\t\t\t\t\t\temail: \"string\",\n\t\t\t\t\t\tpassword: boolean,\n\t\t\t\t\t\tmobileNumber: \"string\",\n\t\t\t\t\t\tcode :number\n\t\t\t\t\t}\n\t    \t\t]\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.,\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/user.js",
    "groupTitle": "user",
    "name": "PostApiV1Signup"
  }
] });
