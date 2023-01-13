import * as expressValidator from 'express-validator';

const login = expressValidator.checkSchema({
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
      errorMessage: 'name must be between 8 and 30 characters.',
    },
  },
});

export { login };
