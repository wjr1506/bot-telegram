const Server = require('../server/server')

Server.server.post('/telegram', async (req, res) => {
    console.log(req.body)
    return res.sendStatus(200)
})