import { Router } from 'express';

import { SpecificationsRepository } from '../modules/cars/repositories/implementations/SpecificationsRepository';
import { createSpecificationController } from '../modules/cars/useCases/createSpecification';

const specificationsRouter = Router();

const specificationsRepository = SpecificationsRepository.getInstance();

specificationsRouter.post('/', (req, res)=> {
  const specification = createSpecificationController.handle(req, res);

  return res.status(201).json(specification);
})

specificationsRouter.get('/', (req, res)=> {
  const specifications = specificationsRepository.all();

  return res.json(specifications);
})

export { specificationsRouter }