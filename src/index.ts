import 'dotenv/config'
import { server } from './server/server'

server.listen(process.env.PORT, () => {
    console.log('Server stated in http://localhost:' + process.env.PORT)
});