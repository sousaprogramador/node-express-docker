import AppError from '@shared/errors/AppError';
import IUsersRepository from '../repositories/IUsersRepository';
import User from '@modules/users/infra/typeorm/entities/User';

interface IRequest {
  id: string;
}

class DeleteUserService {
  constructor(private usersRepository: IUsersRepository) {}

  public async execute({
    id
  }: IRequest): Promise<User> {
    const user = await this.usersRepository.findById(id);

    if (!user) {
      throw new AppError('User not found!', 401);
    }

    return await this.usersRepository.remove(user);
  }
}

export default DeleteUserService;
