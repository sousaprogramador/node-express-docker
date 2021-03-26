import AppError from '@shared/errors/AppError';
import IUsersRepository from '../repositories/IUsersRepository';
import User from '@modules/users/infra/typeorm/entities/User';

interface IRequest {
  user_id: string;
}

class ShowUserService {
  constructor(private usersRepository: IUsersRepository) {}

  public async execute({
    user_id
  }: IRequest): Promise<User> {
    const user = await this.usersRepository.findById(user_id);

    if (!user) {
      throw new AppError('user not found', 401);
    }

    return user;
  }
}

export default ShowUserService;
