let http = require("http")
let url = require("url")
let formidable = require('formidable')
let util = require("util")

function start(route, handle) {
    function onRequest(request, response) {
        let pathname = url.parse(request.url).pathname
        route(handle, pathname, response, request)
    }
    http.createServer(onRequest).listen(8888)
    console.log("Server has started.")
}

exports.start = start