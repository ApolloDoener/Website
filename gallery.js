const filesystem = require("fs");

module.exports = {
    listFiles: function (path) {
        filesystem.readdir(path, function (err, files) {
            console.log(files);
            return files;
        })
    }
};