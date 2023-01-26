import { Response, Request} from 'express';
import { container } from 'tsyringe';

import { Specification } from '../../entities/Specification';
import { CreateSpecificationUseCase } from './CreateSpecificationUseCase';

class CreateSpecificationController {
  async handle(req: Request, res: Response) {
    const createSpecificationUseCase = container.resolve<CreateSpecificationUseCase>(CreateSpecificationUseCase)
    const { name, description } = req.body;

    try {
      const specification = await createSpecificationUseCase.execute({ name, description});

      return res.status(201).json(specification);
    } catch (error: any) {
      return res.status(400).json({ error: error.message}); 
    }
  }
}

const createSpecificationController = new CreateSpecificationController();

export { CreateSpecificationController, createSpecificationController }