import { Quote } from '~/entities';

interface IQuoteRepository {
  create: (data: Omit<Quote, 'id'>) => Promise<Quote>;

  deleteOne: (id: Quote['id']) => Promise<boolean>;

  findOne: (id: Quote['id']) => Promise<Quote | null>;

  findAll: () => Promise<Quote[]>;

  findAllBy: (criteria: Partial<Omit<Quote, 'id'>>) => Promise<Quote[]>;

  updateOne: (id: Quote['id'], columnsToUpdate: Partial<Omit<Quote, 'id' | 'author_id'>>) => Promise<boolean>;
}

export { IQuoteRepository };
