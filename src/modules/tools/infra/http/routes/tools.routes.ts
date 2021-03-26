import { Router } from 'express';

import ToolsController from '../controllers/ToolsController';

const toolsRouter = Router();
const toolsController = new ToolsController();

toolsRouter.get('/', toolsController.index);
toolsRouter.get('/:id', toolsController.show);
toolsRouter.post('/', toolsController.create);
toolsRouter.put('/:id', toolsController.update);
toolsRouter.delete('/:id', toolsController.remove);

export default toolsRouter;
