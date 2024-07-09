import Express from 'express';
import { router } from '../routes/routes'

const server = Express();
server.use(router);
server.use(Express.json());

export { server };