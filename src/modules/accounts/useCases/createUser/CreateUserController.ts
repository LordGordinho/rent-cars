import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
  async handle(req: Request,  res: Response) {
    const createUser = container.resolve(CreateUserUseCase);
    const { name, password, email, username } = req.body

    try {
      const user = await createUser.execute({
        email,
        name,
        password,
        username
      })
  
      return res.status(201).json(user);
    } catch (error: any) {
      return res.status(400).send(error.message);
    }

  }
}

const createUserController = new CreateUserController()

export { createUserController, CreateUserController }