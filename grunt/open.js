var path = require('path');

module.exports = {
    localhost_karma : {
        path : 'http://localhost:9877'
    },
    coverage : {
        path : path.normalize(__dirname + "/../coverage/index.html")
    }
};