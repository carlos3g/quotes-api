import * as expressValidator from 'express-validator';

const deletee = expressValidator.checkSchema({
  id: {
    in: 'params',
    exists: true,
    isNumeric: true,
  },
});

const put = expressValidator.checkSchema({
  id: {
    in: 'params',
    exists: true,
    isNumeric: true,
  },
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

export const checkSchema = { delete: deletee, put, show, store };
