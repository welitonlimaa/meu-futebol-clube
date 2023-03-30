import * as jwt from 'jsonwebtoken';
import { SignOptions } from 'jsonwebtoken';

import IUser, { IPayload } from '../interfaces/userInterfaces';

const secret = process.env.JWT_SECRET || 'kakashi';

const configJWT: SignOptions = { algorithm: 'HS256', expiresIn: '24h' };

export const createToken = (data: IUser): string => jwt.sign({ data }, secret, configJWT);

export const verifyToken = (token: string) => jwt.verify(token, secret) as IPayload;
