import 'dotenv/config';
import 'reflect-metadata';

import cors from 'cors';
import express from 'express';

import { routes } from './routes';
import { dataSource } from './database';

const app = express();

void dataSource.initialize();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

app.listen(process.env.PORT || 3333);
