import { Router } from 'express';
import multer from 'multer';

import { prismaClient } from '../db/primasClient';
import { createUserController } from '../modules/accounts/useCases/createUser/CreateUserController';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';


const usersRouter = Router();

const upload = multer({
  dest: './tmp'
})
usersRouter.post('/', createUserController.handle)

usersRouter.get('/', ensureAuthenticated ,async (req, res) => {
  const users = await prismaClient.user.findMany()

  return res.json(users)
})



export { usersRouter }