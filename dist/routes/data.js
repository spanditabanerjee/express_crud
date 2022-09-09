"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const typeorm_1 = require("typeorm");
const User_1 = require("./../entities/User");
const router = express_1.default.Router();
// router.get('/',(req,res)=>{
//   res.send("data here");
// });
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
router.get('/', async function (req, res) {
    const userRepo = AppDataSource.getRepository(User_1.User);
    AppDataSource.initialize().then(() => {
        console.log("Database connected successfully");
        res.send("insert data");
    }).catch((err) => console.log("error while connecting database", err));
});
exports.default = router;
