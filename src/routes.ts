/* eslint-disable @typescript-eslint/no-misused-promises */
import express from 'express';

import {
  authorController,
  quoteController,
  userController,
  sessionController,
  favoriteController,
} from '~/controllers';
import * as validators from '~/validators';
import * as middlewares from '~/middlewares';

const routes = express.Router();

routes.post('/auth/login', validators.login, middlewares.validation, sessionController.store.bind(sessionController));

routes.post(
  '/author',
  validators.author.checkSchema.store,
  middlewares.validation,
  authorController.store.bind(authorController)
);
routes.get(
  '/author/:id',
  validators.author.checkSchema.show,
  middlewares.validation,
  authorController.show.bind(authorController)
);
routes.delete(
  '/author/:id',
  validators.author.checkSchema.delete,
  middlewares.validation,
  authorController.delete.bind(authorController)
);
routes.put(
  '/author/:id',
  validators.author.checkSchema.put,
  middlewares.validation,
  authorController.put.bind(authorController)
);
routes.get('/authors', middlewares.validation, authorController.index.bind(authorController));

routes.post(
  '/user',
  validators.user.checkSchema.store,
  middlewares.validation,
  userController.store.bind(userController)
);
routes.get(
  '/user/:id',
  validators.user.checkSchema.show,
  middlewares.validation,
  userController.show.bind(userController)
);
routes.delete(
  '/user',
  middlewares.ensureAuthentication,
  middlewares.validation,
  userController.delete.bind(userController)
);
routes.put(
  '/user',
  middlewares.ensureAuthentication,
  validators.user.checkSchema.put,
  middlewares.validation,
  userController.put.bind(userController)
);

routes.post(
  '/quote',
  validators.quote.checkSchema.store,
  middlewares.validation,
  quoteController.store.bind(quoteController)
);
routes.get(
  '/quote/:id',
  validators.quote.checkSchema.show,
  middlewares.validation,
  quoteController.show.bind(quoteController)
);
routes.delete(
  '/quote/:id',
  validators.quote.checkSchema.delete,
  middlewares.validation,
  quoteController.delete.bind(quoteController)
);
routes.put(
  '/quote/:id',
  validators.quote.checkSchema.put,
  middlewares.validation,
  quoteController.put.bind(quoteController)
);
routes.post(
  '/quote/:id/favorite',
  middlewares.ensureAuthentication,
  middlewares.validation,
  favoriteController.store.bind(favoriteController)
);
routes.get(
  '/quotes',
  validators.quote.checkSchema.index,
  middlewares.validation,
  quoteController.index.bind(quoteController)
);

export { routes };
