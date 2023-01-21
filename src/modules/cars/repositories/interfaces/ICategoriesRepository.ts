import { Category } from "../../model/Category";

interface ICreateCategoryDTO {
  name: string;
  description: string;
}

interface ICategoriesRepository {
  create({ name, description}: ICreateCategoryDTO): Promise<Category> 
  all(): Promise<Category[]>
  findByName(name: string): Promise<Category | null> 
}

export { ICategoriesRepository, ICreateCategoryDTO }