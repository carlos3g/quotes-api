import cors from 'cors';
import express from 'express';

import { db } from './db';
import { routes } from './routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

(async () => {
  await db.sync();

  app.listen(process.env.PORT || 3333);
})();
