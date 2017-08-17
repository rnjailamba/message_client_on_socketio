var io = require('socket.io-client');

var escape = function(html) {
    return String(html)
        .replace(/&/g, '&amp;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
}

var unescape = function(html) {
    return String(html)
        .replace(/&amp;/g, '&')
        .replace(/&quot;/g, '"')
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>');
}

var callbackFn = function(error, callback) {
    callback = callback || function () {}

    return new Promise(function (resolve, reject) {
        var err = error;
        if (err) {
            var data = {"a":"b"};
            // reject as promise
            reject(data)
            // return callback using "error-first-pattern"
            return callback(err)
        }
        var data = {"b":"b"};
        resolve(data)
        return callback(null, data)
    })
}

var requestSocket = function (path, callback) {
    path = '/chatroom';
    // var socket = io('/chatroom', { transports: ['websocket'] });


    callback = callback || function () {}

    var socket = io.connect('http://lifeincontrol.herokuapp.com' + path, {reconnect: true});

    // Add a connect listener
    // socket.on('connect', function (socket) {
    //     console.log('Connected!');
    // });
    // socket.emit('CH01', 'me', 'test msg');

    return callback(null, socket)

}

module.exports = {
    escape: escape,
    unescape: unescape,
    requestSocket: requestSocket,
    callbackFn: callbackFn
};