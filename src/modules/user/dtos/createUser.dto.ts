import { User } from '~/shared/entities';

interface CreateUserDTO extends Omit<User, 'id' | 'slug'> {}

export { CreateUserDTO };
