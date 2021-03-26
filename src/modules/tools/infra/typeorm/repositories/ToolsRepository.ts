import { getRepository, Repository , Like } from 'typeorm';

import IToolsRepository from '@modules/tools/repositories/IToolsRepository';
import ICreateToolDTO from '@modules/tools/dtos/ICreateToolDTO';

import Tool from '../entities/Tool';

class ToolsRepostiroty implements IToolsRepository {
  private ormRepository: Repository<Tool>;

  constructor() {
    this.ormRepository = getRepository(Tool);
  }

  public async find(): Promise<Tool> {
    const tool = await this.ormRepository.find();

    return tool;
  }

  public async findById(id:string): Promise<Tool | undefined> {
    const tool = await this.ormRepository.findOne(id);

    return tool;
  }

  public async findByTag(tag:string): Promise<Tool | undefined> {
    const tags = await this.ormRepository.find({
      where: { tags: Like(`%${tag}%`) }
    });

    return tags;
  }

  public async create(toolData: ICreateToolDTO): Promise<Tool> {
    const tool = this.ormRepository.create(toolData);

    await this.ormRepository.save(tool);

    return tool;
  }

  public async save(tool: Tool): Promise<Tool> {
    return this.ormRepository.save(tool);
  }

  public async remove(tool: Tool): Promise<Tool> {
    return this.ormRepository.remove(tool);
  }
}

export default ToolsRepostiroty;
