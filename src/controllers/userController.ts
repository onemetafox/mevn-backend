import jwt from 'jwt-simple';
import User from '../models/userModel';
import { secretKey } from '../config/settings';
import {Request, Response, NextFunction} from "express";

export default class UserController
{
    public static profile(req:Request, res: Response, next: Function ){
        try{

        }catch(e){
            console.log(e);
        }
    }
}