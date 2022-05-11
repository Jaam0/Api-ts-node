import dotenv from "dotenv";
import Server from './models/server';


//Configuration
dotenv.config();


const server = new Server();

server.listen();