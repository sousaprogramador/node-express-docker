import { Request, Response } from 'express';

import AuthenticateUserService from '@modules/users/services/AuthenticateUserServices';
import UsersRepostiroty from '@modules/users/infra/typeorm/repositories/UsersRepository';

export default class SessionsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;

    const usersRepository = new UsersRepostiroty();

    const authenticateUser = new AuthenticateUserService(usersRepository);

    const { name, token } = await authenticateUser.execute({
      email,
      password,
    });

    return response.json({ name, token });
  }
}
