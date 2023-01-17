import { Category } from "../../model/Category";
import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { ICategoriesRepository } from "../../repositories/interfaces/ICategoriesRepository";

interface ListCategoryUseCaseDTO {
  name: string;
  description: string;
}

class ListCategoryUseCase {
  errors: string[]

  constructor(private categoriesRepository: ICategoriesRepository){ }

  execute(): Category[] {
    const categories = this.categoriesRepository.all();

    return categories;
  }
}

export { ListCategoryUseCase }