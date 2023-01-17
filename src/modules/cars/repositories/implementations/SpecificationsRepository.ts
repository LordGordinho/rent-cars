import { Specification } from "../../model/Specification";
import { ISpecificationsRepository, ICreateSpecificationDTO } from "../interfaces/ISpecificationsRepository";

class SpecificationsRepository implements ISpecificationsRepository{
  private static instance: SpecificationsRepository;
  private categories: Specification[];

  private constructor() {
    this.categories = []
  }

  static getInstance(): SpecificationsRepository {
    if (!SpecificationsRepository.instance) {
      SpecificationsRepository.instance = new SpecificationsRepository();
    }

    return SpecificationsRepository.instance;
  }

  create({ name, description}: ICreateSpecificationDTO): Specification {
    const specification = new Specification;

    Object.assign(specification, {
      name,
      description,
      created_at: new Date
    });

    this.categories.push(specification);

    return specification;
  }

  all(): Specification[] {
    return this.categories;
  }

  findByName(name: string): Specification | void {
    const specification = this.categories.find( specification => specification.name === name);
    
    return specification;
  }
}

export { SpecificationsRepository }