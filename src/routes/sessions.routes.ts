import { Router } from 'express';

import { createSessionController } from '../modules/accounts/useCases/createSession/CreateSessionController';

const sessionsRouter = Router();

sessionsRouter.post('/', createSessionController.handle)

export { sessionsRouter }