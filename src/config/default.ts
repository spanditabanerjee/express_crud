import { DataSourceOptions } from "typeorm";

const ormConfig: DataSourceOptions = {
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "@Spandy04",
    database: "dev",
    entities: ["src/entities/*{.ts,.js}"],
    synchronize: true,
    logging: true

}

export default ormConfig;