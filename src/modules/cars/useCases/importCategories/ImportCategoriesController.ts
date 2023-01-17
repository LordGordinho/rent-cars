import { Request, Response } from "express";
import { ImportCategoriesUseCase } from "./ImportCategoriesUseCase";

class ImportCategoriesController {
  constructor(private importcategoriesUseCase: ImportCategoriesUseCase) { }

  handle(req: Request, res: Response) {
    const { file } = req;

    if(!file) return res.status(400).send();

    this.importcategoriesUseCase.execute(file);

    return res.send();
  }
}

export { ImportCategoriesController }