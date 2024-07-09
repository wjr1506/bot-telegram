
const Server = require('./server/server')
const Route = require('./routes/routes')

Server.server.listen(process.env.PORT, () => {
    console.log('Server stated in http://localhost:' + process.env.PORT)
});