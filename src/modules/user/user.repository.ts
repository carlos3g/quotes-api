import { Repository } from 'typeorm';

import { dataSource } from '~/database';
import { Quote, User } from '~/shared/entities';
import { IUserRepository } from './interfaces/IUserRepository';
import { QuoteRepository } from '~/modules/quote/quote.repository';
import { slugify } from '~/shared/utils';

import { CreateUserDTO, UpdateUserDTO } from './dtos';

const quoteRepository = new QuoteRepository();

class UserRepository implements IUserRepository {
  public userTypeormRepository: Repository<User>;

  constructor() {
    this.userTypeormRepository = dataSource.manager.getRepository(User);
  }

  public async create(data: CreateUserDTO): Promise<User> {
    const user = this.userTypeormRepository.create({
      ...data,
      slug: slugify(data.name),
    });

    await this.userTypeormRepository.save(user);

    return user;
  }

  public async deleteOne(id: number): Promise<boolean> {
    const { affected } = await this.userTypeormRepository.delete({ id });

    return !!affected;
  }

  public async findOne(id: number): Promise<User | null> {
    const user = await this.userTypeormRepository.findOneBy({ id });

    return user;
  }

  public async findOneBy(criteria: Partial<Omit<User, 'id'>>): Promise<User | null> {
    const user = await this.userTypeormRepository.findOneBy(criteria);

    return user;
  }

  public async findAll(): Promise<User[]> {
    const users = await this.userTypeormRepository.find();

    return users;
  }

  public async findAllBy(criteria: Partial<Omit<User, 'id'>>): Promise<User[]> {
    const users = await this.userTypeormRepository.findBy(criteria);

    return users;
  }

  public async updateOne(id: number, columnsToUpdate: UpdateUserDTO): Promise<boolean> {
    const { affected } = await this.userTypeormRepository.update({ id }, columnsToUpdate);

    return !!affected;
  }

  public async addFavorite(userId: number, quoteId: number): Promise<boolean> {
    const quote = await quoteRepository.findOne(quoteId);
    const user = await this.userTypeormRepository.findOne({
      where: { id: userId },
      relations: { favorite_quotes: true },
    });

    if (!user || !quote) {
      return false;
    }

    user.favorite_quotes.push(quote);

    await this.userTypeormRepository.save(user);

    return true;
  }

  public async removeFavorite(userId: number, quoteId: number): Promise<boolean> {
    const quote = await quoteRepository.findOne(quoteId);
    const user = await this.userTypeormRepository.findOne({
      where: { id: userId },
      relations: { favorite_quotes: true },
    });

    if (!user || !quote) {
      return false;
    }

    user.favorite_quotes = user.favorite_quotes.filter((q) => q.id !== quote.id);

    await this.userTypeormRepository.save(user);

    return true;
  }

  public async getFavoriteQuotes(userId: number): Promise<Quote[] | null> {
    const user = await this.userTypeormRepository.findOne({
      where: { id: userId },
      relations: { favorite_quotes: true },
    });

    if (!user) {
      return null;
    }

    return user.favorite_quotes;
  }
}

export { UserRepository };
