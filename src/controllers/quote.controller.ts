import { Request, Response } from 'express';

import { db } from '../db';
import { IQuote } from '../interfaces/IQuote.interface';

const { models } = db;

export const quoteController = {
  async delete(req: Request<Pick<IQuote, 'id'>>, res: Response) {
    const { id } = req.params;

    if (!id) {
      res.status(400).json({ error: 'URL param missing: id' });
      return;
    }

    const rowsDeleted = await models.quote.destroy({ where: { id } });

    if (!rowsDeleted) {
      res.status(404).json({ error: 'Quote not found.' });
      return;
    }

    res.status(200).json();
  },

  async index(_: Request, res: Response) {
    const quotes = await models.quote.findAll();

    res.status(200).json(quotes);
  },

  async put(req: Request<Pick<IQuote, 'id'>, undefined, IQuote>, res: Response) {
    const { id } = req.params;
    const { body } = req.body;

    const [rowsUpdated] = await models.quote.update({ body }, { where: { id } });

    if (!rowsUpdated) {
      res.status(404).json({ error: 'Quote not found.' });
      return;
    }

    res.status(200).json();
  },

  async show(req: Request<Pick<IQuote, 'id'>>, res: Response) {
    const { id } = req.params;

    const quote = await models.quote.findByPk(id);

    if (!quote) {
      res.status(404).json({ error: 'Quote not found.' });
      return;
    }

    res.status(200).json(quote);
  },

  async store(req: Request<undefined, undefined, IQuote>, res: Response) {
    const { body, authorId } = req.body;

    if (!authorId) {
      res.status(400).json({ error: 'Body params missing: authorId' });
      return;
    }

    if (!body) {
      res.status(400).json({ error: 'Body params missing: body' });
      return;
    }

    const quote = await models.quote.create({ body, authorId });

    res.status(201).json(quote);
  },
};
