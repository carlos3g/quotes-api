import { User } from '~/shared/entities';

interface UpdateUserDTO extends Partial<Omit<User, 'id' | 'slug'>> {}

export { UpdateUserDTO };
