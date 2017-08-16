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

var callbackFn = function(callback) {
    callback = callback || function () {}

    return new Promise(function (resolve, reject) {
        var data = {};
        var err = false;
        if (err) {
            // reject as promise
            reject(err)
            // return callback using "error-first-pattern"
            return callback(err)
        }
        resolve(data)
        return callback(null, data)
    })
}

module.exports = {
    escape: escape,
    unescape: unescape,
    callbackFn: callbackFn
};