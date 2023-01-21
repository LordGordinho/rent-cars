import { inject, injectable } from "tsyringe"

import { Category } from "../../model/Category";
import { ICategoriesRepository } from "../../repositories/interfaces/ICategoriesRepository";

interface CreateCategoryUseCaseDTO {
  name: string;
  description: string;
}
@injectable()
class CreateCategoryUseCase {
  errors: string[]

  constructor(
    @inject("CategoriesRepository")
    private categoriesRepository: ICategoriesRepository
  ){}

  async execute({name, description}:CreateCategoryUseCaseDTO): Promise<Category | void> {
    const categoryAlreadyExists =  await this.categoriesRepository.findByName(name)

    if(!!categoryAlreadyExists) throw new Error('categoty alreadt exists')

    const category = await this.categoriesRepository.create({ name, description })
    console.log(category)
    return category;
  }
}

export { CreateCategoryUseCase }