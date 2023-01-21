import { container } from 'tsyringe';
import { Response, Request} from 'express';

import { CreateCategoryUseCase } from './CreateCategoryUseCase';

class CreateCategoryController {
  async handle(req: Request, res: Response) {
    const createCategoryUseCase = container.resolve<CreateCategoryUseCase>(CreateCategoryUseCase)
    const { name, description } = req.body;

    try {
      const category = await createCategoryUseCase.execute({ name, description});

      return res.status(201).json(category);
    } catch (error: any) {
      return res.status(400).json({ error: error.message}); 
    }
    
  }
}

const createCategoryController = new CreateCategoryController()

export { CreateCategoryController, createCategoryController }