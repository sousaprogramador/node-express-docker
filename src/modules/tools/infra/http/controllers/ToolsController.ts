import { Request, Response } from 'express';

import ToolsRepostiroty from '@modules/tools/infra/typeorm/repositories/ToolsRepository';
import CreateToolService from '@modules/tools/services/CreateToolServices';
import UpdateToolService from '@modules/tools/services/UpdateToolServices';
import ShowToolService from '@modules/tools/services/ShowToolServices';
import FinToolService from '@modules/tools/services/FindToolServices';
import FinToolServiceByTag from '@modules/tools/services/FindToolServicesByTag';
import DeleteToolService from '@modules/tools/services/DeleteToolServices';

export default class ToolsController {

  public async index(req: Request, res: Response): Promise<Response> {
    const { tag } = req.query;
    const toolsRepository = new ToolsRepostiroty();
    if (tag) {
      const finToolService = new FinToolServiceByTag(toolsRepository);

      const tool = await finToolService.execute({tag});
    }else{
      const finToolService = new FinToolService(toolsRepository);

      const tool = await finToolService.execute({tag});
    }

    return res.json({tool});
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { id }  = request.params;

    const toolsRepository = new ToolsRepostiroty();

    const showToolService = new ShowToolService(toolsRepository);

    const tool = await showToolService.execute({id});

    return response.json(tool);
  }

  public async create(request: Request, response:Response): Promise<Response>{
    const { title, link, description, tags } = request.body;

    const toolsRepository = new ToolsRepostiroty();

    const createTool = new CreateToolService(toolsRepository);

    await createTool.execute({ title, link, description, tags });

    return response.send(201);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { title, link, description, tags } = request.body;

    const toolsRepository = new ToolsRepostiroty();

    const updateTool = new UpdateToolService(toolsRepository);

    await updateTool.execute({ id : request.params.id, title, link, description, tags });

    return response.send(201);
  }

  public async remove(request: Request, response: Response): Promise<Response> {
    const id = request.params.id;

    const toolsRepository = new ToolsRepostiroty();

    const deleteUserService = new DeleteToolService(toolsRepository);

    await deleteUserService.execute({ id });

    return response.send(204);
  }
}
