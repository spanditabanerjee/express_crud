"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("../app");
const User_1 = require("./../entities/User");
// userById:()=>{
//     return AppDataSource.getRepository(User).findOneBy()
// }
const resolvers = {
    Query: {
        user(args) {
            return app_1.AppDataSource.getRepository(User_1.User).find();
        }
    }
};
exports.default = resolvers;
