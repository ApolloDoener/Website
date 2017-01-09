const filesystem = require("fs");

module.exports = {
    listFiles: function (path) {
        const files = filesystem.readdirSync(path);
        console.log(files);
        return files;
    }
};