import { inject, injectable } from "tsyringe";
import { compare } from "bcrypt"; 
import { sign } from "jsonwebtoken";

import { User } from "../../entities/User";
import { IUsersRepository } from "../../repositories/interfaces/IUsersRepository";

interface ICreateSessionDTO {
  email: string;
  password: string;
}

interface ICreateSessionUseCaseReponseDTO {
  user: {
    username: string
    email: string
    name: string
  }
  token: string
}

@injectable()
class CreateSessionUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}

  async execute({email, password}: ICreateSessionDTO): Promise<ICreateSessionUseCaseReponseDTO> {
    const user = await this.usersRepository.findByUsernameOrEmail({ username: email, email})
    if(!user) throw new Error("User Not Found")

    const isCredentialValid = await compare(password, user.password)
    if(!isCredentialValid) throw new Error("User Not Found")
    
    const token = sign({}, (process.env.HASH_JWT || "teste"), { expiresIn: "7d", subject: user.id })

    return {
      user: {
        username: user.username,
        email: user.email,
        name: user.name
      },
      token
    };
  } 
}

export { CreateSessionUseCase }