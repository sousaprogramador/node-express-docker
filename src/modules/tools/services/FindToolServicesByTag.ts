import AppError from '@shared/errors/AppError';
import IToolsRepository from '../repositories/IToolsRepository';
import Tool from '@modules/tools/infra/typeorm/entities/Tool';

interface IRequest {
  tag: string;
}

class FindToolServiceByTag {
  constructor(private toolsRepository: IToolsRepository) {}

  public async execute({
    tag
  }: IRequest): Promise<Tool> {

    const tool = await this.toolsRepository.findByTag(tag);

    if (!tool) {
      throw new AppError('tool not found', 401);
    }
    return tool;
  }
}

export default FindToolServiceByTag;
