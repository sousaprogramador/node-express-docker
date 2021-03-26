import AppError from '@shared/errors/AppError';
import IUsersRepository from '../repositories/IUsersRepository';
import User from '@modules/users/infra/typeorm/entities/User';

interface IRequest {
  id: string;
  name: string;
  email: string;
}

class UpdateUserService {
  constructor(private usersRepository: IUsersRepository) {}

  public async execute({
    id,
    name,
    email
  }: IRequest): Promise<User> {
    const user = await this.usersRepository.findById(id);

    if (!user) {
      throw new AppError('User not found!', 401);
    }

    user.name = name;
    if(user.email !== email){
      user.email = email;
    }

    return this.usersRepository.save(user);
  }
}

export default UpdateUserService;
