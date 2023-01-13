import { Request, Response } from 'express';
import { hash } from 'bcryptjs';

import { User } from '~/entities';
import { AppError } from '~/errors/AppError';
import { UserRepository } from '~/repositories';

const userRepository = new UserRepository();

const userController = {
  async delete(req: Request, res: Response) {
    const { id } = req.user;

    const hasDeleted = await userRepository.deleteOne(id);

    if (!hasDeleted) {
      throw new AppError('User id invalid.', 404);
    }

    res.status(200).json();
  },

  async put(req: Request<undefined, undefined, Omit<User, 'id' | 'slug'>>, res: Response) {
    const { id } = req.user;

    const hadUpdated = await userRepository.updateOne(id, req.body);

    if (!hadUpdated) {
      throw new AppError('User id invalid.', 404);
    }

    res.status(200).json();
  },

  async show(req: Request<Pick<User, 'id'>>, res: Response) {
    const { id } = req.params;

    const user = await userRepository.findOne(id);

    if (!user) {
      throw new AppError('User not found.', 404);
    }

    const { password: _, ...userWithoutPassword } = user;

    res.status(200).json(userWithoutPassword);
  },

  async store(req: Request<undefined, undefined, Omit<User, 'id' | 'slug'>>, res: Response) {
    const passwordHashed = await hash(req.body.password, 8);

    const user = await userRepository.create({ ...req.body, password: passwordHashed });

    res.status(201).json(user);
  },
};

export { userController };
