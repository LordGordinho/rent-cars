import { NextFunction, Request, Response } from "express";
import { verify, decode }from "jsonwebtoken";

import { prismaClient } from "../db/primasClient";

async function ensureAuthenticated(req: Request, res: Response, next: NextFunction) {
  const tokenRaw = req.headers.authorization
  if(!tokenRaw) return res.status(400).send("Not Token")

  const [_,token] = tokenRaw.split(" ")
  const jwt = verify(token, (process.env.HASH_JWT || "teste"))
  if(!jwt.sub) return res.status(400).send("Not Token")

  const user_id = String(jwt.sub) 
  const user = await prismaClient.user.findFirst({ where: { id: user_id}})
  if(!user) return res.status(400).send("Not Token")

  console.log(user)
  return next()
}

export { ensureAuthenticated }