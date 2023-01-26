import { Router } from "express";

import { categoriesRouter } from './categories.routes';
import { specificationsRouter } from "./specifcations.routes";
import { usersRouter } from "./users.routes";
import { sessionsRouter } from "./sessions.routes";


const router = Router();

router.use('/categories', categoriesRouter)
router.use('/specifications', specificationsRouter)
router.use('/users', usersRouter)
router.use('/sessions', sessionsRouter)

export { router }