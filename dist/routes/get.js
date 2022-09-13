"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app_1 = require("../app");
const User_1 = require("./../entities/User");
const router = express_1.default.Router();
router.get('/:id', async function (req, res) {
    const users = await app_1.AppDataSource.getRepository(User_1.User).findOneBy({ id: req.params.id });
    return res.status(200).send(users);
});
exports.default = router;
