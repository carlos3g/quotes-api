import cors from 'cors';
import express, { Response } from 'express';
import database from './db';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (_, res: Response) => {
  res.json({ success: true });
});

(async () => {
  await database.sync();

  app.listen(process.env.PORT || 3333);
})();
