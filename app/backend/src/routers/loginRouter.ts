import { Router } from 'express';

import UserController from '../controllers/UserController';
import UserService from '../services/UserServices';
import verifyAuth from '../middlewares/verifyAuth';

const loginRoute = Router();
const service = new UserService();
const controller = new UserController(service);

loginRoute.post('/', controller.login);

loginRoute.get('/role', verifyAuth.verifyToken, controller.loginRole);

export default loginRoute;
