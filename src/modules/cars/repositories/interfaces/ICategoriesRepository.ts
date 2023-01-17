import { Category } from "../../model/Category";

interface ICreateCategoryDTO {
  name: string;
  description: string;
}

interface ICategoriesRepository {
  create({ name, description}: ICreateCategoryDTO): Category 
  all(): Category[]
  findByName(name: string): Category | void 
}

export { ICategoriesRepository, ICreateCategoryDTO }