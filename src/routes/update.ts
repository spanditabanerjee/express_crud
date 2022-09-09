import express from "express";
import { AppDataSource } from "../app";
import { User } from "../entities/User";
const router = express.Router();

// router.patch('/', async (req, res) => {
//     const users = AppDataSource.getRepository(User);
//     await users.update(2, { name: "Rajesh", email: "rajesh@email.com" });
//     res.send(users);

// });
router.put("/:id", async (req, res) => {
    const users = await AppDataSource.getRepository(User).findOneBy(req.body)
    // AppDataSource.getRepository(User).merge(users, req.body)
    const results = await AppDataSource.getRepository(User).save(users)
    return res.status(200).send(results)
})

export default router;