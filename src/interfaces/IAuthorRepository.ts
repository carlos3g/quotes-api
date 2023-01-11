import { Author } from '~/entities';

interface IAuthorRepository {
  create: (data: Omit<Author, 'id' | 'slug'>) => Promise<Author>;

  deleteOne: (id: Author['id']) => Promise<boolean>;

  findOne: (id: Author['id']) => Promise<Author | null>;

  findAll: () => Promise<Author[]>;

  findAllBy: (criteria: Partial<Omit<Author, 'id'>>) => Promise<Author[]>;

  updateOne: (id: Author['id'], columnsToUpdate: Partial<Omit<Author, 'id' | 'slug'>>) => Promise<boolean>;
}

export { IAuthorRepository };
