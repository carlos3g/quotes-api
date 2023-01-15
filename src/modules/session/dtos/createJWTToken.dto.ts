import { User } from '~/shared/entities';

interface CreateJWTTokenDTO extends Pick<User, 'email' | 'password'> {}

export { CreateJWTTokenDTO };
