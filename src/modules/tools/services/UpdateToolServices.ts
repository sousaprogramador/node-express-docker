import AppError from '@shared/errors/AppError';
import IToolsRepository from '../repositories/IToolsRepository';
import Tool from '@modules/tools/infra/typeorm/entities/Tool';

interface IRequest {
  id  : string;
  title : string;
  link : string;
  description : string;
  tags : string;
}

class UpdateToolService {
  constructor(private toolRepository: IToolsRepository) {}

  public async execute({
    id,
    title,
    link,
    description,
    tags
  }: IRequest): Promise<Tool> {
    const tool = await this.toolRepository.findById(id);

    if (!tool) {
      throw new AppError('Tool not found!', 401);
    }

    tool.title = title;
    tool.link  = link;
    tool.description = description;
    tool.tags  = tags;

    return this.toolRepository.save(tool);
  }
}

export default UpdateToolService;
