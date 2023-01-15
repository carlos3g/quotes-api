/* eslint-disable @typescript-eslint/unbound-method */
/* eslint-disable @typescript-eslint/no-misused-promises */
import express from 'express';

import * as middlewares from '~/shared/middlewares';

import { favoriteController } from './favorite.controller';
import { quoteController } from './quote.controller';
import { checkSchema as checkFavoriteSchema } from './validators/favoriteSchema';
import { checkSchema as checkQuoteSchema } from './validators/quoteSchema';

const quoteRoutes = express.Router();

quoteRoutes.post('/quotes', checkQuoteSchema.store, middlewares.validation, quoteController.store);
quoteRoutes.get('/quotes/:id', checkQuoteSchema.show, middlewares.validation, quoteController.show);
quoteRoutes.delete('/quotes/:id', checkQuoteSchema.delete, middlewares.validation, quoteController.delete);
quoteRoutes.put('/quotes/:id', checkQuoteSchema.put, middlewares.validation, quoteController.put);
quoteRoutes.post(
  '/quotes/:id/favorite',
  middlewares.ensureAuthentication,
  checkFavoriteSchema.store,
  middlewares.validation,
  favoriteController.store
);
quoteRoutes.delete(
  '/quotes/:id/favorite',
  middlewares.ensureAuthentication,
  checkFavoriteSchema.delete,
  middlewares.validation,
  favoriteController.delete
);
quoteRoutes.get('/quotes', checkQuoteSchema.index, middlewares.validation, quoteController.index);

export { quoteRoutes };
