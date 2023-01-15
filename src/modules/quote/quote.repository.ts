import { Repository } from 'typeorm';

import { dataSource } from '~/database';
import { Quote } from '~/shared/entities';

import { CreateQuoteDTO, UpdateQuoteDTO } from './dtos';
import { IQuoteRepository } from './interfaces/IQuoteRepository';

class QuoteRepository implements IQuoteRepository {
  public quoteTypeormRepository: Repository<Quote>;

  constructor() {
    this.quoteTypeormRepository = dataSource.manager.getRepository(Quote);
  }

  public async create(data: CreateQuoteDTO): Promise<Quote> {
    const quote = this.quoteTypeormRepository.create(data);

    await this.quoteTypeormRepository.save(quote);

    return quote;
  }

  public async deleteOne(id: number): Promise<boolean> {
    const { affected } = await this.quoteTypeormRepository.delete({ id });

    return !!affected;
  }

  public async findOne(id: number): Promise<Quote | null> {
    const quote = await this.quoteTypeormRepository.findOneBy({ id });

    return quote;
  }

  public async findAll(): Promise<Quote[]> {
    const quotes = await this.quoteTypeormRepository.find();

    return quotes;
  }

  public async findAllBy(criteria: Partial<Omit<Quote, 'id'>>): Promise<Quote[]> {
    const quotes = await this.quoteTypeormRepository.findBy(criteria);

    return quotes;
  }

  public async updateOne(id: number, columnsToUpdate: UpdateQuoteDTO): Promise<boolean> {
    const { affected } = await this.quoteTypeormRepository.update({ id }, columnsToUpdate);

    return !!affected;
  }
}

export { QuoteRepository };
