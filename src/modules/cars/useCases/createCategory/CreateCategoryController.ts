import { Response, Request} from 'express';

import { Category } from '../../model/Category';
import { CreateCategoryUseCase } from './CreateCategoryUseCase';

class CreateCategoryController {
  constructor(private createCategoryUseCase: CreateCategoryUseCase){}

  handle(req: Request, res: Response) {
    const { name, description } = req.body;
    const category = this.createCategoryUseCase.execute({ name, description});

    if(this.createCategoryUseCase.errors) return res.status(400).json(this.createCategoryUseCase.errors); 

    return res.status(201).json(category);
  }
}

export { CreateCategoryController }