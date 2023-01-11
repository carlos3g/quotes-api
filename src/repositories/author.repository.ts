import { Repository } from 'typeorm';

import { dataSource } from '~/database';
import { Author } from '~/entities';
import { IAuthorRepository } from '~/interfaces';
import { slugify } from '~/utils';

class AuthorRepository implements IAuthorRepository {
  public authorTypeormRepository: Repository<Author>;

  constructor() {
    this.authorTypeormRepository = dataSource.manager.getRepository(Author);
  }

  public async create(data: Omit<Author, 'id' | 'slug'>): Promise<Author> {
    const author = this.authorTypeormRepository.create({
      ...data,
      slug: slugify(data.name),
    });

    await this.authorTypeormRepository.save(author);

    return author;
  }

  public async deleteOne(id: number): Promise<boolean> {
    const { affected } = await this.authorTypeormRepository.delete({ id });

    return !!affected;
  }

  public async findOne(id: number): Promise<Author | null> {
    const author = await this.authorTypeormRepository.findOneBy({ id });

    return author;
  }

  public async findAll(): Promise<Author[]> {
    const authors = await this.authorTypeormRepository.find();

    return authors;
  }

  public async findAllBy(criteria: Partial<Omit<Author, 'id'>>): Promise<Author[]> {
    const authors = await this.authorTypeormRepository.findBy(criteria);

    return authors;
  }

  public async updateOne(id: number, columnsToUpdate: Partial<Omit<Author, 'id' | 'slug'>>): Promise<boolean> {
    const { affected } = await this.authorTypeormRepository.update({ id }, columnsToUpdate);

    return !!affected;
  }
}

export { AuthorRepository };
