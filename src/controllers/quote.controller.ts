import { Request, Response } from 'express';

import { dataSource } from '../database';
import { IQuote } from '../interfaces/IQuote.interface';
import { Author, Quote } from '../entities';

const quoteController = {
  async delete(req: Request<Pick<IQuote, 'id'>>, res: Response) {
    const { id } = req.params;

    const { affected } = await dataSource.manager.delete(Quote, { id });

    if (!affected) {
      res.status(404).json({ errors: 'Quote not found.' });
      return;
    }

    res.status(200).json();
  },

  async index(req: Request<undefined, undefined, undefined, { authorId: number }>, res: Response) {
    const { authorId } = req.query;

    const quotes = await dataSource.manager.findBy(Quote, { author_id: authorId });

    res.status(200).json(quotes);
  },

  async put(req: Request<Pick<IQuote, 'id'>, undefined, Pick<IQuote, 'body'>>, res: Response) {
    const { id } = req.params;
    const { body } = req.body;

    const quote = await dataSource.manager.findOneBy(Quote, { id });

    if (!quote) {
      res.status(404).json({ errors: 'Quote not found.' });
      return;
    }

    quote.body = body;
    await dataSource.manager.save(quote);

    res.status(200).json();
  },

  async show(req: Request<Pick<IQuote, 'id'>>, res: Response) {
    const { id } = req.params;

    const quote = await dataSource.manager.findOneBy(Quote, { id });

    if (!quote) {
      res.status(404).json({ errors: 'Quote not found.' });
      return;
    }

    res.status(200).json(quote);
  },

  async store(req: Request<undefined, undefined, IQuote>, res: Response) {
    const { body, authorId } = req.body;

    const author = await dataSource.manager.findOneBy(Author, { id: authorId });

    if (!author) {
      res.status(404).json({ errors: 'Author not found.' });
      return;
    }

    const quote = dataSource.manager.create(Quote, { body, author });
    await dataSource.manager.save(quote);

    res.status(201).json(quote);
  },
};

export { quoteController };
