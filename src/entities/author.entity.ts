import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

import { Quote } from './quote.entity';

@Entity('authors')
class Author {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;

  @Column()
  slug: string;

  @Column({ type: 'date', nullable: true })
  birthday: string;

  @Column({ type: 'date', nullable: true })
  deathday: string;

  @OneToMany(() => Quote, (quote) => quote.author)
  quotes: Quote[];
}

export { Author };
