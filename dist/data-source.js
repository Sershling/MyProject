"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
require("reflect-metadata");
var typeorm_1 = require("typeorm");
var Products_1 = require("./entity/Products");
var Brands_1 = require("./entity/Brands");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "123456",
    database: "postgres",
    synchronize: true,
    logging: false,
    entities: [Products_1.Products, Brands_1.Brands],
    migrations: [],
    subscribers: [],
});
//# sourceMappingURL=data-source.js.map