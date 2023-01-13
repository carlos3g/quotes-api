import { Request, Response } from 'express';
import { Quote } from '~/entities';
import { AppError } from '~/errors/AppError';

import { UserRepository } from '~/repositories';

const userRepository = new UserRepository();

const favoriteController = {
  async delete(req: Request<Pick<Quote, 'id'>>, res: Response) {
    const { id: quoteId } = req.params;
    const { id: userId } = req.user;

    await userRepository.removeFavorite(userId, quoteId);

    res.status(200).json();
  },

  async index(req: Request, res: Response) {
    const { id } = req.user;

    const quotes = await userRepository.getFavoriteQuotes(id);

    if (!quotes) {
      throw new AppError('User not found', 404);
    }

    res.status(200).json(quotes);
  },

  async store(req: Request<Pick<Quote, 'id'>>, res: Response) {
    const { id: quoteId } = req.params;
    const { id: userId } = req.user;

    await userRepository.addFavorite(userId, quoteId);

    res.status(201).json();
  },
};

export { favoriteController };
