import { Router } from 'express';

import SessionController from '../controllers/SessionsController';
import UsersController from '../controllers/UsersController';

const sessionsRouter = Router();
const sessionController = new SessionController();
const usersController = new UsersController();

sessionsRouter.post('/', sessionController.create);
sessionsRouter.post('/register', usersController.create);

export default sessionsRouter;
