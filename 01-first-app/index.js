"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var url = "http://jsonplaceholder.typicode.com/todos/1";
axios_1["default"].get(url).then(function (res) {
    var todo = res.data;
    var ID = todo.ID, title = todo.title, finished = todo.finished;
    console.log("\n    The Todo with ID: " + ID + "\n    Has a title of: " + title + "\n    Is it finished: " + finished + "\n  ");
});
