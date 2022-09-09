import express from 'express';

import { AppDataSource } from '../app';
import { User } from './../entities/User';
const router = express.Router();

router.get('/:id', async function (req, res) {
  const users = await AppDataSource.getRepository(User).findOneBy({id:req.params.id});
  return res.status(200).send(users);
});

export default router;



// import express, { response } from "express";

// const router = express.Router();

// // router.get('/',(req,res)=>{
// // //     const allRecords = userRepo.find()


// // // res.json(allRecords);

// // });

// const getUserById = (req: { params: { id: string; }; }, res: any) => {
//     const id = parseInt(req.params.id)
  
//     pool.query('SELECT * FROM users WHERE id = $1', [id], (error: any, results: { rows: any; }) => {
//       if (error) {
//         throw error
//       }
//       response.status(200).json(results.rows)
//     })
//   }

// export default router;