import "reflect-metadata"
import { DataSource } from "typeorm"
import { Products } from "./entity/Products"
import { Brands } from "./entity/Brands"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "123456",
    database: "postgres",
    synchronize: true,
    logging: false,
    entities: [Products, Brands],
    migrations: [],
    subscribers: [],
})
