import { Router } from 'express';
import TeamController from '../controllers/TeamController';
import TeamService from '../services/TeamServices';

const teamRoute = Router();
const service = new TeamService();
const controller = new TeamController(service);

teamRoute.get('/', controller.getAll);

export default teamRoute;
