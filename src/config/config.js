import quoutes from "./quotes.json"

require('dotenv').config()


export const  EMAIL_JS_CONFIG =JSON.parse(process.env.REACT_APP_EMAIL_CONFIG) || {
    serviceID:"",
    userID:"",
    templateID:""
} 

export var GREAT_QUOTES = quoutes;
