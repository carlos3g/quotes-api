import { Request, Response } from 'express';

import { db } from '../db';
import { IAuthor } from '../interfaces/IAuthor.interface';
import { slugify } from '../utils';

const { models } = db;

export const authorController = {
  async delete(req: Request<Pick<IAuthor, 'id'>>, res: Response) {
    const { id } = req.params;

    const rowsDeleted = await models.author.destroy({ where: { id } });

    if (!rowsDeleted) {
      res.status(404).json({ error: 'Author not found.' });
      return;
    }

    res.status(200).json();
  },

  async index(_: Request, res: Response) {
    const authors = await models.author.findAll();

    res.status(200).json(authors);
  },

  async put(req: Request<Pick<IAuthor, 'id'>, undefined, IAuthor>, res: Response) {
    const { id } = req.params;
    const { name, birthday, deathday } = req.body;

    const [rowsUpdated] = await models.author.update({ name, birthday, deathday }, { where: { id } });

    if (!rowsUpdated) {
      res.status(404).json({ error: 'Author not found.' });
      return;
    }

    res.status(200).json();
  },

  async show(req: Request<Pick<IAuthor, 'id'>>, res: Response) {
    const { id } = req.params;

    const author = await models.author.findByPk(id);

    if (!author) {
      res.status(404).json({ error: 'Author not found.' });
      return;
    }

    res.status(200).json(author);
  },

  async store(req: Request<undefined, undefined, IAuthor>, res: Response) {
    const { name, birthday, deathday } = req.body;

    const author = await models.author.create({
      name,
      slug: slugify(name),
      birthday: birthday ?? null,
      deathday: deathday ?? null,
    });

    res.status(201).json(author);
  },
};
