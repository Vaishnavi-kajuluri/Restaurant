import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import {connection} from './database/connect.js';
import { errorMiddle } from './error/error.js';
import routing from './routes/routing.js';
const app=express();
dotenv.config({path:'./config/config.env'});

app.use(cors({
    origin:[process.env.FRONTEND_URL],
    methods:["POST"],
    credentials:true,

}));
app.use(express.json());
app.use(express.urlencoded({extended:true }));
app.use('/api/v1/reservation',routing);
connection();
app.use(errorMiddle);
export default app;