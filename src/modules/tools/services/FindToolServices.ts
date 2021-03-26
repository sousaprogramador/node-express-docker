import AppError from '@shared/errors/AppError';
import IToolsRepository from '../repositories/IToolsRepository';
import Tool from '@modules/tools/infra/typeorm/entities/Tool';

class FindToolService {
  constructor(private toolsRepository: IToolsRepository) {}

  public async execute(): Promise<Tool> {

    const tool = await this.toolsRepository.find();

    if (!tool) {
      throw new AppError('tool not found', 401);
    }

    return tool;
  }
}

export default FindToolService;
