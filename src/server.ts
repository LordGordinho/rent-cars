import express from "express";

import { router } from "./routes";

const app = express();

app.use(express.json())
app.use(router)

app.get('/', (req, res) => {
  const { test } = req.body

  return res.json({ test })
})

app.listen(3333, () => console.log("Listing..."))