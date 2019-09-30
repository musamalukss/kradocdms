// lib/app.ts
import * as express from "express";
import * as bodyParser from "body-parser";
import * as mongoose from "mongoose";
import { Routes } from "./routes/crmRoutes";

class App {

    public mongoUrl: string = 'mongodb://localhost/KRDMSDB';
    public routePrv: Routes = new Routes();
    public app: express.Application;

    constructor() {
        this.app = express();
        this.config();  
        this.mongoSetup();
        this.routePrv.routes(this.app); 
    }

    private mongoSetup(): void{
        mongoose.Promise = global.Promise;
        mongoose.connect(this.mongoUrl);    
    }


    private config(): void{
        // support application/json type post data
        this.app.use(bodyParser.json());
        //support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }

}

export default new App().app;