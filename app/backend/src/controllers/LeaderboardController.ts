import { NextFunction, Request, Response } from 'express';
import LeaderboardService from '../services/LeaderboardServices';

export default class LeaderboardController {
  constructor(private leaderboardService: LeaderboardService) { }

  public getLeaderboardHome = async (
    _req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const { message } = await this.leaderboardService.getLeaderboardHome();
      res.status(200).json(message);
    } catch (error) {
      next(error);
    }
  };

  public getLeaderboardAway = async (
    _req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const { message } = await this.leaderboardService.getLeaderboardAway();
      res.status(200).json(message);
    } catch (error) {
      next(error);
    }
  };

  public getLeaderboardAllTeams = async (
    _req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const { message } = await this.leaderboardService.getLeaderboardAllTeams();
      res.status(200).json(message);
    } catch (error) {
      next(error);
    }
  };
}
