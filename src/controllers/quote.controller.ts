import { Request, Response } from 'express';

import { Quote } from '~/entities';
import { AppError } from '~/errors/AppError';
import { AuthorRepository, QuoteRepository } from '~/repositories';

const authorRepository = new AuthorRepository();
const quoteRepository = new QuoteRepository();

const quoteController = {
  async delete(req: Request<Pick<Quote, 'id'>>, res: Response) {
    const { id } = req.params;

    const hasDeleted = await quoteRepository.deleteOne(id);

    if (!hasDeleted) {
      throw new AppError('Quote id invalid.', 404);
    }

    res.status(200).json();
  },

  async index(req: Request<undefined, undefined, undefined, { authorId: number }>, res: Response) {
    const { authorId } = req.query;

    const quotes = await quoteRepository.findAllBy({ author_id: authorId });

    res.status(200).json(quotes);
  },

  async put(req: Request<Pick<Quote, 'id'>, undefined, Pick<Quote, 'body'>>, res: Response) {
    const { id } = req.params;

    const hasUpdated = await quoteRepository.updateOne(id, req.body);

    if (!hasUpdated) {
      throw new AppError('Quote id invalid.', 404);
    }

    res.status(200).json();
  },

  async show(req: Request<Pick<Quote, 'id'>>, res: Response) {
    const { id } = req.params;

    const quote = await quoteRepository.findOne(id);

    if (!quote) {
      throw new AppError('Quote not found.', 404);
    }

    res.status(200).json(quote);
  },

  async store(req: Request<undefined, undefined, Quote>, res: Response) {
    const { author_id: authorId } = req.body;

    const author = await authorRepository.findOne(authorId);

    if (!author) {
      throw new AppError('Author not found.', 404);
    }

    const quote = await quoteRepository.create(req.body);

    res.status(201).json(quote);
  },
};

export { quoteController };
