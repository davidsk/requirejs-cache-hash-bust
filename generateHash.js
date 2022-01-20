var crypto = require("crypto");
var fs = require("fs");
var path = require("path");

fs.readdir("./src/scripts/**/", (err, files) => {
    files.forEach(file => console.dir(file));
});
