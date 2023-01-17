import { Category } from "../../model/Category";
import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { ICategoriesRepository } from "../../repositories/interfaces/ICategoriesRepository";

interface CreateCategoryUseCaseDTO {
  name: string;
  description: string;
}

class CreateCategoryUseCase {
  errors: string[]

  constructor(private categoriesRepository: ICategoriesRepository){ }

  execute({name, description}:CreateCategoryUseCaseDTO): Category | void {
    const categoryAlreadyExists = this.categoriesRepository.findByName(name)

    if(categoryAlreadyExists) this.errors = ['categoryAlreadyExists']
    if(categoryAlreadyExists) return; 

    const category = this.categoriesRepository.create({ name, description })

    return category;
  }
}

export { CreateCategoryUseCase }