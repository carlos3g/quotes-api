import { RequestHandler } from 'express';
import { validationResult } from 'express-validator';

import { validatorErrorsFormatter } from '../utils';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const validation: RequestHandler<any, any, any, any, any> = (req, res, next) => {
  const errorsObj = validationResult(req);

  if (!errorsObj.isEmpty()) {
    const errorsFormatted = validatorErrorsFormatter(errorsObj.array());
    res.status(400).json(errorsFormatted);
    return;
  }

  next();
};

export { validation };
