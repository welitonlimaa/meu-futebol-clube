import { Router } from 'express';

import LeaderboardController from '../controllers/LeaderboardController';
import LeaderboardService from '../services/LeaderboardServices';

const leaderboardRoute = Router();

const service = new LeaderboardService();
const controller = new LeaderboardController(service);

leaderboardRoute.get('/', controller.getLeaderboardAllTeams);

leaderboardRoute.get('/home', controller.getLeaderboardHome);

leaderboardRoute.get('/away', controller.getLeaderboardAway);

export default leaderboardRoute;
