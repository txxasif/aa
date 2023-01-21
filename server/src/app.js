import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import loginRoute from './routes/login.routes.js';
const app = express();

app.use(cors({
    origin: 'http://localhost:3000'
}))

app.use(morgan('combined'));

app.use(express.json());

app.use('/login',loginRoute);

export {
    app
}


