/* eslint-disable @typescript-eslint/no-misused-promises */
import express from 'express';

import { authorController } from './controllers/author.controller';
import { quoteController } from './controllers/quote.controller';

const routes = express.Router();

routes.post('/author', authorController.store.bind(authorController));
routes.get('/author/:id', authorController.show.bind(authorController));
routes.delete('/author/:id', authorController.delete.bind(authorController));
routes.put('/author/:id', authorController.put.bind(authorController));
routes.get('/authors', authorController.index.bind(authorController));

routes.post('/quote', quoteController.store.bind(quoteController));
routes.get('/quote/:id', quoteController.show.bind(quoteController));
routes.delete('/quote/:id', quoteController.delete.bind(quoteController));
routes.put('/quote/:id', quoteController.put.bind(quoteController));
routes.get('/quotes', quoteController.index.bind(quoteController));

export { routes };
