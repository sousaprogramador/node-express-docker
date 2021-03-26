import AppError from '@shared/errors/AppError';
import IUsersRepository from '../repositories/IUsersRepository';
import User from '@modules/users/infra/typeorm/entities/User';

class FindUserService {
  constructor(private usersRepository: IUsersRepository) {}

  public async execute(): Promise<User> {
    const user = await this.usersRepository.find();

    if (!user) {
      throw new AppError('Only authenticated users can change avatar.', 401);
    }

    return user;
  }
}

export default FindUserService;
