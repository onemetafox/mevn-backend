import jwt from 'jwt-simple';
import User from '../models/userModel';
import { secretKey } from '../config/settings';
import ResponseService from '../services/response.service';
import {Request, Response, NextFunction} from "express";

export default class AuthController
{
    public static signin(req:Request, res: Response, next: Function ){
        try{
            User.findOne({name: req.body.username})
            .then((result:any)=>{
                if(result){
                    if(result.password == jwt.encode(req.body.password, secretKey)){
                        res.json(ResponseService.success(result));
                    }else{
                        res.json(ResponseService.failure("Password is not correct!"));
                    }
                }else{
                    res.json(ResponseService.failure("User is not exist!"));
                }
            })
            .catch(e=>res.json(ResponseService.failure(e)));
        }catch(e){
            res.json(ResponseService.failure(e));
        }
    }
    public static signup(req:Request, res: Response, next: Function ){
        try{
            const user = new User({
                name: req.body.username,
                email: req.body.email,
                password: jwt.encode(req.body.password, secretKey)
            })
            user.save()
            .then((result:any)=>{
                res.json(ResponseService.success(result))
            })
            .catch((err:any)=>{
                res.json(ResponseService.failure(err));
            })
        }catch(e){
            res.json(ResponseService.failure(e));
        }
    }
}