const http = require('http')
const app = require('./app')
const config = require('config')

const port = config.get('port') || 3000
const server = http.createServer(app)


server.listen(port)