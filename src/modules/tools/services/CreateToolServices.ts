import IToolsRepository from '../repositories/IToolsRepository';
import Tool from '@modules/tools/infra/typeorm/entities/Tool';

interface IRequest {
  title : string;
  link : string;
  description : string;
  tags : string;
}

class CreateToolService {
  constructor(private toolsRepository: IToolsRepository) {}

  public async execute({
    title,
    link,
    description,
    tags,
  }: IRequest): Promise<Tool> {

    const tool = await this.toolsRepository.create({
      title,
      link,
      description,
      tags,
    });

    return tool;
  }
}

export default CreateToolService;
