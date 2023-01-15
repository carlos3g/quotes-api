/* eslint-disable @typescript-eslint/unbound-method */
/* eslint-disable @typescript-eslint/no-misused-promises */
import express from 'express';

import { sessionController } from './session.controller';
import { checkSchema } from './validators/sessionSchema';
import * as middlewares from '~/shared/middlewares';

const sessionRoutes = express.Router();

sessionRoutes.post('/auth/login', checkSchema.login, middlewares.validation, sessionController.store);

export { sessionRoutes };
