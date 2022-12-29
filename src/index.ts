import express, { Response } from 'express';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (_, res: Response) => {
  res.json({ success: true });
});

app.listen(process.env.PORT || 3333);
