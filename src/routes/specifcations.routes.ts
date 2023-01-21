import { Router } from 'express';

import { prismaClient } from '../db/primasClient';
import { SpecificationsRepository } from '../modules/cars/repositories/implementations/SpecificationsRepository';
import { createSpecificationController } from '../modules/cars/useCases/createSpecification/CreateSpecificationController';

const specificationsRouter = Router();

const specificationsRepository = SpecificationsRepository.getInstance();

specificationsRouter.post('/', createSpecificationController.handle)

specificationsRouter.get('/', async (req, res)=> {
  const specifications = await prismaClient.specification.findMany();

  return res.json(specifications);
})

export { specificationsRouter }