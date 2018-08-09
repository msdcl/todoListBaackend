//redis lib
const check = require("./checkLib.js");
const redis = require('redis');
//let client = redis.createClient();

// client.on('connect', () => {

//     console.log("Redis connection successfully opened");

// });
// function to set new todo list in redis hash
let setTodoListInHash = (hashName, key, value, callback) => {
   
    client.HMSET(hashName, [
        key, value
    ], (err, result) => {
        if (err) {
            console.log(err);
            callback(err, null)
        } else {

            console.log("todo list has been set in the hash map");
            console.log(result)
            callback(null, result)
        }
    });


}

// fucntion to get all todo list in redis hash
let getTodoListFromHash = (hashName, callback) => {
    

    client.HGETALL(hashName, (err, result) => {
        

        if (err) {

            console.log(err);
            callback(err, null)

        } else if (check.isEmpty(result)) {

            console.log("todo list is empty");
            console.log(result)

            callback(null, {})

        } else {
            console.log("get all data from redis hash")
            console.log(result);
            callback(null, result)

        }
    });

}
// function to delete a todo list from redis
let deleteTOdoListInHash = (hashName, key, callback) => {
       
    client.HDEL(hashName, key, (err, result) => {
        if (err) {
            console.log(err);
            callback(err, null)
        } else {

            console.log("todo list has been deleted in the hash map");
            console.log(result)
            callback(null, result)
        }
    });


}

let setTodoListInSet = (setName, value, callback) => {
   
    client.SADD([setName, value], (err, result) => {
        if (err) {
            console.log(err);
            callback(err, null)
        } else {

            console.log("todo list has been added in set set ");
            console.log(result)
            callback(null, result)
        }
    });


}

let getTodoListFromSet = (setName, callback) => {
    

    client.SMEMBERS(setName, (err, result) => {
        

        if (err) {

            console.log(err);
            callback(err, null)

        } else if (check.isEmpty(result)) {

            console.log("todo list is empty");
            console.log(result)

            callback(null, {})

        } else {
            console.log("get all data from redis SET")
            console.log(result);
            callback(null, result)

        }
    });

}

let deleteTOdoListFromSet = (setName, key, callback) => {
       
    client.SREM(setName, key, (err, result) => {
        if (err) {
            console.log(err);
            callback(err, null)
        } else {

            console.log("todo list has been deleted in the hash SET");
            console.log(result)
            callback(null, result)
        }
    });


}

module.exports = {
    deleteTOdoListInHash:deleteTOdoListInHash,
    getTodoListFromHash:getTodoListFromHash,
    setTodoListInHash:setTodoListInHash,
    setTodoListInSet:setTodoListInSet,
    getTodoListFromSet:getTodoListFromSet,
    deleteTOdoListFromSet:deleteTOdoListFromSet
}

