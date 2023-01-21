import { Specification } from "../../model/Specification";

interface ICreateSpecificationDTO {
  name: string;
  description: string;
}

interface ISpecificationsRepository {
  create({ name, description}: ICreateSpecificationDTO): Promise<Specification>
  all(): Promise<Specification[]>
  findByName(name: string): Promise<Specification | null>
}

export { ISpecificationsRepository, ICreateSpecificationDTO }