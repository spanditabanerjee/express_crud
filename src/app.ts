import express from 'express';
import { DataSource } from 'typeorm';
import ormConfig from './config/default';
import data from './routes/data';
import get from './routes/get';
import insert from './routes/insert';
import update from './routes/update';


import "reflect-metadata";

// import './queries';

const app = express();
app.use(express.json());
app.use('/', data);
app.use('/', insert);
app.use('/', get);
app.use('/', update);
app.listen(2000);





//    app.get('/',async function(req,res){

// //    // delete a particular record
// //     await userRepo.delete(2);
// //     res.send("record deleted")

// //     //update
// //     await userRepo.update(2, {name: "Rajesh" , email: "rajesh@email.com"});
// // //     res.json("record Updated");
//  })

export const AppDataSource = new DataSource(ormConfig);
AppDataSource.initialize().then(() => {
    console.log("Database connected successfully");
    app.listen(3000, () => { console.log('Server Running'); })
}).catch((err) => console.log("error while connecting database", err));


// const db = require('./queries')
// const port = 3000

// app.get('/', (request, response) => {
//   response.json({ info: 'Node.js, Express, and Postgres API' })
// })


// app.get('/users/:id', db.getUserById)
// app.post('/users', db.createUser)
// app.put('/users/:id', db.updateUser)
// app.delete('/users/:id', db.deleteUser)

// app.listen(port, () => {
//   console.log(`App running on port ${port}.`)
// })
