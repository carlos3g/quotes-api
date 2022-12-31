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
  birthday: {
    in: 'body',
    isDate: { options: { strictMode: true } },
  },
  deathday: {
    in: 'body',
    isDate: { options: { strictMode: true } },
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
  birthday: {
    in: 'body',
    isDate: { options: { strictMode: true } },
  },
  deathday: {
    in: 'body',
    isDate: { options: { strictMode: true } },
  },
});

export const checkSchema = { delete: deletee, put, show, store };
