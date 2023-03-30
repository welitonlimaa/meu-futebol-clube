import { Router } from 'express';
import verifyLogin from '../middlewares/verifyLogin';
import UserController from '../controllers/UserController';
import UserService from '../services/UserServices';

const loginRoute = Router();
const service = new UserService();
const controller = new UserController(service);

loginRoute.post('/', verifyLogin.verifyDataLogin, controller.login);

export default loginRoute;
