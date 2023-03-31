import { NextFunction, Request, Response } from 'express';
import MatcheService from '../services/MatcheServices';

export default class MatcheController {
  constructor(private matcheService: MatcheService) { }

  public getAll = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const { inProgress } = req.query;
      if (inProgress === undefined) {
        const { message } = await this.matcheService.getAll();
        res.status(200).json(message);
      } else {
        const status = inProgress === 'true';
        const { message } = await this.matcheService.getAllByStatus(status);
        res.status(200).json(message);
      }
    } catch (error) {
      next(error);
    }
  };
}
