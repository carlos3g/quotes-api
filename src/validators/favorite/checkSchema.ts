import * as expressValidator from 'express-validator';

const deletee = expressValidator.checkSchema({
  id: {
    in: 'params',
    exists: true,
    isNumeric: true,
  },
});

const store = expressValidator.checkSchema({
  id: {
    in: 'params',
    exists: true,
    isNumeric: true,
  },
});

export const checkSchema = { delete: deletee, store };
