define({ "api": [
  {
    "group": "User",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/users/reset",
    "title": "To send email with link to reset password",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>as Body parameter.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n           \"error\": false,\n           \"message\": \"Please click on the link sent to your registered email.\",\n           \"status\": 200,\n           \"data\": \"null(Email will be sent your registered email address with link to reset password)\"\n       }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured\",\n\t    \"status\": 500\n\t    \"data\": [ {\n              email: \"bejojeffrin23@gmail.com\"\n              firstName: \"Bejo\"\n              isAdmin: false\n              lastName: \"Jeffrin\"\n              mobileNumber: \"376-944\"\n              userId: \"WSa0F9ja\"\n              userName: \"Bejo-user\"\n         }]\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "User",
    "name": "PostApiUsersReset"
  },
  {
    "group": "User",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/users/:userId/change",
    "title": "To reset password",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>as Body parameter.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n           \"error\": false,\n           \"message\": \"Password changed successfully.\",\n           \"status\": 200,\n           \"data\": \"result\"\n       }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured\",\n\t    \"status\": 500\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "User",
    "name": "PostApiUsersUseridChange"
  },
  {
    "group": "User",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/login",
    "title": "user login.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>email of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>password of the user. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    {\n       \"error\": false,\n       \"message\": \"Login Successful\",\n       \"status\": 200,\n       \"data\": {\n           \"authToken\": \"eyJhbGciOiJIUertyuiopojhgfdwertyuVCJ9.MCwiZXhwIjoxNTIwNDI29tIiwibGFzdE5hbWUiE4In19.hAR744xIY9K53JWm1rQ2mc\",\n           \"userDetails\": {\n            email: \"bejojeffrin23@gmail.com\"\n            firstName: \"Bejo\"\n            isAdmin: false\n            lastName: \"Jeffrin\"\n            mobileNumber: \"376-944\"\n            userId: \"WSa0F9ja\"\n            userName: \"Bejo-user\"\n       }\n   }\n}",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n         \"error\": true,\n         \"message\": \"Error message\",\n         \"status\": 500/404/403,\n         \"data\": null\n        }",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "User",
    "name": "PostApiV1UsersLogin"
  },
  {
    "group": "User",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/logout",
    "title": "to logout user.",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"message\": \"Logged Out Successfully\",\n    \"status\": 200,\n    \"data\": null\n\n}",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n         \"error\": true,\n         \"message\": \"Error message\",\n         \"status\": 500/404/403,\n         \"data\": null\n        }",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "User",
    "name": "PostApiV1UsersLogout"
  },
  {
    "group": "User",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/signup",
    "title": "SignUp User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "firstName",
            "description": "<p>First name of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lastName",
            "description": "<p>lastName of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "number",
            "description": "<p>mobile number of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>email of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>password of the user. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n        \"error\": false,\n        \"message\": \"User created successfully\",\n        \"status\": 200,\n        \"data\": {\n                email: \"meetingscheduler1234@gmail.com\"\n                firstName: \"Check\"\n                isAdmin: false\n                lastName: \"Check\"\n                mobileNumber: \"971-999999999\"\n                password: \"223388\"\n                userName: \"Check-user\"\n                }\n            }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n         \"error\": true,\n         \"message\": \"Error message\",\n         \"status\": 500/404/403,\n         \"data\": null\n        }",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "User",
    "name": "PostApiV1UsersSignup"
  },
  {
    "type": "get",
    "url": "/api/v1/users/getevent/:statusId",
    "title": "get users particular todo",
    "version": "0.0.1",
    "group": "get",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "statusId",
            "description": "<p>of the user passed as a URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n \"error\":false,\n \"message\":\"event are listed this statusId\",\n \"status\":200,\n \"data\": [\n            {\n              userId:\"string\",\n              firstName:\"string\",\n              lastName:\"string\",\n              statusId:\"string\",\n              event:\"string\",\n              Done:\"string\"\n            }\n         ]  \n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n  \"error\":true,\n  \"message\":\"Error Occured\",\n  \"status\":500,\n  \"data\":null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "get",
    "name": "GetApiV1UsersGeteventStatusid"
  },
  {
    "type": "get",
    "url": "/api/v1/users/getfriends/:userId",
    "title": "get friends",
    "version": "0.0.1",
    "group": "get",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>of the user passed as a URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n \"error\":false,\n \"message\":\"Friends are listed\",\n \"status\":200,\n \"data\": [\n            {\n                friendId:\"string\",\n                senderfirstName:\"string\",\n                senderlastName:\"string\",\n                receiverfirstName:\"string\",\n                receiverlastname:\"string\",\n                senderId:\"string\",\n                receiverId:\"string\"\n            }\n         ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n  \"error\":true,\n  \"message\":\"Error Occured\",\n  \"status\":500,\n  \"data\":null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "get",
    "name": "GetApiV1UsersGetfriendsUserid"
  },
  {
    "type": "get",
    "url": "/api/v1/users/getrequest/:userId",
    "title": "get friend rrequest",
    "version": "0.0.1",
    "group": "get",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>of the user passed as a URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n \"error\":false,\n \"message\":\"requests are listed\",\n \"status\":200,\n \"data\": [\n            {\n                friendreqId:\"string\",\n                senderfirstName:\"string\",\n                senderlastName:\"string\",\n                receiverfirstName:\"string\",\n                receiverlastname:\"string\",\n                senderId:\"string\",\n                receiverId:\"string\"\n            }\n         ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n  \"error\":true,\n  \"message\":\"Error Occured\",\n  \"status\":400,\n  \"data\":null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "get",
    "name": "GetApiV1UsersGetrequestUserid"
  },
  {
    "type": "get",
    "url": "/api/v1/users/gettodo/:userId",
    "title": "get users todo",
    "version": "0.0.1",
    "group": "get",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>of the user passed as a URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n \"error\":false,\n \"message\":\"events are listed this userId\",\n \"status\":200,\n \"data\": [\n            {\n              userId:\"string\",\n              firstName:\"string\",\n              lastName:\"string\",\n              statusId:\"string\",\n              event:\"string\",\n              Done:\"string\"\n            }\n         ]  \n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n  \"error\":true,\n  \"message\":\"Error Occured\",\n  \"status\":400,\n  \"data\":null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "get",
    "name": "GetApiV1UsersGettodoUserid"
  },
  {
    "type": "get",
    "url": "/api/v1/users/getuser",
    "title": "get users",
    "version": "0.0.1",
    "group": "get",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n \"error\":false,\n \"message\":\"users are listed\",\n \"status\":200,\n \"data\": [\n            {\n              userId:\"string\",\n              firstName:\"string\",\n              lastName:\"string\",\n              email:\"string\",\n              countryCode:\"number\",\n              mobileNumbernumber:\"number\"\n            }\n         ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n  \"error\":true,\n  \"message\":\"Error Occured\",\n  \"status\":500,\n  \"data\":null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "get",
    "name": "GetApiV1UsersGetuser"
  },
  {
    "type": "post",
    "url": "/api/v1/users/acceptrequest",
    "title": "accept friend rrequest",
    "version": "0.0.1",
    "group": "post",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "friendreqId",
            "description": "<p>of the user passed as a body parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n \"error\":false,\n \"message\":\"Request are accepted\",\n \"status\":200,\n \"data\": [\n            {\n                friendId:\"string\",\n                senderfirstName:\"string\",\n                senderlastName:\"string\",\n                receiverfirstName:\"string\",\n                receiverlastname:\"string\",\n                senderId:\"string\",\n                receiverId:\"string\"\n            }\n         ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n  \"error\":true,\n  \"message\":\"Error Occured\",\n  \"status\":500,\n  \"data\":null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "post",
    "name": "PostApiV1UsersAcceptrequest"
  },
  {
    "type": "post",
    "url": "/api/v1/users/cratetodo",
    "title": "create users event",
    "version": "0.0.1",
    "group": "post",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>of the user passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "event",
            "description": "<p>of the user passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Done",
            "description": "<p>of the user passed as a body parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n \"error\":false,\n \"message\":\"event is created\",\n \"status\":200,\n \"data\": [\n            {\n              userId:\"string\",\n              firstName:\"string\",\n              lastName:\"string\",\n              statusId:\"string\",\n              event:\"string\",\n              Done:\"string\"\n            }\n         ]  \n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n  \"error\":true,\n  \"message\":\"Error Occured\",\n  \"status\":403,\n  \"data\":null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "post",
    "name": "PostApiV1UsersCratetodo"
  },
  {
    "type": "post",
    "url": "/api/v1/users/delete",
    "title": "delete users todo",
    "version": "0.0.1",
    "group": "post",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "statusId",
            "description": "<p>of the user passed as a body parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n \"error\":false,\n \"message\":\"events is Deleted Successfully\",\n \"status\":200,\n \"data\": []  \n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n  \"error\":true,\n  \"message\":\"Error Occured\",\n  \"status\":400,\n  \"data\":null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "post",
    "name": "PostApiV1UsersDelete"
  },
  {
    "type": "post",
    "url": "/api/v1/users/deletefriendrequest",
    "title": "delete friend request",
    "version": "0.0.1",
    "group": "post",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "friendreqId",
            "description": "<p>of the user passed as a body parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n \"error\":false,\n \"message\":\"Request is deleted successfully\",\n \"status\":200,\n \"data\": []\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n  \"error\":true,\n  \"message\":\"Error Occured\",\n  \"status\":403,\n  \"data\":null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "post",
    "name": "PostApiV1UsersDeletefriendrequest"
  },
  {
    "type": "post",
    "url": "/api/v1/users/sendrequest",
    "title": "send friend request",
    "version": "0.0.1",
    "group": "post",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "senderId",
            "description": "<p>of the user passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "receiverId",
            "description": "<p>of the user passed as a body parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n \"error\":false,\n \"message\":\"Request send succesfully\",\n \"status\":200,\n \"data\": [\n            {\n                friendreqId:\"string\",\n                senderfirstName:\"string\",\n                senderlastName:\"string\",\n                receiverfirstName:\"string\",\n                receiverlastname:\"string\",\n                senderId:\"string\",\n                receiverId:\"string\"\n            }\n         ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n  \"error\":true,\n  \"message\":\"Error Occured\",\n  \"status\":403,\n  \"data\":null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "post",
    "name": "PostApiV1UsersSendrequest"
  },
  {
    "type": "post",
    "url": "/api/v1/users/unfriend",
    "title": "delete friend",
    "version": "0.0.1",
    "group": "post",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "friendId",
            "description": "<p>of the user passed as a body parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n \"error\":false,\n \"message\":\"Unfriend successfully\",\n \"status\":200,\n \"data\": []\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n  \"error\":true,\n  \"message\":\"Error Occured\",\n  \"status\":403,\n  \"data\":null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "post",
    "name": "PostApiV1UsersUnfriend"
  },
  {
    "type": "post",
    "url": "/api/v1/users/update",
    "title": "edit users todo",
    "version": "0.0.1",
    "group": "post",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "statusId",
            "description": "<p>of the user passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "event",
            "description": "<p>of the user passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Done",
            "description": "<p>of the user passed as a body parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n \"error\":false,\n \"message\":\"events is updated Successfully\",\n \"status\":200,\n \"data\": []  \n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n  \"error\":true,\n  \"message\":\"Error Occured\",\n  \"status\":403,\n  \"data\":null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "post",
    "name": "PostApiV1UsersUpdate"
  }
] });
