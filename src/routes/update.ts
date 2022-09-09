import express from "express";
import { AppDataSource } from "../app";
import { User } from "../entities/User";
const router = express.Router();

router.put("/:id", async (req, res) => {
    const id = req.params.id;
    const { name, email } = req.body
    const subUpdate = await AppDataSource.getRepository(User).update(id, { name, email })
    // const users = await AppDataSource.getRepository(User).findOneBy(req.body)
    // // AppDataSource.getRepository(User).merge(users, req.body)
    // const results = await AppDataSource.getRepository(User).save(users)
    return res.status(200).send(subUpdate)
})

export default router;