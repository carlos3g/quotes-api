import { Quote } from '~/shared/entities';

import { CreateQuoteDTO, UpdateQuoteDTO } from '../dtos';

interface IQuoteRepository {
  create: (data: CreateQuoteDTO) => Promise<Quote>;

  deleteOne: (id: Quote['id']) => Promise<boolean>;

  findOne: (id: Quote['id']) => Promise<Quote | null>;

  findAll: () => Promise<Quote[]>;

  findAllBy: (criteria: Partial<Omit<Quote, 'id'>>) => Promise<Quote[]>;

  updateOne: (id: Quote['id'], columnsToUpdate: UpdateQuoteDTO) => Promise<boolean>;
}

export { IQuoteRepository };
