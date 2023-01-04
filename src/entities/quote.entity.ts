import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

import { Author } from './author.entity';

@Entity('quotes')
class Quote {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  body: string;

  @ManyToOne(() => Author, (author) => author.quotes)
  author: Author;
}

export { Quote };
