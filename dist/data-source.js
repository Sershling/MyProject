"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
require("reflect-metadata");
var typeorm_1 = require("typeorm");
var Products_1 = require("./entity/Products");
var Brands_1 = require("./entity/Brands");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: "raja.db.elephantsql.com",
    port: 5432,
    username: "rrrkccmq",
    password: "DmCKFApbnflvUdgzPuFlL9Cy0u-uO6wa",
    database: "rrrkccmq",
    synchronize: true,
    logging: false,
    entities: [Products_1.Products, Brands_1.Brands],
    migrations: [],
    subscribers: [],
});
//# sourceMappingURL=data-source.js.map