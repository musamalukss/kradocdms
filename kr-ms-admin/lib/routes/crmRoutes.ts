// /lib/routes/crmRoutes.ts
import { Request, Response } from "express";
import { Userontroller } from "../controller/Controller";



export class Routes {


    public userController: Userontroller = new Userontroller()


    public routes(app): void {


        app.route('/')
            .get(this.userController.getAll);

        app.route('/createUser').post(this.userController.createUser);



    }
}