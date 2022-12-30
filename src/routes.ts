/* eslint-disable @typescript-eslint/no-misused-promises */
import express from 'express';

import { authorController } from './controllers/author.controller';

const routes = express.Router();

routes.post('/author', authorController.store.bind(authorController));
routes.get('/author/:id', authorController.show.bind(authorController));
routes.delete('/author/:id', authorController.delete.bind(authorController));
routes.put('/author/:id', authorController.put.bind(authorController));
routes.get('/authors', authorController.index.bind(authorController));

export { routes };
