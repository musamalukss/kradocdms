import * as mongoose from 'mongoose';
import { user } from '../model/Model';
import { Request, Response } from 'express';

const users = mongoose.model('user', user);

export class Userontroller {

    public getAll(req: Request, res: Response) {     
        console.log("we get here ")
        users.find({},(err, contact) => {
            if (err) {
                res.send(err);
                console.log(err);
            }
            res.json(contact);
            console.log(contact);
        });
    }

    public createUser(req: Request, res: Response) {
      
        let user = new users(req.body);
        user.save((err, contact) => {

            if (err) {
                res.send(err)
            }

            res.json(contact);

        })
    }


    


}