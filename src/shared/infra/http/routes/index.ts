import { Router } from 'express';

import sessionsRouter from '@modules/users/infra/http/routes/sessions.routes';
import usersRouter from '@modules/users/infra/http/routes/users.routes';
import toolsRouter from '@modules/tools/infra/http/routes/tools.routes';


const routes = Router();

routes.get('/', (request, response) => {
  return response.json({ message: 'Api running' });
});

routes.use('/api/login', sessionsRouter);
routes.use('/api/tool', toolsRouter);
routes.use('/api/user', usersRouter);

export default routes;
