import { Quote, User } from '~/shared/entities';

import { CreateUserDTO, UpdateUserDTO } from '../dtos';

interface IUserRepository {
  create(data: CreateUserDTO): Promise<User>;

  deleteOne(id: User['id']): Promise<boolean>;

  findOne(id: User['id']): Promise<User | null>;

  findOneBy(criteria: Partial<Omit<User, 'id'>>): Promise<User | null>;

  findAll(): Promise<User[]>;

  findAllBy(criteria: Partial<Omit<User, 'id'>>): Promise<User[]>;

  updateOne(id: User['id'], columnsToUpdate: UpdateUserDTO): Promise<boolean>;

  addFavorite(userId: number, quoteId: number): Promise<boolean>;

  removeFavorite(userId: number, quoteId: number): Promise<boolean>;

  getFavoriteQuotes(userId: number): Promise<Quote[] | null>;
}

export { IUserRepository };
