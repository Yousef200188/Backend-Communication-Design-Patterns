const http = require('http')
const webSocketServer = require('websocket').server
const httpServer = http.createServer()
const webSocket = new webSocketServer({"httpServer":httpServer})
let connections = []
httpServer.listen(8080,()=>{console.log("My server is listing on port 8082")})
webSocket.on('request',(request)=>{
    const connection = request.accept(null,request.origin);
    connection.on('message',(message)=>{
        connections.forEach((c)=>{
            c.send(`User ${connection.socket.remotePort} Sayas ${message.utf8Data}`)
        })

    })
    connections.push(connection)
    connections.forEach((c)=>{
        c.send(`User${connection.socket.remotePort}just connected`)
    })
})
