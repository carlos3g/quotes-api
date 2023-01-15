import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import bcryptjs from 'bcryptjs';

import { AppError } from '~/shared/errors/AppError';
import { UserRepository } from '~/modules/user/user.repository';

import { CreateJWTTokenDTO } from './dtos';

const userRepository = new UserRepository();

const sessionController = {
  async store(req: Request<undefined, undefined, CreateJWTTokenDTO>, res: Response) {
    const { email, password } = req.body;

    const user = await userRepository.findOneBy({ email });

    if (!user) {
      throw new AppError('Incorrect email/password combination.', 401);
    }

    const passwordMatched = await bcryptjs.compare(password, user.password);

    if (!passwordMatched) {
      throw new AppError('Incorrect email/password combination.', 401);
    }

    const token = jwt.sign({}, process.env.JWT_SECRET as string, {
      subject: String(user.id),
      expiresIn: process.env.JWT_DURATION,
    });

    res.status(201).json({ token });
  },
};

export { sessionController };
