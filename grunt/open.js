var path = require('path');

module.exports = {
    localhost_karma : {
        path : 'http://local.coupang.com:9877'
    },
    coverage : {
        path : path.normalize(__dirname + "/../coverage/index.html")
    }
};