import Server from "./classes/server";
import { SERVER_PORT } from "./global/enviroment";
import router from "./routes/router";
import bodyParser from "body-parser";
import cors from 'cors';

const server = new Server();


// body parser
server.app.use( bodyParser.urlencoded({extended: true}));
server.app.use(bodyParser.json());

// cors 
server.app.use( cors({ origin: true, credentials: true}));


server.app.use('/', router);


server.start( () => {
    console.log(`Servidor corriendo en el puerto ${SERVER_PORT}`);
});
