import { Request, Response } from 'express';

import { Author } from '~/shared/entities';
import { AppError } from '~/shared/errors/AppError';
import { AuthorRepository } from './author.repository';
import { CreateAuthorDTO, UpdateAuthorDTO } from './dtos';

const authorRepository = new AuthorRepository();

const authorController = {
  async delete(req: Request<Pick<Author, 'id'>>, res: Response) {
    const { id } = req.params;

    const hasDeleted = await authorRepository.deleteOne(id);

    if (!hasDeleted) {
      throw new AppError('Author id invalid.', 404);
    }

    res.status(200).json();
  },

  async index(_: Request, res: Response) {
    const authors = await authorRepository.findAll();

    res.status(200).json(authors);
  },

  async put(req: Request<Pick<Author, 'id'>, undefined, UpdateAuthorDTO>, res: Response) {
    const { id } = req.params;

    const hadUpdated = await authorRepository.updateOne(id, req.body);

    if (!hadUpdated) {
      throw new AppError('Author id invalid.', 404);
    }

    res.status(200).json();
  },

  async show(req: Request<Pick<Author, 'id'>>, res: Response) {
    const { id } = req.params;

    const author = await authorRepository.findOne(id);

    if (!author) {
      throw new AppError('Author not found.', 404);
    }

    res.status(200).json(author);
  },

  async store(req: Request<undefined, undefined, CreateAuthorDTO>, res: Response) {
    const author = await authorRepository.create(req.body);

    res.status(201).json(author);
  },
};

export { authorController };
