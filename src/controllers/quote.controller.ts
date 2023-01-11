import { Request, Response } from 'express';

import { dataSource } from '~/database';
import { Author, Quote } from '~/entities';
import { AppError } from '~/errors/AppError';

const quoteController = {
  async delete(req: Request<Pick<Quote, 'id'>>, res: Response) {
    const { id } = req.params;

    const { affected } = await dataSource.manager.delete(Quote, { id });

    if (!affected) {
      throw new AppError('Quote not found.', 404);
    }

    res.status(200).json();
  },

  async index(req: Request<undefined, undefined, undefined, { authorId: number }>, res: Response) {
    const { authorId } = req.query;

    const quotes = await dataSource.manager.findBy(Quote, { author_id: authorId });

    res.status(200).json(quotes);
  },

  async put(req: Request<Pick<Quote, 'id'>, undefined, Pick<Quote, 'body'>>, res: Response) {
    const { id } = req.params;
    const { body } = req.body;

    const quote = await dataSource.manager.findOneBy(Quote, { id });

    if (!quote) {
      throw new AppError('Quote not found.', 404);
    }

    await dataSource.manager.update(Quote, { id }, { body });

    res.status(200).json();
  },

  async show(req: Request<Pick<Quote, 'id'>>, res: Response) {
    const { id } = req.params;

    const quote = await dataSource.manager.findOneBy(Quote, { id });

    if (!quote) {
      throw new AppError('Quote not found.', 404);
    }

    res.status(200).json(quote);
  },

  async store(req: Request<undefined, undefined, Quote>, res: Response) {
    const { body, author_id: authorId } = req.body;

    const author = await dataSource.manager.findOneBy(Author, { id: authorId });

    if (!author) {
      throw new AppError('Author not found.', 404);
    }

    const quote = dataSource.manager.create(Quote, { body, author });
    await dataSource.manager.save(quote);

    res.status(201).json(quote);
  },
};

export { quoteController };
