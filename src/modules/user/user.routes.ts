/* eslint-disable @typescript-eslint/unbound-method */
/* eslint-disable @typescript-eslint/no-misused-promises */
import express from 'express';

import * as middlewares from '~/shared/middlewares';

import { userController } from './user.controller';
import { checkSchema } from './validators/userSchema';

const userRoutes = express.Router();

userRoutes.post('/users', checkSchema.store, middlewares.validation, userController.store);
userRoutes.get('/users/:id', checkSchema.show, middlewares.validation, userController.show);
userRoutes.delete('/users', middlewares.ensureAuthentication, middlewares.validation, userController.delete);
userRoutes.put('/users', middlewares.ensureAuthentication, checkSchema.put, middlewares.validation, userController.put);

export { userRoutes };
