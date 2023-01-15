import { Quote } from '~/shared/entities';

interface UpdateQuoteDTO extends Partial<Pick<Quote, 'body'>> {}

export { UpdateQuoteDTO };
