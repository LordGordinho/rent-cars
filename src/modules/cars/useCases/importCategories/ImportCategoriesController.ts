import { Request, Response } from "express";
import { container, injectable } from "tsyringe";
import { ImportCategoriesUseCase } from "./ImportCategoriesUseCase";

class ImportCategoriesController {
  handle(req: Request, res: Response) {
    const { file } = req;

    if(!file) return res.status(400).send();

    const importcategoriesUseCase = container.resolve<ImportCategoriesUseCase>(ImportCategoriesUseCase)
    importcategoriesUseCase.execute(file);

    return res.send();
  }
}

const importCategoriesController = new ImportCategoriesController()

export { ImportCategoriesController, importCategoriesController }