import { Seeder } from 'typeorm-extension';
import { DataSource } from 'typeorm';

import { slugify } from '~/utils';
import { Author, Quote } from '~/entities';

export default class BaseSeeder implements Seeder {
  public async run(dataSource: DataSource): Promise<void> {
    const authorRepository = dataSource.getRepository(Author);
    const quoteRepository = dataSource.getRepository(Quote);

    await authorRepository.insert([
      {
        name: 'Hesíodo',
        slug: slugify('Hesíodo'),
      },
      {
        name: 'Johann Wolfgang von Goethe',
        slug: slugify('Johann Wolfgang von Goethe'),
        birthday: '1749/08/28',
        deathday: '1832/03/22',
      },
      {
        name: 'Abraham Lincoln',
        slug: slugify('Abraham Lincoln'),
        birthday: '1809/02/12',
        deathday: '1865/04/15',
      },
      {
        name: 'Lord Byron',
        slug: slugify('Lord Byron'),
        birthday: '1788/01/22',
        deathday: '1824/04/19',
      },
    ]);

    await quoteRepository.insert([
      {
        body: 'Sofrer dá bom senso ao pateta.',
        author_id: 1,
      },
      {
        body: 'Convida aquele que mora próximo de ti para comer, pois se alguma coisa estranha acontecer em teu lugar, os vizinhos sem atar o cinto acorrem. os parentes, não.',
        author_id: 1,
      },
    ]);

    await quoteRepository.insert([
      {
        body: 'Só é possível ensinar uma criança a amar, amando-a.',
        author_id: 2,
      },
      {
        body: 'Quem não é fiel às pequenas coisas, jamais será nas grandes.',
        author_id: 2,
      },
      {
        body: 'Ingratidão é uma forma de fraqueza. Jamais conheci homem de valor que fosse ingrato.',
        author_id: 2,
      },
      {
        body: 'Não existe meio mais seguro para fugir do mundo do que a arte, e não há forma mais segura de se unir a ele do que a arte.',
        author_id: 2,
      },
      {
        body: 'Seja o homem nobre, caridoso e bom. São as únicas coisas que o distinguem dos demais seres.',
        author_id: 2,
      },
      {
        body: 'Os adversários acreditam que nos refutam quando repetem a própria opinião e não consideram a nossa.',
        author_id: 2,
      },
      {
        body: 'Quem tem bastante no seu interior, pouco precisa de fora.',
        author_id: 2,
      },
      {
        body: 'O homem de bom senso jamais comete uma loucura de pouca importância.',
        author_id: 2,
      },
    ]);

    await quoteRepository.insert([
      {
        body: 'O homem que trabalha somente pelo que recebe, não merece ser pago pelo que faz.',
        author_id: 3,
      },
      {
        body: 'Nunca devemos mudar de cavalo no meio do rio.',
        author_id: 3,
      },
      {
        body: 'Pecar pelo silêncio quando se deve protestar transforma homens em covardes.',
        author_id: 3,
      },
      {
        body: 'A melhor maneira de prever o futuro é cria-lo.',
        author_id: 3,
      },
      {
        body: 'Aqueles que procuram pelo mal nas pessoas com certeza o encontrarão.',
        author_id: 3,
      },
    ]);

    await quoteRepository.insert([
      {
        body: 'Os espinhos que colhi são da árvore que plantei.',
        author_id: 4,
      },
      {
        body: 'O amor nasce de pequenas coisas, vive delas e por elas às vezes morre.',
        author_id: 4,
      },
      {
        body: 'Quem ama mente.',
        author_id: 4,
      },
      {
        body: 'É quando pensamos conduzir que geralmente somos conduzidos.',
        author_id: 4,
      },
      {
        body: 'A vida é como o vinho: se a quisermos apreciar bem, não devemos bebê-la até à última gota.',
        author_id: 4,
      },
      {
        body: 'Nada escrevi que prestasse até que comecei a amar.',
        author_id: 4,
      },
    ]);
  }
}
