import express from 'express';

import { AppDataSource } from '../app';
import { User } from './../entities/User';
const router = express.Router();

router.get('/', async function (_req, res) {
  const users = await AppDataSource.getRepository(User).find();
  return res.status(200).send(users);
});

export default router;