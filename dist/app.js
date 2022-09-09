"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const User_1 = require("./entities/User");
// import insert from "./routes/insert";
const get_1 = __importDefault(require("./routes/get"));
const update_1 = __importDefault(require("./routes/update"));
const data_1 = __importDefault(require("./routes/data"));
const app = (0, express_1.default)();
//  app.use(express.json());
app.use('/', data_1.default);
// app.use('/',insert);
app.use('/', get_1.default);
app.use('/', update_1.default);
app.listen(3000);
app.get('/', async function (req, res) {
    const userRepo = AppDataSource.getRepository(User_1.User);
    //   //insert
    //  let user : User = new User();
    //  user.name = "Amit";
    //   user.email = "amit@email.com";
    //   user.name = "Amita";
    //   user.email = "amita@email.com";
    //   const userInserted = await userRepo.save(user);
    //   res.json(userInserted);
    //     // find all records
    //     const allRecords = await userRepo.find()
    //     res.json(allRecords);
    //    // delete a particular record
    //     await userRepo.delete(2);
    //     res.send("record deleted")
    //     //update
    //     await userRepo.update(2, {name: "Rajesh" , email: "rajesh@email.com"});
    // //     res.json("record Updated");
});
const AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "@Spandy04",
    database: "dev",
    entities: ["src/entities/*{.ts,.js}"],
    synchronize: true,
    logging: true
});
AppDataSource.initialize().then(() => {
    console.log("Database connected successfully");
    // app.listen(3000, ()=> { console.log('Server Running'); })
}).catch((err) => console.log("error while connecting database", err));
