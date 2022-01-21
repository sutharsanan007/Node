const http = require('http')

// Normal method
//const server = http.createServer( (req, res) => {
//    res.end('Welcome')
//})

// Using Event Emitter API
const server = http.createServer()
// emits request event
// subcribe to it/ listen to it/ respond to it
server.on('request', (req, res) => {
    res.end('Welcome')
})

server.listen(5000)