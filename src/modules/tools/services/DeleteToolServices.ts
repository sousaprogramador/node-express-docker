import AppError from '@shared/errors/AppError';
import IToolsRepository from '../repositories/IToolsRepository';
import Tool from '@modules/tools/infra/typeorm/entities/Tool';

interface IRequest {
  id: string;
}

class DeleteToolService {
  constructor(private toolRepository: IToolsRepository) {}

  public async execute({
    id
  }: IRequest): Promise<Tool> {
    const tool = await this.toolRepository.findById(id);

    if (!tool) {
      throw new AppError('Tool not found!', 401);
    }

    return await this.toolRepository.remove(tool);
  }
}

export default DeleteToolService;
