import 'dotenv/config';
import 'express-async-errors';
import 'reflect-metadata';

import cors from 'cors';
import express from 'express';
import swaggerUi from 'swagger-ui-express';

import { dataSource } from '~/database';
import { errorHandler } from '~/middlewares';
import { routes } from '~/routes';
import swaggerDocs from '~/swagger.json';

const app = express();

void dataSource.initialize();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use(errorHandler);

app.listen(process.env.PORT || 3333);
