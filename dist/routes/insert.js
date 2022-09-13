"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app_1 = require("../app");
const User_1 = require("./../entities/User");
const router = express_1.default.Router();
router.post('/', async function (req, res) {
    // const { body } = req
    // const users = AppDataSource.getRepository(User);
    // console.log(body);
    // res.json(userInserted);
    const user = await app_1.AppDataSource.getRepository(User_1.User).create(req.body);
    const results = await app_1.AppDataSource.getRepository(User_1.User).save(user);
    return res.status(200).send(results);
});
exports.default = router;
