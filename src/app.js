import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';
import { connect } from './dataBase/config.js';
const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());
app.use(morgan('dev'))

const port  = process.env.PORT || 3003;
const start = async () => {
    try {
        await connect();  
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    } catch (error) {
        console.error("Failed to connect to the database", error);
    }
}

start();
