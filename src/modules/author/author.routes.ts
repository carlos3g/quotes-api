/* eslint-disable @typescript-eslint/unbound-method */
/* eslint-disable @typescript-eslint/no-misused-promises */
import express from 'express';

import * as middlewares from '~/shared/middlewares';

import { authorController } from './author.controller';
import { checkSchema } from './validators/authorSchema';

const authorRoutes = express.Router();

authorRoutes.post('/authors', checkSchema.store, middlewares.validation, authorController.store);
authorRoutes.get('/authors/:id', checkSchema.show, middlewares.validation, authorController.show);
authorRoutes.delete('/authors/:id', checkSchema.delete, middlewares.validation, authorController.delete);
authorRoutes.put('/authors/:id', checkSchema.put, middlewares.validation, authorController.put);
authorRoutes.get('/authors', middlewares.validation, authorController.index);

export { authorRoutes };
