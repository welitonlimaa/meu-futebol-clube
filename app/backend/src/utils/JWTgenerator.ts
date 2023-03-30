import * as jwt from 'jsonwebtoken';
import { SignOptions } from 'jsonwebtoken';

import IUser from '../interfaces/userInterfaces';

const secret = process.env.JWT_SECRET || 'kakashi';

const configJWT: SignOptions = { algorithm: 'HS256', expiresIn: '24h' };

export const createToken = (data: Omit<IUser, 'password'>): string =>
  jwt.sign({ data }, secret, configJWT);

export const verifyToken = (token: string) => jwt.verify(token, secret);
