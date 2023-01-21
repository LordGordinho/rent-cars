import { inject, injectable } from "tsyringe";
import { Specification } from "../../model/Specification";
import { SpecificationsRepository } from "../../repositories/implementations/SpecificationsRepository";
import { ISpecificationsRepository } from "../../repositories/interfaces/ISpecificationsRepository";

interface CreateSpecificationUseCaseDTO {
  name: string;
  description: string;
}

@injectable()
class CreateSpecificationUseCase {
  errors: string[]

  constructor(
    @inject("SpecificationsRepository")
    private specificationsRepository: ISpecificationsRepository
  ){}

  async execute({name, description}:CreateSpecificationUseCaseDTO): Promise<Specification> {
    const specificationAlreadyExists = await this.specificationsRepository.findByName(name)

    if(specificationAlreadyExists) throw new Error("Specificatin AlreadyExists")

    const specification = await this.specificationsRepository.create({ name, description })

    return specification;
  }
}

export { CreateSpecificationUseCase }