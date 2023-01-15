import { Author } from '~/shared/entities';

interface UpdateAuthorDTO extends Partial<Omit<Author, 'id' | 'slug' | 'quotes'>> {}

export { UpdateAuthorDTO };
