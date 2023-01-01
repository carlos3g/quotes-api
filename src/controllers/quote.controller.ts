import { Request, Response } from 'express';
import { FindOptions } from 'sequelize';

import { db } from '../db';
import { IQuote } from '../interfaces/IQuote.interface';

const { models } = db;

export const quoteController = {
  async delete(req: Request<Pick<IQuote, 'id'>>, res: Response) {
    const { id } = req.params;

    const rowsDeleted = await models.quote.destroy({ where: { id } });

    if (!rowsDeleted) {
      res.status(404).json({ error: 'Quote not found.' });
      return;
    }

    res.status(200).json();
  },

  async index(req: Request<undefined, undefined, undefined, { authorId: number }>, res: Response) {
    const { authorId } = req.query;
    const queryOptions: FindOptions = {};

    if (authorId) {
      queryOptions.where = { authorId };
    }

    const quotes = await models.quote.findAll(queryOptions);

    res.status(200).json(quotes);
  },

  async put(req: Request<Pick<IQuote, 'id'>, undefined, Pick<IQuote, 'body'>>, res: Response) {
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

    const quote = await models.quote.create({ body, authorId });

    res.status(201).json(quote);
  },
};
