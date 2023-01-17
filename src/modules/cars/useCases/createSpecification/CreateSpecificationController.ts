import { Response, Request} from 'express';

import { Specification } from '../../model/Specification';
import { CreateSpecificationUseCase } from './CreateSpecificationUseCase';

class CreateSpecificationController {
  constructor(private createSpecificationUseCase: CreateSpecificationUseCase){}

  handle(req: Request, res: Response): Specification {
    const { name, description } = req.body;
    const specification = this.createSpecificationUseCase.execute({ name, description});

    return specification;
  }
}

export { CreateSpecificationController }