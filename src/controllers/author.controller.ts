import { Request, Response } from 'express';

import { dataSource } from '~/database';
import { IAuthor } from '~/interfaces';
import { slugify } from '~/utils';
import { Author } from '~/entities';

const authorController = {
  async delete(req: Request<Pick<IAuthor, 'id'>>, res: Response) {
    const { id } = req.params;

    const { affected } = await dataSource.manager.delete(Author, { id });

    if (!affected) {
      res.status(404).json({ errors: 'Author not found.' });
      return;
    }

    res.status(200).json();
  },

  async index(_: Request, res: Response) {
    const authors = await dataSource.manager.find(Author);

    res.status(200).json(authors);
  },

  async put(req: Request<Pick<IAuthor, 'id'>, undefined, IAuthor>, res: Response) {
    const { id } = req.params;
    const { name, birthday, deathday } = req.body;

    const author = await dataSource.manager.findOneBy(Author, { id });

    if (!author) {
      res.status(404).json({ errors: 'Author not found.' });
      return;
    }

    await dataSource.manager.update(Author, { id }, { name, birthday, deathday });

    res.status(200).json();
  },

  async show(req: Request<Pick<IAuthor, 'id'>>, res: Response) {
    const { id } = req.params;

    const author = await dataSource.manager.findOneBy(Author, { id });

    if (!author) {
      res.status(404).json({ errors: 'Author not found.' });
      return;
    }

    res.status(200).json(author);
  },

  async store(req: Request<undefined, undefined, IAuthor>, res: Response) {
    const { name, birthday, deathday } = req.body;

    const author = dataSource.manager.create(Author, {
      name,
      slug: slugify(name),
      birthday,
      deathday,
    });

    await dataSource.manager.save(author);

    res.status(201).json(author);
  },
};

export { authorController };
