import { Router } from 'express';
import MatchesController from '../controllers/MatchesController';
import MatcheService from '../services/MatcheServices';

const matchesRoute = Router();
const service = new MatcheService();
const controller = new MatchesController(service);

matchesRoute.get('/', controller.getAll);

export default matchesRoute;
