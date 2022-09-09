import express from 'express';

import { AppDataSource } from '../app';
import { User } from './../entities/User';
const router = express.Router();

router.get('/:id', async function (req, res) {
  const users = await AppDataSource.getRepository(User).findOneBy({id:req.params.id});
  return res.status(200).send(users);
});

export default router;


