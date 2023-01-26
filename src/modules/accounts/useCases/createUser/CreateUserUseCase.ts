import { inject, injectable } from "tsyringe";
import { hash } from "bcrypt"

import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { User } from "../../entities/User";
import { IUsersRepository } from "../../repositories/interfaces/IUsersRepository";

@injectable()
class CreateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}

  async execute({name, email, username, password}: ICreateUserDTO): Promise<User> {
    const userAlreadyExists = await this.usersRepository.findByUsernameOrEmail({ email, username})
    if(userAlreadyExists) throw new Error()

    const passwordCrypt = await hash(password, 8)

    const user = await this.usersRepository.create({
      name,
      email,
      password: passwordCrypt,
      username
    })

    return user;
  } 
}

export { CreateUserUseCase }