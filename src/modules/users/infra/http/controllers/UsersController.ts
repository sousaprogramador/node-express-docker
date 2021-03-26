import { Request, Response } from 'express';

import UsersRepostiroty from '@modules/users/infra/typeorm/repositories/UsersRepository';
import CreateUserService from '@modules/users/services/CreateUserServices';
import UpdateUserService from '@modules/users/services/UpdateUserServices';
import ShowUserService from '@modules/users/services/ShowUserServices';
import FinUserService from '@modules/users/services/FindUserServices';
import DeleteUserService from '@modules/users/services/DeleteUserServices';

export default class UsersController {

  public async index(request: Request, response: Response): Promise<Response> {

    const usersRepository = new UsersRepostiroty();

    const finUserService = new FinUserService(usersRepository);

    const user = await finUserService.execute();

    return response.json(user);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const user_id = request.params.id;

    const usersRepository = new UsersRepostiroty();

    const showUserService = new ShowUserService(usersRepository);

    const user = await showUserService.execute({ user_id });

    return response.json(user);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { name, email, password } = request.body;

    const usersRepository = new UsersRepostiroty();

    const createUser = new CreateUserService(usersRepository);

    await createUser.execute({ name, email, password });

    return response.send(201);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { name, email } = request.body;

    const usersRepository = new UsersRepostiroty();

    const updateUser = new UpdateUserService(usersRepository);

    await updateUser.execute({ id : request.params.id, name, email });

    return response.send(201);
  }

  public async remove(request: Request, response: Response): Promise<Response> {
    const id = request.params.id;

    const usersRepository = new UsersRepostiroty();

    const deleteUserService = new DeleteUserService(usersRepository);

    await deleteUserService.execute({ id });

    return response.send(204);
  }
}
