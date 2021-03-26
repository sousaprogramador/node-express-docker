import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

import authConfig from '@shared/config/auth';
import AppError from '@shared/errors/AppError';
import IUsersRepository from '../repositories/IUsersRepository';

interface IRequest {
  email: string;
  password: string;
}
interface IResponse {
  name: string;
  token: string;
}

class AuthenticateUserService {
  constructor(private usersRepository: IUsersRepository) {}

  public async execute({ email, password }: IRequest): Promise<IResponse> {
    const user = await this.usersRepository.findByEmail(email);

    if (!user) {
      throw new AppError('Incorrect email/password combination.', 401);
    }

    const passwordMatched = await compare(password, user.password);

    if (!passwordMatched) {
      throw new AppError('Incorrect email/password combination.', 401);
    }
    const { secret, expiresIn } = authConfig.jwt;

    const token = sign({}, secret, {
      subject: user.id,
      expiresIn,
    });

    return {
      name : user.name,
      token,
    };
  }
}

export default AuthenticateUserService;
