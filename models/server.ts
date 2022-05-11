import cors from "cors";
import express,{Application} from "express";

import db from "../database/connection";
import usersRoutes from '../routes/users.route';

class Server {

    private app : Application;
    private port : string;
    private paths = {
        users:'/api/users'
    };

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '3000';

        //Initial Methods
        this.dbConnection();
        this.middlewares();
        this.routes();
    }

    //TODO: Connect to data base
    async dbConnection() {
        try {
            await db.authenticate();
            console.log('DataBase is running');
        } 
        catch (error) {
            throw new Error( error as string);
        }
    }

    middlewares() {
        //CORS
        this.app.use( cors() );

        //Body read
        this.app.use(express.json());

        //Public directory
        this.app.use(express.static('public'));
    }

    routes() {
        this.app.use(this.paths.users,usersRoutes);
    }

    listen() {
        this.app.listen( this.port, () => {
            console.log(`Server running on port ${this.port}`);
        });
    }

}

export default Server;