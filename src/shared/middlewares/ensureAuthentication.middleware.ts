import { RequestHandler } from 'express';
import jwt from 'jsonwebtoken';

import { AppError } from '~/shared/errors/AppError';

interface ITokenPayload {
  iat: number;
  ext: number;
  sub: string;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ensureAuthentication: RequestHandler<any, any, any, any, any> = (req, _res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    throw new AppError('JWT token is missing', 401);
  }

  const [, token] = authHeader.split(' ');

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string);

    const { sub } = decoded as ITokenPayload;

    req.user = { id: Number(sub) };

    next();
  } catch (err) {
    throw new AppError('Invalid JWT token', 401);
  }
};

export { ensureAuthentication };
