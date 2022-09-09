"use strict";
import express from 'express';
import { DataSource } from 'typeorm';
import { User } from '../entities/User';
import data from './data';
const router = express.Router();
router.get('/',(req,res)=>{
  res.send("data here");
});
const obj = 'https://api.publicapis.org/entries';
const json = JSON.stringify(obj);
console.log(json);
// router.post('https://api.publicapis.org/entries',async function(req,res){
const userRepo = AppDataSource.getRepository(User);
// //insert
   let user : User = new User();
   user.name = "Amit";
    user.email = "amit@email.com";
    user.name = "Amita";
    user.email = "amita@email.com";
    const userInserted = await userRepo.save(user);
    res.json(userInserted);
})
export default router;
