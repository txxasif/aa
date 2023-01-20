import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

export const app = express();

app.use(cors({
    origin: 'http://localhost:3000'
}))

app.use(morgan('combined'));

app.use(express.json());



