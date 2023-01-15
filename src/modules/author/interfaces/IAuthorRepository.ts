import { Author } from '~/shared/entities';

import { CreateAuthorDTO, UpdateAuthorDTO } from '../dtos';

interface IAuthorRepository {
  create: (data: CreateAuthorDTO) => Promise<Author>;

  deleteOne: (id: Author['id']) => Promise<boolean>;

  findOne: (id: Author['id']) => Promise<Author | null>;

  findAll: () => Promise<Author[]>;

  findAllBy: (criteria: Partial<Omit<Author, 'id'>>) => Promise<Author[]>;

  updateOne: (id: Author['id'], columnsToUpdate: UpdateAuthorDTO) => Promise<boolean>;
}

export { IAuthorRepository };
