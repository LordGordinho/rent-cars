import { Router } from "express";

import { categoriesRouter } from './categories.routes';
import { specificationsRouter } from "./specifcations.routes";


const router = Router();

router.use('/categories', categoriesRouter)
router.use('/specifications', specificationsRouter)

export { router }