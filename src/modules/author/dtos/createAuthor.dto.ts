import { Author } from '~/shared/entities';

interface CreateAuthorDTO extends Omit<Author, 'id' | 'slug' | 'quotes'> {}

export { CreateAuthorDTO };
