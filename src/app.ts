import express from 'express';
import { DataSource } from 'typeorm';
import ormConfig from './config/default';
import data from './routes/data';
import get from './routes/get';
import insert from './routes/insert';
import update from './routes/update';
import "reflect-metadata";


const app = express();
app.use(express.json());
app.use('/', data);
app.use('/', insert);
app.use('/', get);
app.use('/', update);
app.listen(2000);


export const AppDataSource = new DataSource(ormConfig);
AppDataSource.initialize().then(() => {
    console.log("Database connected successfully");
    app.listen(3000, () => { console.log('Server Running'); })
}).catch((err) => console.log("error while connecting database", err));

