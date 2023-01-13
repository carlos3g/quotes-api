import * as expressValidator from 'express-validator';

const put = expressValidator.checkSchema({
  name: {
    in: 'body',
    isString: true,
    isLength: {
      options: {
        min: 3,
        max: 255,
      },
      errorMessage: 'name must be between 3 and 255 characters.',
    },
  },
  email: {
    in: 'body',
    optional: true,
    isEmail: true,
  },
  password: {
    in: 'body',
    optional: true,
    isString: true,
    isLength: {
      options: {
        min: 8,
        max: 30,
      },
      errorMessage: 'name must be between 8 and 30 characters.',
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
  name: {
    in: 'body',
    exists: true,
    isString: true,
    isLength: {
      options: {
        min: 3,
        max: 255,
      },
      errorMessage: 'name must be between 3 and 255 characters.',
    },
  },
  email: {
    in: 'body',
    exists: true,
    isEmail: true,
  },
  password: {
    in: 'body',
    exists: true,
    isString: true,
    isLength: {
      options: {
        min: 8,
        max: 30,
      },
      errorMessage: 'name must be between 3 and 30 characters.',
    },
  },
});

export const checkSchema = { put, show, store };
