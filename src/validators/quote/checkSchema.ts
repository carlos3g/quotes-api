import * as expressValidator from 'express-validator';

const deletee = expressValidator.checkSchema({
  id: {
    in: 'params',
    exists: true,
    isNumeric: true,
  },
});

const index = expressValidator.checkSchema({
  authorId: {
    in: 'query',
    isNumeric: true,
  },
});

const put = expressValidator.checkSchema({
  id: {
    in: 'params',
    exists: true,
    isNumeric: true,
  },
  body: {
    in: 'body',
    exists: true,
    isString: true,
    isLength: {
      options: {
        min: 1,
        max: 1000,
      },
      errorMessage: 'Body must be between 1 and 1000 characters.',
    },
  },
});

const show = expressValidator.checkSchema({
  id: {
    in: 'params',
    exists: true,
    isNumeric: true,
  },
});

const store = expressValidator.checkSchema({
  authorId: {
    in: 'body',
    exists: true,
    isNumeric: true,
  },
  body: {
    in: 'body',
    exists: true,
    isString: true,
    isLength: {
      options: {
        min: 1,
        max: 1000,
      },
      errorMessage: 'Body must be between 1 and 1000 characters.',
    },
  },
});

export const checkSchema = { delete: deletee, index, put, show, store };
