import { NextFunction, Request, Response } from 'express';
import TeamService from '../services/TeamServices';

export default class TeamController {
  constructor(private teamService: TeamService) { }

  public getAll = async (
    _req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const { message } = await this.teamService.getAll();
      res.status(200).json(message);
    } catch (error) {
      next(error);
    }
  };

  public getById = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const { id } = req.params;
      const { message } = await this.teamService.getById(Number(id));
      res.status(200).json(message);
    } catch (error) {
      next(error);
    }
  };
}
