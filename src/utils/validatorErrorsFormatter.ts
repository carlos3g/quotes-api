import { ValidationError } from 'express-validator';

import { ICustomErrorObjectFormat } from '~/interfaces';

const validatorErrorsFormatter = (errors: ValidationError[] = []) => {
  const objectFormated: ICustomErrorObjectFormat = { errors: {} };

  errors.forEach((error) => {
    objectFormated.errors[error.param] = error.msg as string;
  });

  return objectFormated;
};

export { validatorErrorsFormatter };
