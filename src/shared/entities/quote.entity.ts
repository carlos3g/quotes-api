import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';

import { Author } from '~/shared/entities';

@Entity('quotes')
class Quote {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  body: string;

  @Column('int')
  author_id: number;

  @ManyToOne(() => Author, (author) => author.quotes)
  @JoinColumn({ name: 'author_id' })
  author: Author;
}

export { Quote };
