import { NextFunction, Request, Response } from 'express';
import { IPayload } from '../interfaces/userInterfaces';
import { verifyToken } from '../utils/JWTgenerator';

export default class verifyAuth {
  public static verifyToken(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    try {
      const { authorization } = req.headers;

      if (!authorization) return res.status(401).json({ message: 'Token not found' });

      const decoded = verifyToken(authorization);
      const { data } = decoded as IPayload;

      req.body.user = data;

      return next();
    } catch (error) {
      return res.status(401).json({ message: 'Token must be a valid token' });
    }
  }
}
