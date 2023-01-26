import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { User } from "../../entities/User";

interface IUsersRepository {
  create({ name, password, email, username}:ICreateUserDTO): Promise<User>
  find(id: string): Promise<User | null>
  findByUsername(username: string): Promise<User | null>
  findByEmail(email: string): Promise<User | null>
  findByUsernameOrEmail({ username, email }: { username: string, email: string }): Promise<User | null>
}

export { IUsersRepository }