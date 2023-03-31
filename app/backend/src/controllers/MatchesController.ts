import { NextFunction, Request, Response } from 'express';
import MatcheService from '../services/MatcheServices';

export default class MatcheController {
  constructor(private matcheService: MatcheService) { }

  public getAll = async (
    _req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const { message } = await this.matcheService.getAll();
      res.status(200).json(message);
    } catch (error) {
      next(error);
    }
  };
}
