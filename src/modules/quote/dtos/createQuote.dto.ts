import { Quote } from '~/shared/entities';

interface CreateQuoteDTO extends Omit<Quote, 'id' | 'author'> {}

export { CreateQuoteDTO };
