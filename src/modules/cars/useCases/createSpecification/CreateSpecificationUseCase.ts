import { Specification } from "../../model/Specification";
import { SpecificationsRepository } from "../../repositories/implementations/SpecificationsRepository";
import { ISpecificationsRepository } from "../../repositories/interfaces/ISpecificationsRepository";

interface CreateSpecificationUseCaseDTO {
  name: string;
  description: string;
}

class CreateSpecificationUseCase {
  errors: string[]

  constructor(private specificationsRepository: ISpecificationsRepository){ }

  execute({name, description}:CreateSpecificationUseCaseDTO): Specification {
    const specificationAlreadyExists = this.specificationsRepository.findByName(name)

    const specification = this.specificationsRepository.create({ name, description })

    return specification;
  }
}

export { CreateSpecificationUseCase }