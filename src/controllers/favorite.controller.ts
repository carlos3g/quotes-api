import { Request, Response } from 'express';
import { Quote } from '~/entities';

import { UserRepository } from '~/repositories';

const userRepository = new UserRepository();

const favoriteController = {
  async store(req: Request<Pick<Quote, 'id'>>, res: Response) {
    const { id: quoteId } = req.params;
    const { id: userId } = req.user;

    await userRepository.addFavorite(userId, quoteId);

    res.status(201).json();
  },
};

export { favoriteController };
