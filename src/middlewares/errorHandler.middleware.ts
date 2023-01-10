import { NextFunction, Request, Response } from 'express';
import { AppError } from '~/errors/AppError';

type IErrorHandlerMiddleware = (err: Error, req: Request, res: Response, next: NextFunction) => void;

const errorHandler: IErrorHandlerMiddleware = (err, _req, res, _) => {
  if (err instanceof AppError) {
    res.status(err.statusCode).json({ status: 'error', message: err.message });
    return;
  }

  res.status(500).json({ status: 'error', message: 'Internal server error' });
};

export { errorHandler };
