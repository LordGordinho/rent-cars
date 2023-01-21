import { Category } from "../../model/Category";
import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { ICategoriesRepository } from "../../repositories/interfaces/ICategoriesRepository";
import { prismaClient } from "../../../../db/primasClient";
import { inject, injectable } from "tsyringe";

interface ListCategoryUseCaseDTO {
  name: string;
  description: string;
}

@injectable()
class ListCategoryUseCase {
  errors: string[]

  constructor(
    @inject("CategoriesRepository")
    private categoriesRepository: ICategoriesRepository
  ){ }

  async execute(): Promise<Category[]> {
    const categories = await this.categoriesRepository.all();

    return categories;
  }
}

export { ListCategoryUseCase }