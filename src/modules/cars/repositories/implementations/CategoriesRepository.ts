import { Category } from "../../model/Category";
import { ICategoriesRepository, ICreateCategoryDTO } from "../interfaces/ICategoriesRepository";

class CategoriesRepository implements ICategoriesRepository{
  private static instance: CategoriesRepository;
  private categories: Category[];

  private constructor() {
    this.categories = []
  }

  static getInstance(): CategoriesRepository {
    if (!CategoriesRepository.instance) {
      CategoriesRepository.instance = new CategoriesRepository();
    }

    return CategoriesRepository.instance;
  }

  create({ name, description}: ICreateCategoryDTO): Category {
    const category = new Category;

    Object.assign(category, {
      name,
      description,
      created_at: new Date
    });

    this.categories.push(category);

    return category;
  }

  all(): Category[] {
    return this.categories;
  }

  findByName(name: string): Category | void {
    const category = this.categories.find( category => category.name === name);
    
    return category;
  }
}

export { CategoriesRepository }