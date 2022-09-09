import express from 'express';

import { AppDataSource } from '../app';
import { User } from './../entities/User';

const router = express.Router();


router.post('/', async function (req, res) {
    // const { body } = req
    // const users = AppDataSource.getRepository(User);
    // console.log(body);


    // res.json(userInserted);
    const user = await AppDataSource.getRepository(User).create(req.body)
    const results = await AppDataSource.getRepository(User).save(user)
    return res.status(200).send(results);
})



export default router;


