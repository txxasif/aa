import express from 'express';
import { loginController } from './login.controller.js';
const loginRoute = express();

loginRoute.post('/',loginController);

export default loginRoute;