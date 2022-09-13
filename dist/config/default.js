"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ormConfig = {
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "@Spandy04",
    database: "dev",
    entities: ["src/entities/*{.ts,.js}"],
    synchronize: true,
    logging: true
};
exports.default = ormConfig;
