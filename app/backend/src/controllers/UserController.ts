import { NextFunction, Request, Response } from 'express';
import UserService from '../services/UserServices';

export default class UserController {
  constructor(private userService: UserService) { }

  public login = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const { body } = req;
      const { type, message } = await this.userService.login(body);
      res.status(type).json(message);
    } catch (error) {
      next(error);
    }
  };

  public loginRole = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const { user } = req.body;
      const { role } = user;
      res.status(200).json({ role });
    } catch (error) {
      next(error);
    }
  };
}
