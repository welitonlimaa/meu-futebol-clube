import { NextFunction, Request, Response } from 'express';
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
      req.body.user = decoded;

      return next();
    } catch (error) {
      return res.status(401).json({ message: 'Token must be a valid token' });
    }
  }
}
