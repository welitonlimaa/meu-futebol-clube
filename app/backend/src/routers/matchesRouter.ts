import { Router } from 'express';
import verifyAuth from '../middlewares/verifyAuth';
import MatchesController from '../controllers/MatchesController';
import MatcheService from '../services/MatcheServices';

const matchesRoute = Router();
const service = new MatcheService();
const controller = new MatchesController(service);

matchesRoute.get('/', controller.getAll);

matchesRoute.patch('/:id/finish', verifyAuth.verifyToken, controller.updateStatus);

export default matchesRoute;
