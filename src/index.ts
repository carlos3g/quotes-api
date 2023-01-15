import 'dotenv/config';
import 'express-async-errors';
import 'reflect-metadata';

import cors from 'cors';
import express from 'express';
import swaggerUi from 'swagger-ui-express';

import { dataSource } from '~/database';
import { errorHandler } from '~/shared/middlewares';
import { authorRoutes } from '~/modules/author/author.routes';
import { quoteRoutes } from '~/modules/quote/quote.routes';
import { sessionRoutes } from '~/modules/session/session.routes';
import { userRoutes } from '~/modules/user/user.routes';
import swaggerDocs from '~/swagger.json';

const app = express();

void dataSource.initialize();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(authorRoutes);
app.use(quoteRoutes);
app.use(sessionRoutes);
app.use(userRoutes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use(errorHandler);

app.listen(process.env.PORT || 3333);
