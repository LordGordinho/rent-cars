import { prismaClient } from "../../../../db/primasClient";
import { Specification } from "../../model/Specification";
import { ISpecificationsRepository, ICreateSpecificationDTO } from "../interfaces/ISpecificationsRepository";

class SpecificationsRepository implements ISpecificationsRepository{
  private static instance: SpecificationsRepository;

  static getInstance(): SpecificationsRepository {
    if (!SpecificationsRepository.instance) {
      SpecificationsRepository.instance = new SpecificationsRepository();
    }

    return SpecificationsRepository.instance;
  }

  async create({ name, description}: ICreateSpecificationDTO): Promise<Specification> {
    const specification = await prismaClient.specification.create({data: { name, description }})

    return specification;
  }

  async all(): Promise<Specification[]> {
    return prismaClient.specification.findMany();
  }

  async findByName(name: string): Promise<Specification | null> {
    const specification = prismaClient.specification.findFirst({where: { name }});
    
    return specification;
  }
}

export { SpecificationsRepository }