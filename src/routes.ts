/* eslint-disable @typescript-eslint/no-misused-promises */
import express from 'express';

import { authorController } from './controllers/author.controller';
import { quoteController } from './controllers/quote.controller';
import * as validators from './validators';

const routes = express.Router();

routes.post('/author', validators.quote.checkSchema.store, authorController.store.bind(authorController));
routes.get('/author/:id', validators.quote.checkSchema.show, authorController.show.bind(authorController));
routes.delete('/author/:id', validators.quote.checkSchema.delete, authorController.delete.bind(authorController));
routes.put('/author/:id', validators.quote.checkSchema.put, authorController.put.bind(authorController));
routes.get('/authors', validators.quote.checkSchema.index, authorController.index.bind(authorController));

routes.post('/quote', validators.quote.checkSchema.store, quoteController.store.bind(quoteController));
routes.get('/quote/:id', validators.quote.checkSchema.show, quoteController.show.bind(quoteController));
routes.delete('/quote/:id', validators.quote.checkSchema.delete, quoteController.delete.bind(quoteController));
routes.put('/quote/:id', validators.quote.checkSchema.put, quoteController.put.bind(quoteController));
routes.get('/quotes', validators.quote.checkSchema.index, quoteController.index.bind(quoteController));

export { routes };
