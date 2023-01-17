import { Category } from "../../model/Category";

interface ICreateSpecificationDTO {
  name: string;
  description: string;
}

interface ISpecificationsRepository {
  create({ name, description}: ICreateSpecificationDTO): Category 
  all(): Category[]
  findByName(name: string): Category | void 
}

export { ISpecificationsRepository, ICreateSpecificationDTO }