const filesystem = require("fs");

module.exports = {
    listFiles: function (path) {
        return filesystem.readdirSync(path);
    }
};