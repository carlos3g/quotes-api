import 'dotenv/config';
import 'reflect-metadata';

import cors from 'cors';
import express from 'express';
import swaggerUi from 'swagger-ui-express';

import { dataSource } from '~/database';
import swaggerDocs from '~/swagger.json';
import { routes } from '~/routes';

const app = express();

void dataSource.initialize();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.listen(process.env.PORT || 3333);
