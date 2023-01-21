import { container } from 'tsyringe';
import { Response, Request } from "express";
import { ListCategoryUseCase } from "./ListCategoryUseCase";

class ListCategoryController {
  async handle(req: Request, res: Response){
    const listCategoryUseCase = container.resolve<ListCategoryUseCase>(ListCategoryUseCase)
    const categories = await listCategoryUseCase.execute();

    return res.status(200).json(categories);
  }
}

const listCategoryController = new ListCategoryController()

export { ListCategoryController, listCategoryController }