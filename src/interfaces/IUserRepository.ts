import { User } from '~/entities';

interface IUserRepository {
  create(data: Omit<User, 'id' | 'slug'>): Promise<User>;

  deleteOne(id: User['id']): Promise<boolean>;

  findOne(id: User['id']): Promise<User | null>;

  findOneBy(criteria: Partial<Omit<User, 'id'>>): Promise<User | null>;

  findAll(): Promise<User[]>;

  findAllBy(criteria: Partial<Omit<User, 'id'>>): Promise<User[]>;

  updateOne(id: User['id'], columnsToUpdate: Partial<Omit<User, 'id' | 'slug'>>): Promise<boolean>;

  addFavorite(userId: number, quoteId: number): Promise<boolean>;
}

export { IUserRepository };
