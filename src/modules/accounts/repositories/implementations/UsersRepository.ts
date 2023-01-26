import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { User } from "../../entities/User";
import { IUsersRepository } from "../interfaces/IUsersRepository";
import { prismaClient } from "../../../../db/primasClient";

class UsersRepository implements IUsersRepository  {
  async create({ name, email, password, username }: ICreateUserDTO): Promise<User> {
    const user = await prismaClient.user.create({data: { 
      name,
      password,
      email,
      username,
      driver_license: ""
    }})

    return user;
  }

  async findByUsername(username: string): Promise<User | null> {
    const user = await prismaClient.user.findFirst({ where: { username }})

    return user;
  }

  async findByEmail(email: string): Promise<User | null> {
    const user = await prismaClient.user.findFirst({ where: { email }})

    return user;
  }

  async findByUsernameOrEmail({ username, email }: { username: string, email: string }): Promise<User | null> {
    const user = await prismaClient.user.findFirst({ where: { 
      OR: [
        {
          username: {
            equals: username
          }
        },
        {
          email: {
            equals: email
          }
        }
      ]
     }})

    return user;
  }

  async find(id: string): Promise<User | null> {
    const user = await prismaClient.user.findFirst({ where: { id }})

    return user;
  }
}

export { UsersRepository }