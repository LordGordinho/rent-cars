import { Category } from "../../entities/Category";
import { ICategoriesRepository, ICreateCategoryDTO } from "../interfaces/ICategoriesRepository";
import { prismaClient } from "../../../../db/primasClient";

class CategoriesRepository implements ICategoriesRepository{
  private static instance: CategoriesRepository;
  private categories: Category[];

  static getInstance(): CategoriesRepository {
    if (!CategoriesRepository.instance) {
      CategoriesRepository.instance = new CategoriesRepository();
    }

    return CategoriesRepository.instance;
  }

  async create({ name, description}: ICreateCategoryDTO): Promise<Category> {
    const category = await prismaClient.category.create({ data: { name, description} });

    return category;
  }

  async all(): Promise<Category[]> {
    return await prismaClient.category.findMany();
  }

  async findByName(name: string): Promise<Category | null> {
    const category = await prismaClient.category.findFirst({where: { name }});

    return category;
  }
}

export { CategoriesRepository }