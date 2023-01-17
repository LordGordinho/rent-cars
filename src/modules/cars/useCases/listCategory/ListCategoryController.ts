import { Response, Request } from "express";
import { Category } from "../../model/Category";
import { ListCategoryUseCase } from "./ListCategoryUseCase";

class ListCategoryController {
  constructor(private listCategoryUseCase: ListCategoryUseCase ) {}

  handle(req: Request, res: Response){
    const categories = this.listCategoryUseCase.execute();

    return res.status(200).json(categories);
  }
}

export { ListCategoryController }