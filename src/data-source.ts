import "reflect-metadata"
import { DataSource } from "typeorm"
import { Products } from "./entity/Products"
import { Brands } from "./entity/Brands"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "raja.db.elephantsql.com",
    port: 5432,
    username: "rrrkccmq",
    password: "DmCKFApbnflvUdgzPuFlL9Cy0u-uO6wa",
    database: "rrrkccmq",
    synchronize: true,
    logging: false,
    entities: [Products, Brands],
    migrations: [],
    subscribers: [],
})
