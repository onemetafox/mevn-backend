import dotenv from 'dotenv';
import path from 'path';
export const secretKey = "123456789qwertyuiop";
export const timeZone = "EST";
dotenv.config({
    path: path.resolve(`${process.env.NODE_ENV}.env`)
});
export const dbSetting = {
    host: process.env.MONGO_HOST,
    port: process.env.MONGO_PORT,
    user: process.env.MONGO_USER,
    pwd: process.env.MONGO_PWD,
    db: process.env.MONGO_DB,
    mongooseDebug: process.env.MONGOOSE_DEBUG
}