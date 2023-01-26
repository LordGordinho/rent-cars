import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateSessionUseCase } from "./CreateUserSessionCase";

class CreateSessionController {
  async handle(req: Request,  res: Response) {
    const createSession = container.resolve(CreateSessionUseCase);
    const { password, email } = req.body

    try {
      const token = await createSession.execute({
        email,
        password
      })
  
      return res.status(201).json(token);
    } catch (error: any) {
      return res.status(400).send(error.message);
    }
  }
}

const createSessionController = new CreateSessionController()

export { createSessionController, CreateSessionController }