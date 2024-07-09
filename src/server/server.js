require('dotenv').config();
const Express = require('express');
const BodyParser = require('body-parser');

const server = Express();
server.use(BodyParser.json());

module.exports = { server: server };