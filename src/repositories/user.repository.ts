import { Repository } from 'typeorm';

import { dataSource } from '~/database';
import { User } from '~/entities';
import { IUserRepository } from '~/interfaces';
import { slugify } from '~/utils';

class UserRepository implements IUserRepository {
  public userTypeormRepository: Repository<User>;

  constructor() {
    this.userTypeormRepository = dataSource.manager.getRepository(User);
  }

  public async create(data: Omit<User, 'id' | 'slug'>): Promise<User> {
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

  public async updateOne(id: number, columnsToUpdate: Partial<Omit<User, 'id' | 'slug'>>): Promise<boolean> {
    const { affected } = await this.userTypeormRepository.update({ id }, columnsToUpdate);

    return !!affected;
  }
}

export { UserRepository };
